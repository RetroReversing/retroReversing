#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { scanDirectories, readMarkdownFile, parseFrontmatter, findMarkdownFiles } = require('./markdown-utils');

/**
 * Script to validate {% include link-to-other-post.html post="..." %} references
 * Usage: node validate-includes.js
 */

class IncludeValidator {
    constructor() {
        this.validPermalinks = new Set();
        this.processedFiles = 0;
        this.totalFiles = 0;
        this.invalidReferences = [];
        this.filesWithErrors = 0;
        this.permalinkToFile = new Map(); // Map permalinks to their source files
    }

    /**
     * Collect all valid permalinks from markdown files
     */
    collectPermalinks() {
        console.log('Collecting valid permalinks...');
        
        const { allFiles, totalFiles } = scanDirectories(['categories', 'pages']);
        
        allFiles.forEach(filePath => {
            const { success, metadata, content } = readMarkdownFile(filePath);
            
            if (success && metadata.permalink) {
                let permalink = metadata.permalink;
                
                // Normalize permalink (remove trailing slashes for comparison)
                const normalizedPermalink = permalink.replace(/\/$/, '');
                
                this.validPermalinks.add(permalink);
                this.validPermalinks.add(normalizedPermalink);
                
                // Also add with leading slash if missing
                if (!permalink.startsWith('/')) {
                    this.validPermalinks.add('/' + permalink);
                    this.validPermalinks.add('/' + normalizedPermalink);
                }
                
                // Store mapping for better error messages
                this.permalinkToFile.set(permalink, filePath);
                this.permalinkToFile.set(normalizedPermalink, filePath);
            }
        });
        
        console.log(`✅ Found ${this.validPermalinks.size / 2} unique permalinks\n`);
    }

    /**
     * Extract include references from markdown content
     * Matches: {% include link-to-other-post.html post="/some-path" %}
     */
    extractIncludeReferences(content) {
        const references = [];
        
        // Regex to match {% include link-to-other-post.html post="..." %}
        // Also handles variations with single quotes or no quotes
        const includeRegex = /\{%\s*include\s+link-to-other-post\.html\s+post=["']([^"']+)["']/g;
        
        let match;
        while ((match = includeRegex.exec(content)) !== null) {
            const postPath = match[1];
            const lineNumber = content.substring(0, match.index).split('\n').length;
            
            references.push({
                postPath,
                lineNumber,
                fullMatch: match[0]
            });
        }
        
        return references;
    }

    /**
     * Validate includes in a single markdown file
     */
    validateFile(filePath) {
        const { success, content } = readMarkdownFile(filePath);
        
        if (!success) {
            return; // Error already logged by readMarkdownFile
        }

        const references = this.extractIncludeReferences(content);
        
        if (references.length > 0) {
            const invalidRefsInFile = [];
            
            references.forEach(({ postPath, lineNumber, fullMatch }) => {
                // Normalize the post path for comparison
                const normalizedPath = postPath.replace(/\/$/, '');
                
                // Check if this permalink exists
                if (!this.validPermalinks.has(postPath) && !this.validPermalinks.has(normalizedPath)) {
                    invalidRefsInFile.push({
                        postPath,
                        lineNumber,
                        fullMatch
                    });
                }
            });
            
            // Record invalid references if any found
            if (invalidRefsInFile.length > 0) {
                this.invalidReferences.push({
                    file: filePath,
                    invalidRefs: invalidRefsInFile,
                    totalRefs: references.length
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
        console.log('\n=== INCLUDE VALIDATION REPORT ===\n');
        console.log(`Total files processed: ${this.processedFiles}`);
        console.log(`Files with invalid references: ${this.filesWithErrors}`);
        
        if (this.invalidReferences.length === 0) {
            console.log('\n🎉 SUCCESS: All include references are valid!');
            console.log('✅ No invalid post references found in any markdown files.');
            return true;
        }

        console.log(`\n❌ VALIDATION FAILED: ${this.invalidReferences.length} files contain invalid references\n`);

        // Count total invalid references
        const totalInvalidRefs = this.invalidReferences.reduce((sum, { invalidRefs }) => sum + invalidRefs.length, 0);
        console.log(`Total invalid references: ${totalInvalidRefs}\n`);

        // Show detailed file-by-file report
        console.log('--- DETAILED VALIDATION ERRORS ---');
        this.invalidReferences.forEach(({ file, invalidRefs, totalRefs }) => {
            console.log(`\n📄 ${file}`);
            console.log(`   Total references: ${totalRefs}, Invalid: ${invalidRefs.length}`);
            
            invalidRefs.forEach(({ postPath, lineNumber, fullMatch }) => {
                console.log(`   ❌ Line ${lineNumber}: "${postPath}"`);
                console.log(`      ${fullMatch}`);
                
                // Suggest similar permalinks if available
                const suggestions = this.findSimilarPermalinks(postPath);
                if (suggestions.length > 0) {
                    console.log(`      💡 Did you mean: ${suggestions.slice(0, 3).join(', ')}?`);
                }
            });
        });

        // Suggestions
        console.log('\n--- SUGGESTIONS ---');
        console.log('To fix these issues:');
        console.log('1. Check if the referenced post exists and has a permalink in its frontmatter');
        console.log('2. Verify the post= path matches the exact permalink (case-sensitive)');
        console.log('3. Remove or update references to non-existent posts');
        console.log('4. Empty post paths (post="//") should be filled in or removed');

        return false;
    }

    /**
     * Find similar permalinks for suggestions
     */
    findSimilarPermalinks(targetPath) {
        const suggestions = [];
        const normalizedTarget = targetPath.toLowerCase().replace(/\/$/, '');
        
        // Find permalinks that contain similar parts
        for (const permalink of this.validPermalinks) {
            const normalizedPermalink = permalink.toLowerCase().replace(/\/$/, '');
            
            // Skip if empty
            if (normalizedPermalink === '' || normalizedTarget === '') continue;
            
            // Check if they share significant parts
            if (normalizedPermalink.includes(normalizedTarget) || 
                normalizedTarget.includes(normalizedPermalink) ||
                this.calculateSimilarity(normalizedTarget, normalizedPermalink) > 0.6) {
                suggestions.push(permalink);
            }
        }
        
        return [...new Set(suggestions)]; // Remove duplicates
    }

    /**
     * Calculate similarity between two strings (0-1)
     */
    calculateSimilarity(str1, str2) {
        const longer = str1.length > str2.length ? str1 : str2;
        const shorter = str1.length > str2.length ? str2 : str1;
        
        if (longer.length === 0) return 1.0;
        
        const editDistance = this.levenshteinDistance(longer, shorter);
        return (longer.length - editDistance) / longer.length;
    }

    /**
     * Calculate Levenshtein distance between two strings
     */
    levenshteinDistance(str1, str2) {
        const matrix = [];
        
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1, // substitution
                        matrix[i][j - 1] + 1,     // insertion
                        matrix[i - 1][j] + 1      // deletion
                    );
                }
            }
        }
        
        return matrix[str2.length][str1.length];
    }

    /**
     * Main execution method
     */
    run() {
        console.log('Include Reference Validator');
        console.log('============================\n');
        
        // Step 1: Collect all valid permalinks
        this.collectPermalinks();

        // Step 2: Scan all markdown files for validation
        console.log('Scanning markdown files for include references...');
        const { allFiles, totalFiles } = scanDirectories(['categories', 'pages']);
        this.totalFiles = totalFiles;

        if (totalFiles === 0) {
            console.log('No markdown files found to process.');
            return true;
        }

        console.log(`Processing ${totalFiles} files...\n`);

        // Step 3: Validate each file
        allFiles.forEach(file => {
            this.validateFile(file);
        });

        // Step 4: Generate report and return success status
        return this.generateReport();
    }
}

// Main execution
function main() {
    const args = process.argv.slice(2);
    
    if (args.includes('--help') || args.includes('-h')) {
        console.log(`
Include Reference Validator
============================

Usage: node validate-includes.js

Description:
  Validates all {% include link-to-other-post.html post="..." %} references
  in markdown files to ensure the post= parameter matches an actual post's permalink.

Examples:
  node validate-includes.js

Exit Codes:
  0 - All references are valid
  1 - Invalid references found or file errors
        `);
        return;
    }
    
    const validator = new IncludeValidator();
    const success = validator.run();
    
    // Exit with appropriate code
    process.exit(success ? 0 : 1);
}

// Run if this file is executed directly
if (require.main === module) {
    main();
}

module.exports = IncludeValidator;
