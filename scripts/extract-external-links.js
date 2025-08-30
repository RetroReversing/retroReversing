#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const { findMarkdownFiles, readMarkdownFile } = require('./markdown-utils');

/**
 * Extract YouTube links from markdown content
 * Handles both direct links and iframe embeds
 */
function extractYouTubeLinks(content, filePath) {
    const youtubeLinks = [];
    
    // Pattern for YouTube direct links
    const directLinkRegex = /https?:\/\/(www\.)?(youtube\.com|youtu\.be)\/[^\s)>\]"]+/g;
    
    // Pattern for YouTube iframe embeds
    const iframeRegex = /<iframe[^>]*src="(https?:\/\/(www\.)?youtube\.com\/[^"]+)"[^>]*>/g;
    
    // Extract direct links
    let match;
    while ((match = directLinkRegex.exec(content)) !== null) {
        youtubeLinks.push({
            type: 'direct_link',
            url: match[0],
            file: filePath,
            context: getContext(content, match.index)
        });
    }
    
    // Extract iframe embeds
    while ((match = iframeRegex.exec(content)) !== null) {
        youtubeLinks.push({
            type: 'iframe_embed',
            url: match[1],
            file: filePath,
            context: getContext(content, match.index)
        });
    }
    
    return youtubeLinks;
}

/**
 * Extract Twitter/X links from markdown content
 * Handles both direct links and embedded tweets
 */
function extractTwitterLinks(content, filePath) {
    const twitterLinks = [];
    
    // Pattern for Twitter/X direct links - fixed to not capture trailing quotes
    const directLinkRegex = /https?:\/\/(www\.)?(twitter\.com|x\.com)\/[^\s)>\]"]+/g;
    
    // Pattern for Twitter blockquote embeds
    const blockquoteRegex = /<blockquote[^>]*class="twitter-tweet"[^>]*>[\s\S]*?<\/blockquote>/g;
    
    // Extract direct links
    let match;
    while ((match = directLinkRegex.exec(content)) !== null) {
        twitterLinks.push({
            type: 'direct_link',
            url: match[0],
            file: filePath,
            context: getContext(content, match.index)
        });
    }
    
    // Extract embedded tweets (look for Twitter links within blockquotes)
    while ((match = blockquoteRegex.exec(content)) !== null) {
        const blockquoteContent = match[0];
        const twitterUrlRegex = /https?:\/\/(www\.)?twitter\.com\/[^\s"]+/g;
        let twitterMatch;
        
        while ((twitterMatch = twitterUrlRegex.exec(blockquoteContent)) !== null) {
            twitterLinks.push({
                type: 'embedded_tweet',
                url: twitterMatch[0],
                file: filePath,
                context: getContext(content, match.index)
            });
        }
    }
    
    return twitterLinks;
}

/**
 * Extract external image links from markdown content
 * Handles markdown image syntax with external URLs
 */
function extractExternalImageLinks(content, filePath) {
    const imageLinks = [];
    
    // Pattern for markdown images with external URLs
    const imageRegex = /!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/g;
    
    let match;
    while ((match = imageRegex.exec(content)) !== null) {
        const altText = match[1];
        const imageUrl = match[2];
        
        // Filter out local/relative images and same-project GitHub assets
        if (isExternalUrl(imageUrl) && !isSameProjectAsset(imageUrl)) {
            imageLinks.push({
                type: 'markdown_image',
                url: imageUrl,
                alt_text: altText,
                file: filePath,
                context: getContext(content, match.index)
            });
        }
    }
    
    return imageLinks;
}

/**
 * Check if a URL is external (not relative or local)
 */
function isExternalUrl(url) {
    return url.startsWith('http://') || url.startsWith('https://');
}

/**
 * Check if a URL is a same-project asset (should be excluded)
 */
function isSameProjectAsset(url) {
    // Filter out GitHub assets from the same project
    return url.includes('github.com/RetroReversing/retroReversing/assets') ||
           url.includes('retroreversing.com/public/');
}

/**
 * Get context around a match (50 characters before and after)
 */
function getContext(content, index, contextLength = 50) {
    const start = Math.max(0, index - contextLength);
    const end = Math.min(content.length, index + contextLength);
    return content.substring(start, end).replace(/\n/g, ' ').trim();
}

/**
 * Process a single markdown file and extract all external links
 */
function processMarkdownFile(filePath) {
    const result = readMarkdownFile(filePath);
    
    if (!result.success) {
        console.warn(`Warning: Could not read ${filePath}: ${result.error}`);
        return {
            file: filePath,
            error: result.error,
            youtube_links: [],
            twitter_links: [],
            image_links: []
        };
    }
    
    const content = result.content;
    
    return {
        file: filePath,
        youtube_links: extractYouTubeLinks(content, filePath),
        twitter_links: extractTwitterLinks(content, filePath),
        image_links: extractExternalImageLinks(content, filePath)
    };
}

/**
 * Generate summary statistics
 */
function generateSummary(results) {
    const summary = {
        total_files_processed: results.length,
        files_with_errors: results.filter(r => r.error).length,
        total_youtube_links: 0,
        total_twitter_links: 0,
        total_image_links: 0,
        youtube_by_type: { direct_link: 0, iframe_embed: 0 },
        twitter_by_type: { direct_link: 0, embedded_tweet: 0 },
        unique_domains: new Set()
    };
    
    results.forEach(result => {
        if (!result.error) {
            summary.total_youtube_links += result.youtube_links.length;
            summary.total_twitter_links += result.twitter_links.length;
            summary.total_image_links += result.image_links.length;
            
            // Count by type
            result.youtube_links.forEach(link => {
                summary.youtube_by_type[link.type]++;
                try {
                    const domain = new URL(link.url).hostname;
                    summary.unique_domains.add(domain);
                } catch (e) {}
            });
            
            result.twitter_links.forEach(link => {
                summary.twitter_by_type[link.type]++;
                try {
                    const domain = new URL(link.url).hostname;
                    summary.unique_domains.add(domain);
                } catch (e) {}
            });
            
            result.image_links.forEach(link => {
                try {
                    const domain = new URL(link.url).hostname;
                    summary.unique_domains.add(domain);
                } catch (e) {}
            });
        }
    });
    
    summary.unique_domains = Array.from(summary.unique_domains).sort();
    return summary;
}

/**
 * Extract YouTube video ID from URL
 */
function extractYouTubeId(url) {
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/v\/([^&\n?#]+)/
    ];
    
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
    }
    
    // Fallback: use the full URL as identifier
    return url.replace(/[^a-zA-Z0-9]/g, '_');
}

/**
 * Extract Twitter ID from URL
 */
function extractTwitterId(url) {
    // Match patterns like twitter.com/user/status/123456 or x.com/user/status/123456
    const statusMatch = url.match(/(?:twitter\.com|x\.com)\/[^\/]+\/status\/(\d+)/);
    if (statusMatch) return statusMatch[1];
    
    // Match patterns like twitter.com/username
    const userMatch = url.match(/(?:twitter\.com|x\.com)\/([^\/\?]+)/);
    if (userMatch) return userMatch[1];
    
    // Fallback: use the full URL as identifier
    return url.replace(/[^a-zA-Z0-9]/g, '_');
}

/**
 * Create a hash-like identifier for image URLs
 */
function createImageId(url) {
    // Use the filename or create a simple hash
    const filename = url.split('/').pop().split('?')[0];
    if (filename && filename !== url) {
        return filename.replace(/[^a-zA-Z0-9.-]/g, '_');
    }
    
    // Fallback: create a simple hash from URL
    let hash = 0;
    for (let i = 0; i < url.length; i++) {
        const char = url.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(36);
}

/**
 * Fetch YouTube video metadata from the page HTML
 */
async function fetchYouTubeMetadata(videoId) {
    return new Promise((resolve) => {
        const url = `https://www.youtube.com/watch?v=${videoId}`;
        
        https.get(url, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                try {
                    // Extract title from HTML
                    const titleMatch = data.match(/<title>([^<]+)<\/title>/);
                    let title = titleMatch ? titleMatch[1].replace(' - YouTube', '').trim() : null;
                    
                    // Extract channel name from HTML
                    const channelMatch = data.match(/"ownerChannelName":"([^"]+)"/);
                    let author = channelMatch ? channelMatch[1] : null;
                    
                    // Alternative channel extraction
                    if (!author) {
                        const channelMatch2 = data.match(/"author":"([^"]+)"/);
                        author = channelMatch2 ? channelMatch2[1] : null;
                    }
                    
                    resolve({
                        title: title,
                        author: author,
                        fetched_at: new Date().toISOString()
                    });
                } catch (error) {
                    console.warn(`⚠️  Could not parse metadata for video ${videoId}: ${error.message}`);
                    resolve(null);
                }
            });
        }).on('error', (error) => {
            console.warn(`⚠️  Could not fetch metadata for video ${videoId}: ${error.message}`);
            resolve(null);
        });
    });
}

/**
 * Enrich YouTube data with metadata for videos missing title/author
 */
async function enrichYouTubeMetadata(youtubeData, maxFetch = 500) {
    const videosToEnrich = [];
    
    // Find videos that need metadata
    Object.keys(youtubeData).forEach(videoId => {
        const video = youtubeData[videoId];
        // Only fetch if title AND author are both missing (undefined or null)
        if (!video.title && !video.author) {
            videosToEnrich.push(videoId);
        }
    });
    
    if (videosToEnrich.length === 0) {
        return youtubeData;
    }
    
    // Limit the number of videos to fetch in one run to avoid long delays
    const toFetch = videosToEnrich.slice(0, maxFetch);
    const remaining = videosToEnrich.length - toFetch.length;
    
    console.log(`🎬 Fetching metadata for ${toFetch.length} YouTube videos...`);
    if (remaining > 0) {
        console.log(`   (${remaining} more videos can be enriched on future runs)`);
    }
    
    // Fetch metadata with rate limiting
    for (let i = 0; i < toFetch.length; i++) {
        const videoId = toFetch[i];
        
        try {
            const metadata = await fetchYouTubeMetadata(videoId);
            
            if (metadata && metadata.title) {
                // Only add metadata if we successfully got a title
                youtubeData[videoId] = {
                    ...youtubeData[videoId],
                    title: metadata.title.replace(/&amp;/g, '&'), // Decode HTML entities
                    author: metadata.author,
                    fetched_at: metadata.fetched_at
                };
                
                console.log(`  ✅ ${videoId}: ${metadata.title.replace(/&amp;/g, '&')} by ${metadata.author || 'Unknown'}`);
            } else {
                console.log(`  ❌ ${videoId}: Could not fetch metadata`);
            }
            
            // Rate limiting: wait 1 second between requests to be respectful
            if (i < toFetch.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        } catch (error) {
            console.warn(`⚠️  Error fetching metadata for ${videoId}: ${error.message}`);
        }
    }
    
    return youtubeData;
}

/**
 * Load existing JSON data to preserve manually added metadata
 */
function loadExistingData(filePath) {
    try {
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            const parsed = JSON.parse(data);
            console.log(`📂 Loaded existing data from ${filePath}`);
            return parsed;
        }
    } catch (error) {
        console.warn(`⚠️  Could not load existing data from ${filePath}: ${error.message}`);
    }
    
    // Return empty structure if file doesn't exist or can't be parsed
    return {
        generated_at: new Date().toISOString(),
        summary: {},
        youtube: {},
        twitter: {},
        images: {},
        errors: []
    };
}

/**
 * Merge new discoveries with existing data, preserving custom metadata
 */
function mergeWithExistingData(newData, existingData) {
    // Preserve existing metadata while updating with new discoveries
    const merged = {
        generated_at: new Date().toISOString(),
        summary: newData.summary,
        youtube: { ...existingData.youtube },
        twitter: { ...existingData.twitter },
        images: { ...existingData.images },
        errors: newData.errors
    };
    
    // Merge YouTube data
    Object.keys(newData.youtube).forEach(id => {
        if (merged.youtube[id]) {
            // Preserve custom metadata, update files list
            merged.youtube[id] = {
                ...merged.youtube[id], // Keep existing metadata
                url: newData.youtube[id].url, // Update URL in case it changed
                type: newData.youtube[id].type, // Update type
                files: [...new Set([...merged.youtube[id].files, ...newData.youtube[id].files])] // Merge files
            };
        } else {
            // New entry
            merged.youtube[id] = newData.youtube[id];
        }
    });
    
    // Merge Twitter data
    Object.keys(newData.twitter).forEach(id => {
        if (merged.twitter[id]) {
            merged.twitter[id] = {
                ...merged.twitter[id],
                url: newData.twitter[id].url,
                type: newData.twitter[id].type,
                files: [...new Set([...merged.twitter[id].files, ...newData.twitter[id].files])]
            };
        } else {
            merged.twitter[id] = newData.twitter[id];
        }
    });
    
    // Merge Images data
    Object.keys(newData.images).forEach(id => {
        if (merged.images[id]) {
            merged.images[id] = {
                ...merged.images[id],
                url: newData.images[id].url,
                alt_text: newData.images[id].alt_text,
                files: [...new Set([...merged.images[id].files, ...newData.images[id].files])]
            };
        } else {
            merged.images[id] = newData.images[id];
        }
    });
    
    return merged;
}

/**
 * Export results to JSON organized by link type, preserving existing metadata
 */
async function exportToJson(results, summary, outputPath, existingData = null) {
    const newData = {
        generated_at: new Date().toISOString(),
        summary: summary,
        youtube: {},
        twitter: {},
        images: {},
        errors: []
    };
    
    results.forEach(result => {
        if (result.error) {
            newData.errors.push({
                file: result.file,
                error: result.error
            });
            return;
        }
        
        // Process YouTube links
        result.youtube_links.forEach(link => {
            const id = extractYouTubeId(link.url);
            if (!newData.youtube[id]) {
                newData.youtube[id] = {
                    url: link.url,
                    type: link.type,
                    files: []
                };
            }
            if (!newData.youtube[id].files.includes(result.file)) {
                newData.youtube[id].files.push(result.file);
            }
        });
        
        // Process Twitter links
        result.twitter_links.forEach(link => {
            const id = extractTwitterId(link.url);
            if (!newData.twitter[id]) {
                newData.twitter[id] = {
                    url: link.url,
                    type: link.type,
                    files: []
                };
            }
            if (!newData.twitter[id].files.includes(result.file)) {
                newData.twitter[id].files.push(result.file);
            }
        });
        
        // Process image links
        result.image_links.forEach(link => {
            const id = createImageId(link.url);
            if (!newData.images[id]) {
                newData.images[id] = {
                    url: link.url,
                    alt_text: link.alt_text,
                    files: []
                };
            }
            if (!newData.images[id].files.includes(result.file)) {
                newData.images[id].files.push(result.file);
            }
        });
    });
    
    // Merge with existing data if provided
    const finalData = existingData ? mergeWithExistingData(newData, existingData) : newData;
    
    // Enrich YouTube metadata for videos missing title/author
    if (Object.keys(finalData.youtube).length > 0) {
        console.log(`\n🔍 Checking ${Object.keys(finalData.youtube).length} YouTube videos for missing metadata...`);
        finalData.youtube = await enrichYouTubeMetadata(finalData.youtube);
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(finalData, null, 2));
    console.log(`💾 JSON results saved to: ${outputPath}`);
}

/**
 * Export results to CSV
 */
function exportToCsv(results, outputPath) {
    const csvRows = [];
    
    // CSV Header
    csvRows.push('File,Link Type,URL,Alt Text,Context,Error');
    
    results.forEach(result => {
        if (result.error) {
            csvRows.push(`"${result.file}","ERROR","","","","${result.error}"`);
            return;
        }
        
        // YouTube links
        result.youtube_links.forEach(link => {
            csvRows.push([
                `"${result.file}"`,
                `"youtube_${link.type}"`,
                `"${link.url}"`,
                '""', // No alt text for YouTube
                `"${link.context}"`,
                '""'
            ].join(','));
        });
        
        // Twitter links
        result.twitter_links.forEach(link => {
            csvRows.push([
                `"${result.file}"`,
                `"twitter_${link.type}"`,
                `"${link.url}"`,
                '""', // No alt text for Twitter
                `"${link.context}"`,
                '""'
            ].join(','));
        });
        
        // Image links
        result.image_links.forEach(link => {
            csvRows.push([
                `"${result.file}"`,
                `"image_${link.type}"`,
                `"${link.url}"`,
                `"${link.alt_text || ''}"`,
                `"${link.context}"`,
                '""'
            ].join(','));
        });
    });
    
    fs.writeFileSync(outputPath, csvRows.join('\n'));
    console.log(`CSV results exported to: ${outputPath}`);
}

/**
 * Main function
 */
function main() {
    const args = process.argv.slice(2);
    const options = {
        format: 'json', // default format
        output: null,
        directories: ['categories', 'pages']
    };
    
    // Parse command line arguments
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg === '--format' && i + 1 < args.length) {
            options.format = args[i + 1];
            i++;
        } else if (arg === '--output' && i + 1 < args.length) {
            options.output = args[i + 1];
            i++;
        } else if (arg === '--help' || arg === '-h') {
            console.log(`
Extract External Links from Markdown Files

Usage: node extract-external-links.js [options]

Options:
  --format <json|csv|both>  Output format (default: json)
  --output <path>          Output file path (default: external-links.json for JSON)
  --help, -h               Show this help message

Examples:
  node extract-external-links.js
  node extract-external-links.js --format csv --output links.csv
  node extract-external-links.js --format both
  
Note: JSON format uses persistent external-links.json to preserve manual metadata edits
            `);
            return;
        }
    }
    
    console.log('🔍 Scanning for markdown files...');
    
    // Find all markdown files
    const allFiles = [];
    options.directories.forEach(dir => {
        if (fs.existsSync(dir)) {
            const files = findMarkdownFiles(dir);
            allFiles.push(...files);
            console.log(`Found ${files.length} markdown files in ${dir}/`);
        } else {
            console.warn(`Warning: Directory ${dir} not found`);
        }
    });
    
    console.log(`\n📄 Processing ${allFiles.length} markdown files...`);
    
    // Process all files
    const results = allFiles.map((filePath, index) => {
        if (index % 50 === 0) {
            console.log(`Progress: ${index}/${allFiles.length} files processed`);
        }
        return processMarkdownFile(filePath);
    });
    
    console.log(`\n✅ Completed processing ${results.length} files`);
    
    // Generate summary
    const summary = generateSummary(results);
    
    // Display summary
    console.log('\n📊 Summary:');
    console.log(`  Files processed: ${summary.total_files_processed}`);
    console.log(`  Files with errors: ${summary.files_with_errors}`);
    console.log(`  YouTube links found: ${summary.total_youtube_links}`);
    console.log(`    - Direct links: ${summary.youtube_by_type.direct_link}`);
    console.log(`    - Iframe embeds: ${summary.youtube_by_type.iframe_embed}`);
    console.log(`  Twitter links found: ${summary.total_twitter_links}`);
    console.log(`    - Direct links: ${summary.twitter_by_type.direct_link}`);
    console.log(`    - Embedded tweets: ${summary.twitter_by_type.embedded_tweet}`);
    console.log(`  External images found: ${summary.total_image_links}`);
    console.log(`  Unique domains found: ${summary.unique_domains.length}`);
    
    // Export results with persistent file support
    if (options.format === 'json' || options.format === 'both') {
        const jsonPath = options.output || 'external-links.json';
        const existingData = loadExistingData(jsonPath);
        exportToJson(results, summary, jsonPath, existingData);
    }
    
    if (options.format === 'csv' || options.format === 'both') {
        const timestamp = new Date().toISOString().slice(0, 19).replace(/[T:]/g, '-');
        const csvPath = options.output || `external-links-${timestamp}.csv`;
        exportToCsv(results, csvPath);
    }
    
    console.log('\n🎉 Extraction completed successfully!');
}

// Run the script
if (require.main === module) {
    main();
}

module.exports = {
    extractYouTubeLinks,
    extractTwitterLinks,
    extractExternalImageLinks,
    processMarkdownFile,
    generateSummary
};