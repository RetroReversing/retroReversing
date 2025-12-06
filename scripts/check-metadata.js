#!/usr/bin/env node

const { scanDirectories, readMarkdownFile } = require('./markdown-utils');

/**
 * Script to check for missing metadata fields in markdown files
 * Usage: node check-metadata.js [field1] [field2] ...
 * Example: node check-metadata.js editlink updatedAt
 */

const DEFAULT_FIELDS = ['editlink', 'tags', 'permalink', 'layout', 'title'];

class MarkdownMetadataChecker {
    constructor(fieldsToCheck = DEFAULT_FIELDS) {
        this.fieldsToCheck = fieldsToCheck;
        this.results = {};
        this.processedFiles = 0;
        this.totalFiles = 0;
        
        // Initialize results structure
        this.fieldsToCheck.forEach(field => {
            this.results[field] = [];
        });
    }

    /**
     * Check a single markdown file for missing metadata fields
     */
    checkFile(filePath) {
        const { success, metadata } = readMarkdownFile(filePath);
        
        if (!success) {
            return; // Error already logged by readMarkdownFile
        }

        this.fieldsToCheck.forEach(field => {
            if (!metadata.hasOwnProperty(field) || metadata[field] === '' || metadata[field] === null || metadata[field] === undefined) {
                this.results[field].push({
                    file: filePath,
                    hasMetadata: Object.keys(metadata).length > 0
                });
            }
        });
        
        this.processedFiles++;
    }

    /**
     * Generate and display the report
     */
    generateReport() {
        console.log('\n=== MARKDOWN METADATA ANALYSIS REPORT ===\n');
        console.log(`Total files processed: ${this.processedFiles}`);
        console.log(`Fields checked: ${this.fieldsToCheck.join(', ')}\n`);

        this.fieldsToCheck.forEach(field => {
            const missingFiles = this.results[field];
            console.log(`\n--- Missing "${field}" field ---`);
            console.log(`Files missing this field: ${missingFiles.length}`);
            
            if (missingFiles.length > 0) {
                console.log('\nFiles:');
                missingFiles.forEach(({ file, hasMetadata }) => {
                    const indicator = hasMetadata ? '⚠️ ' : '❌ ';
                    console.log(`  ${indicator}${file}`);
                });
                console.log(`\n❌ = No frontmatter at all`);
                console.log(`⚠️  = Has frontmatter but missing "${field}" field`);
            } else {
                console.log('✅ All files have this field!');
            }
        });

        // Summary
        console.log('\n=== SUMMARY ===');
        this.fieldsToCheck.forEach(field => {
            const missingCount = this.results[field].length;
            const percentage = this.processedFiles > 0 ? ((this.processedFiles - missingCount) / this.processedFiles * 100).toFixed(1) : 0;
            console.log(`${field}: ${percentage}% coverage (${this.processedFiles - missingCount}/${this.processedFiles})`);
        });
    }

    /**
     * Main execution method
     */
    run() {
        const { allFiles, totalFiles } = scanDirectories();
        this.totalFiles = totalFiles;

        if (totalFiles === 0) {
            console.log('No markdown files found to process.');
            return;
        }

        console.log('\nProcessing files...');

        // Process each file
        allFiles.forEach(file => {
            this.checkFile(file);
        });

        // Generate report
        this.generateReport();
    }
}

// Main execution
function main() {
    const args = process.argv.slice(2);
    const fieldsToCheck = args.length > 0 ? args : DEFAULT_FIELDS;
    
    console.log('Markdown Metadata Checker');
    console.log('========================');
    console.log(`Checking for fields: ${fieldsToCheck.join(', ')}\n`);

    const checker = new MarkdownMetadataChecker(fieldsToCheck);
    checker.run();
}

// Run if this file is executed directly
if (require.main === module) {
    main();
}

module.exports = MarkdownMetadataChecker;