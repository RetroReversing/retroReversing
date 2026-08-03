(function($) {
	"use strict";

	// Tooltips
  // ======================
	$("[data-toggle='tooltip']").tooltip({
		container: "body"
	});


	// Popovers
  // ======================
	$("[data-toggle='popover']").popover();


	// Sticky Sections
  // ======================
  if ($.fn.sticky) {
		$('section[data-fixed="true"]').sticky({ topSpacing: $('#header').outerHeight(), zIndex: 1039 }).on('sticky-start', function() { $('#header').addClass('no-shadow'); }).on('sticky-end', function() { $('#header').removeClass('no-shadow'); });
  }

	$(window).resize(function() {
    $('.sticky-wrapper').each(function() {
      $(this).css('min-height', $(this).children().outerHeight() );
    });
  });


	// Fixed Navigation
  // ======================
	$(window).scroll(function(){
  	if ($(this).scrollTop() > 40) {
    	$('body').addClass('header-scroll');
    } else {
			$('body').removeClass('header-scroll');
    }
  });


	// Responsive Navbar (legacy mobile nav removed; sidebar handles navigation)
  // ======================
	// Toggle Navbar - no-op when top nav is removed

	// Site sidebar toggle (YouTube-style)
	// ======================
	(function () {
		if (!$('body').hasClass('has-site-sidebar')) return;

		var $toggle = $('.rr-home-sidebar-toggle');
		var desktopQuery = window.matchMedia('(min-width: 1201px)');

		function isDesktop() {
			return desktopQuery.matches;
		}

		function isHomePage() {
			return $('body').hasClass('home-page');
		}

		function applyInitialState() {
			if (!isDesktop()) return;
			if (isHomePage()) {
				$('body').removeClass('home-sidebar-collapsed');
				$toggle.attr('aria-expanded', 'true');
			} else {
				$('body').addClass('home-sidebar-collapsed');
				$toggle.attr('aria-expanded', 'false');
			}
		}

		applyInitialState();

		$toggle.click(function () {
			if (isDesktop()) {
				$('body').toggleClass('home-sidebar-collapsed');
				var collapsed = $('body').hasClass('home-sidebar-collapsed');
				$toggle.attr('aria-expanded', collapsed ? 'false' : 'true');
			} else {
				$('body').toggleClass('home-sidebar-open');
				var open = $('body').hasClass('home-sidebar-open');
				$toggle.attr('aria-expanded', open ? 'true' : 'false');
			}
			return false;
		});

		$(document).click(function (e) {
			if (isDesktop() || !$('body').hasClass('home-sidebar-open')) return;
			if (!$(e.target).closest('.rr-home-section-left, .rr-home-sidebar-toggle').length) {
				$('body').removeClass('home-sidebar-open');
				$toggle.attr('aria-expanded', 'false');
			}
		});

		$('.rr-home-sidebar-backdrop').click(function () {
			$('body').removeClass('home-sidebar-open');
			$toggle.attr('aria-expanded', 'false');
		});

		$(window).resize(function () {
			if (isDesktop()) {
				$('body').removeClass('home-sidebar-open');
				applyInitialState();
			} else {
				$('body').removeClass('home-sidebar-collapsed');
			}
		});

		$(document).on('click', '.rr-home-sidebar-show-more', function (e) {
			e.preventDefault();
			var $section = $(this).closest('.rr-home-sidebar-consoles');
			var expanded = $section.toggleClass('rr-home-sidebar-consoles-expanded').hasClass('rr-home-sidebar-consoles-expanded');
			$(this).attr('aria-expanded', expanded ? 'true' : 'false');
			$(this).find('.rr-home-sidebar-show-more-label').text(expanded ? 'Show less' : 'Show more');
			return false;
		});

		$(document).on('click', '.rr-home-sidebar-section-toggle', function (e) {
			e.preventDefault();
			if (isDesktop() && $('body').hasClass('home-sidebar-collapsed')) {
				$('body').removeClass('home-sidebar-collapsed');
				$toggle.attr('aria-expanded', 'true');
				$(this).closest('.rr-home-sidebar-section').addClass('rr-home-sidebar-section-open');
				$(this).attr('aria-expanded', 'true');
				return false;
			}
			var $section = $(this).closest('.rr-home-sidebar-section');
			var open = $section.toggleClass('rr-home-sidebar-section-open').hasClass('rr-home-sidebar-section-open');
			$(this).attr('aria-expanded', open ? 'true' : 'false');
			return false;
		});

	})();

	// Homepage chip filter for recently updated posts
	// ======================
	(function () {
		if (!$('body').hasClass('home-page')) return;

		var $filterSection = $('#rr-recent-posts-filter');
		if (!$filterSection.length) return;

		var $items = $filterSection.find('.rr-recent-post-item');
		var $showAll = $('#rr-recent-posts-show-all');
		var initialLimit = parseInt($filterSection.attr('data-display-limit'), 10) || 4;
		var currentFilter = '';
		var $chips = $('.rr-youtube-chip');
		var baseUrl = $filterSection.attr('data-baseurl') || '';

		function parseTags(tagString) {
			return (tagString || '').toLowerCase().split(',').map(function (tag) {
				return tag.trim();
			}).filter(Boolean);
		}

		function itemMatchesFilter(tags, filter) {
			if (!filter) return true;
			return tags.indexOf(filter.toLowerCase()) !== -1;
		}

		function updateShowAll($chip) {
			var showAllHref = $chip.attr('data-show-all-href');
			if (!showAllHref) {
				$showAll.attr('hidden', 'hidden');
				return;
			}

			if (showAllHref.charAt(0) === '#') {
				$showAll.attr('href', showAllHref);
			} else {
				$showAll.attr('href', baseUrl + showAllHref);
			}
			$showAll.removeAttr('hidden');
		}

		function renderFilter() {
			var shown = 0;

			$items.each(function () {
				var $item = $(this);
				var tags = parseTags($item.attr('data-tags'));
				if (itemMatchesFilter(tags, currentFilter)) {
					if (shown < initialLimit) {
						$item.show();
						shown += 1;
					} else {
						$item.hide();
					}
				} else {
					$item.hide();
				}
			});

			if (typeof lazyLoad === 'function') {
				lazyLoad();
			}
		}

		$chips.on('click', function () {
			var $chip = $(this);
			$chips.removeClass('rr-youtube-chip-active').attr('aria-selected', 'false');
			$chip.addClass('rr-youtube-chip-active').attr('aria-selected', 'true');
			currentFilter = $chip.attr('data-filter') || '';
			updateShowAll($chip);
			renderFilter();
			this.blur();
		});

		updateShowAll($chips.filter('.rr-youtube-chip-active').first());
		renderFilter();
	})();

	// Search Bar
  // ======================
	// Toggle Search
	$("[data-toggle='search']").click(function () {
		$('body').toggleClass('navbar-search-open');
		return false;
	});

	// Close Search
	$(".navbar-search-overlay .close").click(function () {
		$('body').removeClass('navbar-search-open');
		return false;
	});


	// Progress Bars
  // ======================
	setTimeout(function(){
		$('.progress-loaded .progress-bar').each(function() {
			var me = $(this);
			var perc = me.attr("aria-valuenow");
			var current_perc = 0;
			var progress = setInterval(function() {
				if (current_perc>=perc) {
					clearInterval(progress);
				} else {
					current_perc +=1;
					me.css('width', (current_perc)+'%');
				}
			}, 0);
		});
	},0);


	// Carousel
  // ======================
	// Ken Burns effect
	$('.item-active').removeClass('item-active');

	// Animated Carousel
	function slideranimation( elems ) {
		var animEndEv = 'webkitAnimationEnd animationend';
		elems.each(function () {
			var $this = $(this),
			$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	var $fullCarousel = $('.carousel-animated'),
	$firstAnimatingElems = $fullCarousel.find('.carousel-item:first').find("[data-animation ^= 'animated']");
	slideranimation($firstAnimatingElems);
	$fullCarousel.carousel('pause');

	$fullCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		slideranimation($animatingElems);
	});

	// Full Height
//   Used for the carousel on the homepage
	$('.full-height .carousel-item').each(function () {
// 		$(this).css('height', $(window).height()  - $('header').outerHeight() );
    $(this).css('height', '50vh'  );
  });

// 	$(window).resize(function () {
//     $('.full-height .carousel-item').each(function () {
// 			$(this).css('height', $(window).height()  - $('header').outerHeight() );
//     });
//   });


	// Embed Player
  // ======================
	$(".embed-responsive i").click(function() {
		$(this).parent().find('.video-play-icon').addClass("animated fadeOut");
    $(this).parent().parent().find('.video-caption').addClass("animated fadeOut");
		$(this).parent().parent().find('img').addClass("animated fadeOut");
    $(this).parent().parent().parent().addClass('played');
		var id = $(this).parent().parent().parent().data("src");
    $(this).parent().append('<iframe class="embed-responsive-item" src="' + id + '" allowfullscreen></iframe>');
  });


	// Model
  // ======================
	$('.modal').on('show.bs.modal', function() {
	  $(this).show();
	  setModalMaxHeight(this);
	});

	$(window).resize(function() {
	  if ($('.modal.show').length != 0) {
	    setModalMaxHeight($('.modal.show'));
	  }
	});


	// Check All
	// ======================
	$(".table thead input:checkbox").click(function(){
    $('input:checkbox').not(this).prop('checked', this.checked);
	});
})(window.jQuery);

function setModalMaxHeight(element) {
	this.$element     = $(element);
	this.$content     = this.$element.find('.modal-content');
	var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
	var dialogMargin  = $(window).width() < 768 ? 20 : 60;
	var contentHeight = $(window).height() - (dialogMargin + borderWidth);
	var headerHeight  = this.$element.find('.modal-header').outerHeight() || 0;
	var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
	var maxHeight     = contentHeight - (headerHeight + footerHeight);

	this.$content.css({
		'overflow': 'hidden'
	});

	this.$element.find('.modal-body').css({
		'max-height': maxHeight,
		'overflow-y': 'auto'
	});
}

function replaceAll(str, find, replace) {
       return str.replace(new RegExp(find, 'g'), replace);
}

function handle_tab_groups() {
      var rr_tab_groups = $(".rr-tabs");

      rr_tab_groups.each(function loop_tab_group(index, tab_group) {
        var rr_tabs = $(tab_group).find('.rr-tab');

        var li_tabs = rr_tabs.map(function mapTabsToHeaders(i,v) {
          var title = $(v).attr('title');
          var isdefault = $(v).attr('default') === "";
          var classnames = "";
          if (isdefault) {
            classnames = "active"
          }
          var href_title=replaceAll(title,' ','___');
          return '<li><a class="'+classnames+'" href="#/'+href_title+'">'+title+'</a></li>';
        });

        var result_html = li_tabs.toArray().join('');
        $(tab_group).prepend('<ul class="tabs group">'+result_html+'</ul>');

        var tabs =  $(tab_group).find(".tabs li a");

        $(tab_group).find('.rr-tab').hide();
        $(tab_group).find('div[default]').show();

        tabs.click(function() {
          var content = this.hash.replace('/','').replace('#','');
          tabs.removeClass("active");
          $(this).addClass("active");
          $(tab_group).find('.rr-tab').hide();
          var href_content=replaceAll(content,'___',' ');

          $('div[title|="'+href_content+'"]').show();
        });

      });
}

// isInView is used for lazy loading to check if we should load it or not
function isInView(element) {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var elementTop = $(element).offset().top;
    return (elementTop >= scrollTop && elementTop <= scrollTop + windowHeight);
  }

function lazyLoad() {
      var card_images = document.querySelectorAll('.lazy-load');

      // loop over each lazy loadable image
      card_images.forEach(function(content_image) {
        if (!isInView(content_image)) {
          return;
        }
        var image_url = content_image.getAttribute('data-image-full');

          // change the src of the content image to load the new high res photo
          content_image.src = image_url;

        try {
           $(content_image).removeClass("lazy-load");
        } catch (e) {
          console.error("error removing lazy-load class:", e);
        }
      });

    }

function initializeMermaidDiagrams() {
  if (typeof mermaid === "undefined") {
    return;
  }

  var mermaidBlocks = document.querySelectorAll("pre code.language-mermaid, pre code.lang-mermaid");

  mermaidBlocks.forEach(function(codeBlock, index) {
    var pre = codeBlock.parentElement;
    if (!pre || pre.dataset.mermaidProcessed === "true") {
      return;
    }

    var mermaidContainer = document.createElement("div");
    mermaidContainer.className = "mermaid";
    mermaidContainer.textContent = codeBlock.textContent;
    mermaidContainer.id = "mermaid-diagram-" + index;
    pre.replaceWith(mermaidContainer);
  });

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "loose",
    theme: "default"
  });

  function setupMermaidDiagramZoom() {
    var mermaidContainers = document.querySelectorAll(".mermaid");

    mermaidContainers.forEach(function(container) {
      if (container.dataset.rrMermaidZoomInitialized === "true") {
        return;
      }

      var svg = container.querySelector("svg");
      if (!svg) {
        return;
      }

      container.dataset.rrMermaidZoomInitialized = "true";
      container.dataset.rrMermaidZoom = "1";
      container.classList.add("rr-mermaid-zoom");

      var canvas = document.createElement("div");
      canvas.className = "rr-mermaid-canvas";

      // Mermaid may output other nodes (e.g. <style>) alongside the SVG; keep them together.
      while (container.firstChild) {
        canvas.appendChild(container.firstChild);
      }

      var controls = document.createElement("div");
      controls.className = "rr-mermaid-controls";

      function makeButton(label, className, title) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = className;
        button.textContent = label;
        button.setAttribute("aria-label", title);
        button.title = title;
        return button;
      }

      var zoomInButton = makeButton("+", "rr-mermaid-zoom-in", "Zoom in");
      var zoomOutButton = makeButton("−", "rr-mermaid-zoom-out", "Zoom out");
      var resetButton = makeButton("100%", "rr-mermaid-zoom-reset", "Reset zoom");

      controls.appendChild(zoomOutButton);
      controls.appendChild(resetButton);
      controls.appendChild(zoomInButton);

      container.appendChild(controls);
      container.appendChild(canvas);

      // Re-query after we moved the DOM around.
      svg = canvas.querySelector("svg");
      if (!svg) {
        return;
      }

      function getBaseSize() {
        if (svg.dataset.rrMermaidBaseWidth && svg.dataset.rrMermaidBaseHeight) {
          return {
            width: parseFloat(svg.dataset.rrMermaidBaseWidth),
            height: parseFloat(svg.dataset.rrMermaidBaseHeight)
          };
        }

        var rect = svg.getBoundingClientRect();
        var baseWidth = rect.width;
        var baseHeight = rect.height;

        if ((!baseWidth || !baseHeight) && svg.viewBox && svg.viewBox.baseVal) {
          baseWidth = svg.viewBox.baseVal.width;
          baseHeight = svg.viewBox.baseVal.height;
        }

        // Fallback to something sensible rather than breaking.
        if (!baseWidth) {
          baseWidth = 800;
        }
        if (!baseHeight) {
          baseHeight = 400;
        }

        svg.dataset.rrMermaidBaseWidth = String(baseWidth);
        svg.dataset.rrMermaidBaseHeight = String(baseHeight);

        return {
          width: baseWidth,
          height: baseHeight
        };
      }

      function applyZoom(nextZoom) {
        var zoom = Math.max(0.5, Math.min(4, nextZoom));
        container.dataset.rrMermaidZoom = String(zoom);
        resetButton.textContent = Math.round(zoom * 100) + "%";

        var baseSize = getBaseSize();
        svg.style.width = (baseSize.width * zoom) + "px";
        svg.style.height = (baseSize.height * zoom) + "px";
        svg.style.maxWidth = "none";
      }

      function getZoom() {
        var zoom = parseFloat(container.dataset.rrMermaidZoom || "1");
        return Number.isFinite(zoom) ? zoom : 1;
      }

      zoomInButton.addEventListener("click", function() {
        applyZoom(getZoom() * 1.2);
      });

      zoomOutButton.addEventListener("click", function() {
        applyZoom(getZoom() / 1.2);
      });

      resetButton.addEventListener("click", function() {
        applyZoom(1);
      });

      // Ctrl/⌘ + wheel zoom, double-click reset.
      canvas.addEventListener("wheel", function(event) {
        if (!event.ctrlKey && !event.metaKey) {
          return;
        }

        event.preventDefault();

        var direction = event.deltaY < 0 ? 1 : -1;
        var factor = direction > 0 ? 1.12 : (1 / 1.12);
        applyZoom(getZoom() * factor);
      }, { passive: false });

      canvas.addEventListener("dblclick", function() {
        applyZoom(1);
      });

      // Ensure zoom starts from the actual rendered size (not a 100% CSS-constrained size).
      applyZoom(1);
    });
  }

  if (typeof mermaid.run === "function") {
    Promise.resolve(mermaid.run({
      querySelector: ".mermaid"
    })).then(setupMermaidDiagramZoom).catch(function() {
      // If rendering fails, don't break the rest of the page.
    });
  } else if (typeof mermaid.init === "function") {
    mermaid.init(undefined, document.querySelectorAll(".mermaid"));
    setupMermaidDiagramZoom();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('[role="doc-endnote"], [role="doc-backlink"], [role="doc-noteref"]').forEach(function(el) {
    el.removeAttribute("role");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var hasMermaidBlocks = document.querySelector("pre code.language-mermaid, pre code.lang-mermaid");
  if (!hasMermaidBlocks) {
    return;
  }

  function scheduleMermaidInit() {
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(function() {
        initializeMermaidDiagrams();
      }, { timeout: 2500 });
    } else {
      setTimeout(function() {
        initializeMermaidDiagrams();
      }, 0);
    }
  }

  function waitForMermaid(attemptsRemaining) {
    if (typeof mermaid !== "undefined") {
      scheduleMermaidInit();
      return;
    }

    if (attemptsRemaining <= 0) {
      return;
    }

    setTimeout(function() {
      waitForMermaid(attemptsRemaining - 1);
    }, 250);
  }

  // Mermaid is loaded via a deferred external script; wait briefly for it to be available.
  waitForMermaid(20);
});

  function setupCarousel() {
    var items = 1;
//       if ($(window).width() > 600) {
//         items=2;
//       }

      // Full Width Carousel
      $('.owl-slide-auto-play').owlCarousel({
        nav: true,
        loop: true,
        autoplay: true,
        items: items
      });

      $('.owl-slide-no-auto').owlCarousel({
        nav: true,
        loop: true,
        autoplay: false,
        items: 1
      });
  }

  function setupDataTables() {
    // Table Handling
    // Make markdown tables have the bootstrap table class to look pretty
    var $tables = $('table');
    if (!$tables.length) return;

    $tables.addClass('table');

    // We only want striped tables if the table has more than one element
    function onlyRowsGreaterThanTwo(index) { return $( "tr", this ).length > 2 }
    $tables.filter(onlyRowsGreaterThanTwo).addClass('table-striped');

    // Only use the fancy table if elements greater than minimum
    function onlyRowsGreaterThanMinimum(index) { return $( "tr", this ).length > 11 }
    var $tablesToEnhance = $tables.filter(onlyRowsGreaterThanMinimum);
    if (!$tablesToEnhance.length) return;

    function isEligibleForDataTable($table) {
      // DataTables expects a reasonably well-formed table with a header row.
      // Some pages have layout/diagram tables or mixed colspan/rowspan that break initialization.
      var hasHeaderCells = $table.find('thead tr th').length > 0;
      if (!hasHeaderCells) return false;

      var hasComplexSpans = $table.find('th[colspan],th[rowspan],td[colspan],td[rowspan]').length > 0;
      if (hasComplexSpans) return false;

      // DataTables assumes a consistent column count across the header and body rows.
      var $headerRows = $table.find('thead tr');
      if ($headerRows.length !== 1) return false;

      var $headerRow = $headerRows.first();
      var headerColumnCount = $headerRow.children('th,td').length;
      if (!headerColumnCount) return false;

      var $bodyRows = $table.find('tbody tr');
      if (!$bodyRows.length) {
        $bodyRows = $table.find('tr').not($table.find('thead tr'));
      }
      if (!$bodyRows.length) return false;

      var hasMismatchedColumns = false;
      $bodyRows.each(function() {
        if ($(this).children('th,td').length !== headerColumnCount) {
          hasMismatchedColumns = true;
          return false;
        }
      });
      if (hasMismatchedColumns) return false;

      return true;
    }

    function initialize() {
      if (typeof $.fn.DataTable !== 'function') return;

      if (!window.__rrDataTablesErrorHandlerInstalled) {
        window.__rrDataTablesErrorHandlerInstalled = true;
        window.addEventListener('error', function(event) {
          var message = (event && event.message) ? String(event.message) : '';
          var filename = (event && event.filename) ? String(event.filename) : '';
          var isDataTablesError = message.indexOf('mData') !== -1 && filename.indexOf('datatables') !== -1;
          if (!isDataTablesError) return;

          try {
            var lastTable = window.__rrLastDataTableTable;
            if (lastTable && typeof $ !== 'undefined') {
              // Prevent repeated attempts on a table that DataTables cannot parse.
              lastTable.setAttribute('data-rr-datatable-disabled', 'true');
              if ($.fn.dataTable && typeof $.fn.dataTable.isDataTable === 'function' && $.fn.dataTable.isDataTable(lastTable)) {
                $(lastTable).DataTable().destroy();
              }
            }
          } catch (e) {
            // Swallow cleanup errors.
          }

          if (event && typeof event.preventDefault === 'function') {
            event.preventDefault();
          }
        }, true);
      }

      $tablesToEnhance.each(function() {
        var table = this;
        var $table = $(table);
        if (!isEligibleForDataTable($table)) return;
        if (table.getAttribute('data-rr-datatable-disabled') === 'true') return;

        if ($.fn.dataTable && typeof $.fn.dataTable.isDataTable === 'function' && $.fn.dataTable.isDataTable(table)) {
          return;
        }

        try {
          window.__rrLastDataTableTable = table;
          $table.DataTable({
            autoWidth: false,
            deferRender: true
          });
        } catch (e) {
          // If a single table is malformed, don't break the rest of the page.
          console.warn('DataTables init skipped for a table:', e);
        }
      });
    }

    if (typeof $.fn.DataTable === 'function') {
      initialize();
      return;
    }

    var script = document.createElement('script');
    script.src = 'https://cdn.datatables.net/v/dt/dt-1.10.18/b-1.5.2/b-colvis-1.5.2/b-html5-1.5.2/r-2.2.2/rg-1.0.3/sc-1.5.0/datatables.min.js';
    script.defer = true;
    script.onload = initialize;
    document.head.appendChild(script);
    //  End Table Handling

  }

  function generateChangelogs($) {
        $('.rr-version-gen').each(function(index) {
            $(this).replaceWith( `<div>
                <div class="rr-changelog-version">`+$(this).attr('version')+`</div>
                <div class="rr-changelog-date">`+$(this).attr('date')+`</div>
        </div>
            `);
        });

        $('.rr-info-gen').each(function(index) {
          let childText = $(this).text();
          let badge = $(this).attr('badge');
          let description = childText || $(this).attr('desc');
          let locationOfFirstDash = childText.indexOf(' - ');
          if (locationOfFirstDash > 0) {
            badge = childText.substr(0, locationOfFirstDash)
            description = childText.substr(locationOfFirstDash+3) // get everything after the first " - ", plus the three characters that make up the deliminator
          }
          $(this).replaceWith(`<div class="rr-changelog rr-changelog-success">
                        <div class="rr-changelog-badge">`+badge+`</div>
                        <div class="rr-changelog-info">`+description+`</div>
                    </div>`);
        })
     }



    (function($) {
      handle_tab_groups();
    })(jQuery);

    function onScroll() {
      // This is called everytime the user scrolls so make sure not to do anything too heavy here
      lazyLoad();
    }


    (function($) {
      "use strict";

     $(document).ready(function() {
      setupCarousel();
      setupDataTables();

      $("img.postImage").each(function() {
        var $img = $(this);
        var $parent = $img.parent();
        if ($parent && $parent.is("a[data-lightbox]")) {
          return;
        }
        $img.wrap($("<a/>", {
            href: $img.attr("src"),
            "data-lightbox": '{"gallery": "page-images"}'
        }));
      });

      // lightbox
      // $('[data-lightbox]').lightbox();

      // scroll animations
      new WOW().init();

       $(window).scroll(onScroll)

       generateChangelogs($);

      // geopattern
      $(function() {
        if (typeof $.fn.geopattern !== 'function') {
          return;
        }
        $('.geopattern').each(function geoP() {
          $(this).geopattern($(this).attr('data-title'));
        });
      });
      // end geopattern

    // Lazy Load Images
    //     window.addEventListener('load', function() {
      // setTimeout to simulate the delay from a real page load
      setTimeout(lazyLoad, 1000);
    //     });

    window.addEventListener('click', function() {
      // Whenever the user clicks on something like the table page buttons, make sure to load any new images
      setTimeout(lazyLoad, 100);
    });

    }); // end ready function

    })(jQuery);
