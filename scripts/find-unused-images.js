#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { findMarkdownFiles, readMarkdownFile } = require('./markdown-utils');

const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const MARKDOWN_DIRS = ['categories', 'pages'].map(dir => path.join(ROOT, dir));
const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.avif', '.bmp']);

function walkImageFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files = [];

    entries.forEach(entry => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...walkImageFiles(fullPath));
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            if (IMAGE_EXTENSIONS.has(ext)) {
                files.push(fullPath);
            }
        }
    });

    return files;
}

function normalizePublicPath(rawPath) {
    if (!rawPath) return null;

    let cleaned = rawPath.trim();
    const publicIndex = cleaned.indexOf('/public/');
    if (publicIndex >= 0) {
        cleaned = cleaned.slice(publicIndex + 1);
    }

    if (cleaned.startsWith('/')) {
        cleaned = cleaned.slice(1);
    }

    if (!cleaned.startsWith('public/')) {
        return null;
    }

    cleaned = cleaned.split(/[?#]/)[0];
    cleaned = cleaned.replace(/\\/g, '/');

    try {
        cleaned = decodeURIComponent(cleaned);
    } catch (error) {
        // Ignore decode errors and keep the raw path
    }

    return cleaned;
}

function extractPublicPaths(content) {
    const paths = [];
    const patterns = [
    /(\/public\/[^\s"'()<>]+)/g,
    /(?:^|[^\w])(public\/[^\s"'()<>]+)/g
    ];

    patterns.forEach(regex => {
        let match;
        while ((match = regex.exec(content)) !== null) {
            const normalized = normalizePublicPath(match[1]);
            if (normalized) {
                paths.push(normalized);
            }
        }
    });

    return paths;
}

function collectUsedPublicImages(markdownFiles) {
    const used = new Set();

    markdownFiles.forEach(file => {
        const { success, content } = readMarkdownFile(file);
        if (!success || !content) return;

        extractPublicPaths(content).forEach(p => used.add(p));
    });

    return used;
}

function toRelativePublicPath(fullPath) {
    return path.relative(ROOT, fullPath).split(path.sep).join('/');
}

function main() {
    if (!fs.existsSync(PUBLIC_DIR)) {
        console.error(`❌ public directory not found at ${PUBLIC_DIR}`);
        process.exit(1);
    }

    const imageFiles = walkImageFiles(PUBLIC_DIR).map(toRelativePublicPath);
    console.log(`📁 Found ${imageFiles.length} image files under public/`);

    const markdownFiles = MARKDOWN_DIRS.flatMap(dir => findMarkdownFiles(dir));
    console.log(`📄 Scanning ${markdownFiles.length} markdown files in categories/ and pages/`);

    const usedImages = collectUsedPublicImages(markdownFiles);
    console.log(`🔗 Detected ${usedImages.size} referenced public paths`);

    const unusedImages = imageFiles.filter(img => !usedImages.has(img)).sort();

    console.log('\n=== Unused public images ===');
    if (unusedImages.length === 0) {
        console.log('🎉 No unused images found.');
        return;
    }

    console.log(`Found ${unusedImages.length} unused image${unusedImages.length === 1 ? '' : 's'}:\n`);
    unusedImages.forEach(img => console.log(`- ${img}`));
}

if (require.main === module) {
    main();
}

module.exports = {
    walkImageFiles,
    normalizePublicPath,
    extractPublicPaths,
    collectUsedPublicImages
};
