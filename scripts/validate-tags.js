#!/usr/bin/env node

const { scanDirectories, readMarkdownFile, extractTags, loadJsonFile } = require('./markdown-utils');

/**
 * Script to validate tags in markdown files against approved tags in valid-tags.json
 * Usage: node validate-tags.js [path-to-valid-tags.json]
 * Default: uses valid-tags.json in current directory
 */

class TagValidator {
    constructor(validTagsFilePath = 'valid-tags.json') {
        this.validTagsFilePath = validTagsFilePath;
        this.validTags = new Set();
        this.processedFiles = 0;
        this.totalFiles = 0;
        this.invalidTags = [];
        this.filesWithErrors = 0;
    }

    /**
     * Load and parse the valid tags from valid-tags.json
     */
    loadValidTags() {
        const { success, data, error } = loadJsonFile(this.validTagsFilePath);
        
        if (!success) {
            console.error(`❌ Error: ${error}`);
            if (error.includes('not found')) {
                console.log(`\nTo generate this file, run: node scripts/extract-tags.js --export-json`);
            }
            process.exit(1);
        }
        
        if (!data.tags || typeof data.tags !== 'object') {
            console.error(`❌ Error: Invalid format in '${this.validTagsFilePath}'. Expected 'tags' object.`);
            process.exit(1);
        }

        // Add all valid tags to the Set (convert to lowercase for case-insensitive comparison)
        Object.keys(data.tags).forEach(tag => {
            this.validTags.add(tag.toLowerCase());
        });

        console.log(`✅ Loaded ${this.validTags.size} valid tags from ${this.validTagsFilePath}`);
        console.log(`📊 Based on analysis of ${data.summary.totalFiles} files from ${data.summary.generatedAt}\n`);
    }

    /**
     * Extract tags with their source field information
     */
    extractTagsWithSource(metadata) {
        const tagsWithSource = [];
        
        // Extract tags from 'tags' field
        if (metadata.tags) {
            let tags = [];
            
            if (Array.isArray(metadata.tags)) {
                tags = metadata.tags;
            } else if (typeof metadata.tags === 'string') {
                tags = metadata.tags.split(',').map(tag => tag.trim());
            }
            
            tags.forEach(tag => {
                if (tag && tag.length > 0) {
                    tagsWithSource.push({
                        tag: tag.toLowerCase().trim(),
                        source: 'tags'
                    });
                }
            });
        }
        
        // Extract tags from 'recommend' field
        if (metadata.recommend) {
            let recommendTags = [];
            
            if (Array.isArray(metadata.recommend)) {
                recommendTags = metadata.recommend;
            } else if (typeof metadata.recommend === 'string') {
                recommendTags = metadata.recommend.split(',').map(tag => tag.trim());
            }
            
            recommendTags.forEach(tag => {
                if (tag && tag.length > 0) {
                    tagsWithSource.push({
                        tag: tag.toLowerCase().trim(),
                        source: 'recommend'
                    });
                }
            });
        }
        
        return tagsWithSource;
    }

    /**
     * Validate tags in a single markdown file
     */
    validateFile(filePath) {
        const { success, metadata } = readMarkdownFile(filePath);
        
        if (!success) {
            return; // Error already logged by readMarkdownFile
        }

        const tagsWithSource = this.extractTagsWithSource(metadata);
        const allTags = extractTags(metadata); // For backward compatibility
        
        if (tagsWithSource.length > 0) {
            // Check each tag against valid tags
            const invalidTagsInFile = [];
            tagsWithSource.forEach(({ tag, source }) => {
                if (!this.validTags.has(tag)) {
                    invalidTagsInFile.push({ tag, source });
                }
            });

            // Record invalid tags if any found
            if (invalidTagsInFile.length > 0) {
                this.invalidTags.push({
                    file: filePath,
                    invalidTags: invalidTagsInFile,
                    allTags: allTags,
                    tagsWithSource: tagsWithSource
                });
                this.filesWithErrors++;
            }
        }
        
        this.processedFiles++;
    }

    /**
     * Generate and display the validation report
     */
    generateReport() {
        console.log('\n=== TAG VALIDATION REPORT ===\n');
        console.log(`Total files processed: ${this.processedFiles}`);
        console.log(`Files with invalid tags: ${this.filesWithErrors}`);
        
        if (this.invalidTags.length === 0) {
            console.log('\n🎉 SUCCESS: All tags are valid!');
            console.log('✅ No invalid tags found in any markdown files.');
            return true;
        }

        console.log(`\n❌ VALIDATION FAILED: ${this.invalidTags.length} files contain invalid tags\n`);

        // Group invalid tags by tag name for summary
        const invalidTagCounts = new Map();
        this.invalidTags.forEach(({ invalidTags }) => {
            invalidTags.forEach(({ tag }) => {
                invalidTagCounts.set(tag, (invalidTagCounts.get(tag) || 0) + 1);
            });
        });

        // Show summary of invalid tags
        console.log('--- INVALID TAGS SUMMARY ---');
        const sortedInvalidTags = Array.from(invalidTagCounts.entries())
            .sort((a, b) => b[1] - a[1]);
        
        sortedInvalidTags.forEach(([tag, count]) => {
            console.log(`❌ "${tag}" - found in ${count} file${count > 1 ? 's' : ''}`);
        });

        // Show detailed file-by-file report
        console.log('\n--- DETAILED VALIDATION ERRORS ---');
        this.invalidTags.forEach(({ file, invalidTags, allTags }) => {
            console.log(`\n📄 ${file}`);
            
            // Group invalid tags by source field
            const tagsBySource = {};
            invalidTags.forEach(({ tag, source }) => {
                if (!tagsBySource[source]) tagsBySource[source] = [];
                tagsBySource[source].push(`"${tag}"`);
            });
            
            // Display invalid tags by source field
            Object.entries(tagsBySource).forEach(([source, tags]) => {
                console.log(`   Invalid in ${source} field: ${tags.join(', ')}`);
            });
            
            console.log(`   All tags found: ${allTags.map(tag => `"${tag}"`).join(', ')}`);
        });

        // Suggestions
        console.log('\n--- SUGGESTIONS ---');
        console.log('To fix these issues, you can:');
        console.log('1. Remove the invalid tags from the affected files (or fix typos in tag names)');
        console.log('2. Add the missing tags tovalid-tags.json if they are legitimate tags you want to use.');
        console.log('\nTo see all valid tags, run: jq -r ".tags | keys[]" valid-tags.json');
        console.log('\nTo re-generate the list of valid tags, run: node scripts/extract-tags.js --export-json');

        return false;
    }

    /**
     * Main execution method
     */
    run() {
        console.log('Markdown Tags Validator');
        console.log('========================');
        
        // Load valid tags first
        this.loadValidTags();

        const { allFiles, totalFiles } = scanDirectories();
        this.totalFiles = totalFiles;

        if (totalFiles === 0) {
            console.log('No markdown files found to process.');
            return true;
        }

        console.log('\nValidating tags...');

        // Process each file
        allFiles.forEach(file => {
            this.validateFile(file);
        });

        // Generate report and return success status
        return this.generateReport();
    }
}

// Main execution
function main() {
    const args = process.argv.slice(2);
    
    if (args.includes('--help') || args.includes('-h')) {
        console.log(`
Markdown Tags Validator
=======================

Usage: node validate-tags.js [path-to-valid-tags.json]

Options:
  --help, -h              Show this help message

Arguments:
  path-to-valid-tags.json    Path to the valid tags JSON file (default: valid-tags.json)

Description:
  Validates all tags in markdown files against approved tags in valid-tags.json.
  Reports any tags that are not in the approved list as errors.

Examples:
  node validate-tags.js
  node validate-tags.js valid-tags.json
  node validate-tags.js /path/to/custom-tags.json

Exit Codes:
  0 - All tags are valid
  1 - Invalid tags found or file errors
        `);
        return;
    }

    // Use custom tags file path if provided
    const tagsFilePath = args[0] || 'valid-tags.json';
    
    const validator = new TagValidator(tagsFilePath);
    const success = validator.run();
    
    // Exit with appropriate code
    process.exit(success ? 0 : 1);
}

// Run if this file is executed directly
if (require.main === module) {
    main();
}

module.exports = TagValidator;