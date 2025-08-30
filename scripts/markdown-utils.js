const fs = require('fs');
const path = require('path');

/**
 * Recursively find all markdown files in a directory
 * @param {string} dir - Directory to search
 * @returns {string[]} Array of markdown file paths
 */
function findMarkdownFiles(dir) {
    const markdownFiles = [];
    
    if (!fs.existsSync(dir)) {
        console.warn(`Directory ${dir} does not exist`);
        return markdownFiles;
    }

    const items = fs.readdirSync(dir);
    
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            // Recursively search subdirectories
            markdownFiles.push(...findMarkdownFiles(fullPath));
        } else if (stat.isFile() && path.extname(item).toLowerCase() === '.md') {
            markdownFiles.push(fullPath);
        }
    }
    
    return markdownFiles;
}

/**
 * Parse YAML frontmatter from markdown content
 * @param {string} content - Markdown file content
 * @returns {Object} Parsed metadata object
 */
function parseFrontmatter(content) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
    const match = content.match(frontmatterRegex);
    
    if (!match) {
        return {};
    }
    
    const yamlContent = match[1];
    const metadata = {};
    
    // Simple YAML parser for basic key-value pairs
    const lines = yamlContent.split('\n');
    let currentKey = null;
    let currentValue = [];
    
    for (let line of lines) {
        line = line.trim();
        
        if (line === '' || line.startsWith('#')) {
            continue;
        }
        
        // Handle array items
        if (line.startsWith('- ')) {
            if (currentKey) {
                currentValue.push(line.substring(2).trim());
            }
            continue;
        }
        
        // Handle key-value pairs
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
            // Save previous key-value if exists
            if (currentKey) {
                metadata[currentKey] = currentValue.length > 1 ? currentValue : (currentValue[0] || '');
            }
            
            const key = line.substring(0, colonIndex).trim();
            const value = line.substring(colonIndex + 1).trim();
            
            // Remove quotes if present
            const cleanValue = value.replace(/^['"]|['"]$/g, '');
            
            currentKey = key;
            currentValue = cleanValue ? [cleanValue] : [];
        }
    }
    
    // Don't forget the last key-value pair
    if (currentKey) {
        metadata[currentKey] = currentValue.length > 1 ? currentValue : (currentValue[0] || '');
    }
    
    return metadata;
}

/**
 * Safely read and parse a markdown file
 * @param {string} filePath - Path to the markdown file
 * @returns {Object} Object containing metadata and success status
 */
function readMarkdownFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const metadata = parseFrontmatter(content);
        return { success: true, metadata, content };
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
        return { success: false, error: error.message };
    }
}

/**
 * Extract and normalize tags from metadata
 * @param {Object} metadata - Parsed frontmatter metadata
 * @returns {string[]} Array of normalized tags
 */
function extractTags(metadata) {
    if (!metadata.tags) {
        return [];
    }

    let tags = [];
    
    // Handle both array and single string tags
    if (Array.isArray(metadata.tags)) {
        tags = metadata.tags;
    } else if (typeof metadata.tags === 'string') {
        // Handle comma-separated tags in a single string
        tags = metadata.tags.split(',').map(tag => tag.trim());
    }
    
    // Clean and filter tags
    return tags.filter(tag => tag && tag.length > 0)
              .map(tag => tag.toLowerCase().trim());
}

/**
 * Scan directories and collect all markdown files
 * @param {string[]} directories - Array of directory names to scan
 * @returns {Object} Object containing file counts and file array
 */
function scanDirectories(directories = ['categories', 'pages']) {
    const allFiles = [];
    const fileCounts = {};

    directories.forEach(dir => {
        const files = findMarkdownFiles(dir);
        allFiles.push(...files);
        fileCounts[dir] = files.length;
        console.log(`Found ${files.length} markdown files in ${dir}/`);
    });

    const totalFiles = allFiles.length;
    console.log(`\nTotal markdown files found: ${totalFiles}`);

    return { allFiles, fileCounts, totalFiles };
}

/**
 * Load and parse JSON file safely
 * @param {string} filePath - Path to JSON file
 * @returns {Object} Object containing parsed data and success status
 */
function loadJsonFile(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            return { 
                success: false, 
                error: `File '${filePath}' not found.` 
            };
        }

        const fileContent = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContent);
        return { success: true, data };
    } catch (error) {
        return { 
            success: false, 
            error: `Error reading '${filePath}': ${error.message}` 
        };
    }
}

module.exports = {
    findMarkdownFiles,
    parseFrontmatter,
    readMarkdownFile,
    extractTags,
    scanDirectories,
    loadJsonFile
};