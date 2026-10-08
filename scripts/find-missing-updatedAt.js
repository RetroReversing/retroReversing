#!/usr/bin/env node

const { scanDirectories, readMarkdownFile } = require('./markdown-utils');

/**
 * Finds all markdown posts missing an `updatedAt` frontmatter field.
 * Usage: node scripts/find-missing-updatedAt.js
 */
class MissingUpdatedAtFinder {
    constructor() {
        this.missingFiles = [];
        this.processedFiles = 0;
    }

    checkFile(filePath) {
        const { success, metadata } = readMarkdownFile(filePath);

        if (!success) {
            return;
        }

        if (!Object.prototype.hasOwnProperty.call(metadata, 'updatedAt') || metadata.updatedAt === '' || metadata.updatedAt === null || metadata.updatedAt === undefined) {
            this.missingFiles.push({
                file: filePath,
                hasMetadata: Object.keys(metadata).length > 0
            });
        }

        this.processedFiles++;
    }

    printReport() {
        console.log('\n=== POSTS MISSING updatedAt ===\n');
        console.log(`Files processed: ${this.processedFiles}`);
        console.log(`Files missing updatedAt: ${this.missingFiles.length}`);

        if (this.missingFiles.length === 0) {
            console.log('\n✅ Every scanned markdown file has an updatedAt field.');
            return;
        }

        console.log('\nFiles:');
        this.missingFiles.forEach(({ file, hasMetadata }) => {
            const indicator = hasMetadata ? '⚠️ ' : '❌ ';
            console.log(`  ${indicator}${file}`);
        });

        console.log('\n❌ = No frontmatter at all');
        console.log('⚠️  = Has frontmatter but missing updatedAt');
    }

    run() {
        const { allFiles, totalFiles } = scanDirectories(['pages']);

        if (totalFiles === 0) {
            console.log('No markdown files found to process.');
            return;
        }

        console.log('\nProcessing files...');
        allFiles.forEach(file => this.checkFile(file));
        this.printReport();
    }
}

if (require.main === module) {
    const finder = new MissingUpdatedAtFinder();
    finder.run();
}

module.exports = MissingUpdatedAtFinder;
