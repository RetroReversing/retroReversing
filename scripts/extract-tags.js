#!/usr/bin/env node

const fs = require('fs');
const { scanDirectories, readMarkdownFile, extractTags } = require('./markdown-utils');

/**
 * Script to extract and analyze all tags used in markdown frontmatter
 * Usage: node extract-tags.js [--sort-by-count] [--sort-by-name]
 * Default: sorts by usage count (descending)
 */

class TagExtractor {
    constructor() {
        this.tagCounts = new Map();
        this.fileTagMap = new Map();
        this.processedFiles = 0;
        this.totalFiles = 0;
        this.sortByCount = true; // default sorting
    }

    /**
     * Extract tags from a single markdown file
     */
    extractTagsFromFile(filePath) {
        const { success, metadata } = readMarkdownFile(filePath);
        
        if (!success) {
            return; // Error already logged by readMarkdownFile
        }

        const tags = extractTags(metadata);
        
        // Store tags for this file
        if (tags.length > 0) {
            this.fileTagMap.set(filePath, tags);
            
            // Count tag occurrences
            tags.forEach(tag => {
                this.tagCounts.set(tag, (this.tagCounts.get(tag) || 0) + 1);
            });
        }
        
        this.processedFiles++;
    }

    /**
     * Generate and display the tags report
     */
    generateReport() {
        console.log('\n=== MARKDOWN TAGS ANALYSIS REPORT ===\n');
        console.log(`Total files processed: ${this.processedFiles}`);
        console.log(`Files with tags: ${this.fileTagMap.size}`);
        console.log(`Unique tags found: ${this.tagCounts.size}\n`);

        if (this.tagCounts.size === 0) {
            console.log('No tags found in any files.');
            return;
        }

        // Convert Map to array and sort
        let sortedTags;
        if (this.sortByCount) {
            sortedTags = Array.from(this.tagCounts.entries())
                .sort((a, b) => b[1] - a[1]); // Sort by count descending
        } else {
            sortedTags = Array.from(this.tagCounts.entries())
                .sort((a, b) => a[0].localeCompare(b[0])); // Sort by name ascending
        }

        console.log('--- TAG USAGE STATISTICS ---');
        console.log(`${'Tag'.padEnd(30)} ${'Count'.padStart(8)} ${'Percentage'.padStart(12)}`);
        console.log('-'.repeat(52));

        sortedTags.forEach(([tag, count]) => {
            const percentage = ((count / this.fileTagMap.size) * 100).toFixed(1);
            console.log(`${tag.padEnd(30)} ${count.toString().padStart(8)} ${(percentage + '%').padStart(12)}`);
        });

        // Show most popular tags
        console.log('\n--- TOP 10 MOST USED TAGS ---');
        const top10 = sortedTags.slice(0, 10);
        top10.forEach(([tag, count], index) => {
            console.log(`${(index + 1).toString().padStart(2)}. ${tag} (${count} files)`);
        });

        // Show files for each tag (optional detailed view)
        if (process.argv.includes('--detailed')) {
            console.log('\n--- DETAILED TAG USAGE ---');
            sortedTags.forEach(([tag, count]) => {
                console.log(`\n${tag.toUpperCase()} (${count} files):`);
                
                const filesWithTag = Array.from(this.fileTagMap.entries())
                    .filter(([file, tags]) => tags.includes(tag))
                    .map(([file, tags]) => file);
                
                filesWithTag.forEach(file => {
                    console.log(`  - ${file}`);
                });
            });
        }

        // Export options
        if (process.argv.includes('--export-json')) {
            const exportData = {
                summary: {
                    totalFiles: this.processedFiles,
                    filesWithTags: this.fileTagMap.size,
                    uniqueTags: this.tagCounts.size,
                    generatedAt: new Date().toISOString()
                },
                tags: Object.fromEntries(this.tagCounts),
                fileTagMap: Object.fromEntries(this.fileTagMap)
            };
            
            fs.writeFileSync('valid-tags.json', JSON.stringify(exportData, null, 2));
            console.log('\nExported detailed data to valid-tags.json');
        }

        if (process.argv.includes('--export-csv')) {
            let csvContent = 'Tag,Count,Percentage\n';
            sortedTags.forEach(([tag, count]) => {
                const percentage = ((count / this.fileTagMap.size) * 100).toFixed(1);
                csvContent += `"${tag}",${count},${percentage}%\n`;
            });
            
            fs.writeFileSync('tags-export.csv', csvContent);
            console.log('\nExported tag statistics to tags-export.csv');
        }
    }

    /**
     * Main execution method
     */
    run() {
        // Parse command line arguments
        if (process.argv.includes('--sort-by-name')) {
            this.sortByCount = false;
        }

        const { allFiles, totalFiles } = scanDirectories();
        this.totalFiles = totalFiles;

        if (totalFiles === 0) {
            console.log('No markdown files found to process.');
            return;
        }

        console.log('\nExtracting tags...');

        // Process each file
        allFiles.forEach(file => {
            this.extractTagsFromFile(file);
        });

        // Generate report
        this.generateReport();
    }
}

// Main execution
function main() {
    console.log('Markdown Tags Extractor');
    console.log('========================');
    
    if (process.argv.includes('--help') || process.argv.includes('-h')) {
        console.log(`
Usage: node extract-tags.js [options]

Options:
  --sort-by-count     Sort tags by usage count (default)
  --sort-by-name      Sort tags alphabetically
  --detailed          Show which files use each tag
  --export-json       Export detailed data to valid-tags.json
  --export-csv        Export tag statistics to tags-export.csv
  --help, -h          Show this help message

Examples:
  node extract-tags.js
  node extract-tags.js --sort-by-name --detailed
  node extract-tags.js --export-json --export-csv
        `);
        return;
    }

    const extractor = new TagExtractor();
    extractor.run();
}

// Run if this file is executed directly
if (require.main === module) {
    main();
}

module.exports = TagExtractor;