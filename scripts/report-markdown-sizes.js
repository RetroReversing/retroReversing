#!/usr/bin/env node

const fs = require('fs');
const { scanDirectories } = require('./markdown-utils');

class MarkdownSizeReporter {
    constructor() {
        this.fileSizes = [];
        this.totalFiles = 0;
    }

    collectFileSizes() {
        const { allFiles, totalFiles } = scanDirectories(['categories', 'pages']);
        this.totalFiles = totalFiles;

        allFiles.forEach(file => {
            try {
                const { size } = fs.statSync(file);
                this.fileSizes.push({ file, size });
            } catch (error) {
                console.error(`Error reading ${file}: ${error.message}`);
            }
        });
    }

    formatSize(bytes) {
        if (bytes < 1024) return `${bytes} B`;
        const kilobytes = bytes / 1024;
        if (kilobytes < 1024) return `${kilobytes.toFixed(1)} KB`;
        const megabytes = kilobytes / 1024;
        return `${megabytes.toFixed(2)} MB`;
    }

    printList(title, files) {
        console.log(`\n--- ${title} ---`);
        files.forEach(({ file, size }, index) => {
            console.log(`${String(index + 1).padStart(2)}. ${file} (${this.formatSize(size)})`);
        });
    }

    run() {
        console.log('Markdown File Size Report');
        console.log('==========================');

        this.collectFileSizes();

        if (this.fileSizes.length === 0) {
            console.log('No markdown files found to process.');
            return;
        }

        const sorted = [...this.fileSizes].sort((a, b) => a.size - b.size);
        const smallest = sorted.slice(0, 10);
        const largest = sorted.slice(-10).reverse();

        console.log(`\nTotal markdown files scanned: ${this.totalFiles}`);
        console.log(`Files with readable sizes: ${this.fileSizes.length}`);

        this.printList('Top 10 Smallest Files', smallest);
        this.printList('Top 10 Largest Files', largest);
    }
}

if (require.main === module) {
    const reporter = new MarkdownSizeReporter();
    reporter.run();
}

module.exports = MarkdownSizeReporter;
