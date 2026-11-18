# Run with: bundle exec ruby scripts/tests/test_decomp_project_articles.rb
require 'minitest/autorun'
require 'jekyll'
require 'nokogiri'
require 'tmpdir'
require 'fileutils'
require 'json'

class DecompProjectArticlesTest < Minitest::Test
  ROOT = File.expand_path('../..', __dir__)

  def setup
    # Keep generated files on the data volume, including during local tests.
    FileUtils.mkdir_p(File.join(ROOT, 'tmp'))
    @temp = Dir.mktmpdir('rr-project-articles-', File.join(ROOT, 'tmp'))
    @source = File.join(@temp, 'source')
    FileUtils.mkdir_p(File.join(@source, '_data', 'decompilations'))
    FileUtils.mkdir_p(File.join(@source, '_includes'))
    %w[decomp-project-articles decomp-project-section decomp-project-article article-figure].each do |name|
      FileUtils.cp(File.join(ROOT, '_includes', "#{name}.html"), File.join(@source, '_includes'))
    end
    File.write(File.join(@source, 'index.html'), "---\n---\n{% include decomp-project-articles.html console=\"nintendo-64\" %}")
    @rows = []
    @projects = {}
  end

  def teardown
    FileUtils.remove_entry(@temp)
  end

  def row(id, name, type, url, notes: '', images: [], ports: [])
    @projects[id] = {
      'name' => name, 'repository_url' => url, 'project_type' => type,
      'activity' => {}, 'completion_status' => nil
    }
    result = {
      'project' => id, 'name_markdown' => "[#{name}](#{url})",
      'project_types' => [{ 'name' => type, 'url' => url }],
      'notes_markdown' => notes, 'images' => images, 'ports' => ports,
      'completion_percent' => nil, 'completion_metric' => 'completion', 'completion_qualifier' => ''
    }
    @rows << result
    result
  end

  def render
    File.write(File.join(@source, '_data', 'decompilations', 'nintendo-64.json'), JSON.generate({
      'projects' => @projects, 'consoles' => { 'nintendo-64' => { 'rows' => @rows } }
    }))
    config = Jekyll.configuration({
      'source' => @source, 'destination' => File.join(@temp, 'site'),
      'config' => [], 'plugins' => [], 'quiet' => true, 'incremental' => false
    })
    Jekyll::Site.new(config).process
    Nokogiri::HTML(File.read(File.join(@temp, 'site', 'index.html')))
  end

  def section_for(heading)
    heading.xpath('preceding-sibling::h2[1]').text
  end

  def test_every_method_has_its_own_heading_and_recompilation_wins_over_port
    row('game', 'Original Game', 'Matching decompilation', 'https://example.org/source', ports: [{
      'name' => 'Game Recompiled', 'url' => 'https://example.org/RECOMP/',
      'project_types' => ['Native port'], 'platforms' => ['Linux'], 'description_markdown' => 'Widescreen support.'
    }])
    recomp = row('recomp', 'Game Recompiled', 'Static recompilation', 'https://example.org/recomp', notes: 'Experimental build.')
    recomp['project_types'] << { 'name' => 'Native port', 'url' => 'https://example.org/recomp' }
    row('port', 'Game Native', 'Native port', 'https://example.org/native')
    doc = render
    assert_equal ['Byte-Accurate Decompilations', 'Recompilations', 'Ports'], doc.css('h2').map(&:text)
    assert_equal 3, doc.css('h3').size
    assert_equal 'Byte-Accurate Decompilations', section_for(doc.at_css('#project-example-org-source'))
    assert_equal 'Recompilations', section_for(doc.at_css('#project-example-org-recomp'))
    assert_equal 'Ports', section_for(doc.at_css('#project-example-org-native'))
    copy = doc.at_css('#project-example-org-recomp').next_element.text
    assert_includes copy, 'Experimental build.'
    assert_includes copy, 'Widescreen support.'
    assert_includes copy, 'Recorded targets: Linux.'
    assert_empty doc.css('table, script')
  end

  def test_adding_catalogue_row_changes_generated_html_without_a_generated_article
    row('first', 'First Game', 'Decompilation', 'https://example.org/first')
    assert_equal ['First Game'], render.css('h3').map(&:text)
    row('second', 'Second Game', 'Decompilation', 'https://example.org/second', notes: 'A new source reconstruction.')
    doc = render
    assert_equal ['First Game', 'Second Game'], doc.css('h3').map(&:text)
    assert_includes doc.text, 'A new source reconstruction.'
  end

  def test_artwork_progress_and_escaped_titles_are_present_without_javascript
    game = row('art', 'Game & <Friends>', 'Decompilation', 'https://example.org/art', images: [{
      'url' => 'https://example.org/cover.png', 'alt' => 'Game & friends box art', 'width' => 100
    }])
    game.merge!('completion_percent' => 42, 'completion_qualifier' => '>', 'completion_metric' => 'accuracy')
    @projects['art']['activity'] = {
      'status' => 'Inactive', 'last_commit_at' => '2025-01-02T00:00:00Z',
      'last_commit_url' => 'https://example.org/commit', 'check_error' => 'network'
    }
    doc = render
    assert_equal 'Game & <Friends>', doc.at_css('h3').text
    image = doc.at_css('.rr-project-article img')
    assert_equal 'https://example.org/cover.png', image['src']
    assert_equal 'anonymous', image['crossorigin']
    assert_equal 'Game & friends box art', image['alt']
    assert_nil image['height']
    assert_includes doc.text, 'Recorded progress: >42% accuracy.'
    assert_includes doc.text, 'Inactive repository.'
    assert_includes doc.text, 'Latest activity check unavailable.'
    refute_includes doc.text, '42% complete'
    game['completion_qualifier'] = 'approximately'
    assert_includes render.text, 'approximately 42% accuracy.'
    game['completion_metric'] = 'code by size'
    assert_includes render.text, 'approximately 42% code by size.'
    game['completion_metric'] = 'code-and-data-byte-matching'
    assert_includes render.text, 'approximately 42% code and data byte matching.'
  end

  def test_disassembly_and_port_only_entries_keep_their_actual_scope
    row('assembly', 'Assembly Game', 'Disassembly', 'https://example.org/asm', ports: [{
      'name' => 'Independent Port', 'url' => 'https://example.org/port',
      'project_types' => ['Native port'], 'platforms' => [], 'description_markdown' => 'Work in progress.'
    }])
    doc = render
    assert_includes doc.text, 'assembly code, rather than recovered C or C++'
    assert_includes doc.text, 'Work in progress.'
    assert_equal 'Ports', section_for(doc.css('h3').last)
    assert_equal 2, doc.css('.rr-project-article--text-only').size
    assert_empty doc.css('img')
    refute_includes doc.text, '100%'
  end
end
