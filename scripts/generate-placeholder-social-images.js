#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { readMarkdownFile } = require('./markdown-utils');
let Resvg = null;

try {
    ({ Resvg } = require('@resvg/resvg-js'));
} catch (error) {
    Resvg = null;
}

const ROOT_DIR = path.resolve(__dirname, '..');
const CONTENT_DIRECTORIES = ['pages', 'categories'];
const OUTPUT_DIRECTORY = path.join(ROOT_DIR, 'public', 'generated', 'placeholders');

// New image dimensions
const IMAGE_WIDTH = 1280;
const IMAGE_HEIGHT = 720;
const CONFIG_PATH = path.join(ROOT_DIR, '_config.yml');
const RR_LOGO_IMAGE = path.join(ROOT_DIR, 'public', 'images', 'RetroReversingLogo.png');
const RSVG_CONVERT_PATH = findExecutable('rsvg-convert');
const RUBY_PATH = findExecutable('ruby');
const imageDimensionCache = new Map();

function findContentFiles(directory) {
    const files = [];

    if (!fs.existsSync(directory)) {
        return files;
    }

    for (const item of fs.readdirSync(directory)) {
        const fullPath = path.join(directory, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            files.push(...findContentFiles(fullPath));
            continue;
        }

        const extension = path.extname(item).toLowerCase();
        if (extension === '.md' || extension === '.html') {
            files.push(fullPath);
        }
    }

    return files;
}

function parseCategoryImages(configPath) {
    const content = fs.readFileSync(configPath, 'utf8');
    const lines = content.split('\n');
    const categoryImages = {};
    let inCategoryImages = false;

    for (const line of lines) {
        if (!inCategoryImages) {
            if (line.trim() === 'category_images:') {
                inCategoryImages = true;
            }
            continue;
        }

        if (!line.startsWith('  ')) {
            break;
        }

        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) {
            continue;
        }

        const colonIndex = trimmed.indexOf(':');
        if (colonIndex === -1) {
            continue;
        }

        const key = trimmed.slice(0, colonIndex).trim();
        const value = trimmed.slice(colonIndex + 1).trim().replace(/^['"]|['"]$/g, '');
        if (key && value) {
            categoryImages[key] = value;
        }
    }

    return categoryImages;
}

function findExecutable(name) {
    const pathEntries = (process.env.PATH || '').split(path.delimiter);

    for (const directory of pathEntries) {
        const candidate = path.join(directory, name);
        if (fs.existsSync(candidate)) {
            return candidate;
        }
    }

    return '';
}

function toSlug(value) {
    const normalized = String(value || '')
        .replace(/\.html$/i, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    return normalized || 'home';
}

function toBoolean(value) {
    return value === true || String(value).toLowerCase() === 'true';
}

function escapeXml(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function fileToDataUri(filePath) {
    if (!filePath || !fs.existsSync(filePath)) {
        return '';
    }

    const extension = path.extname(filePath).toLowerCase();
    const mimeTypeMap = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.svg': 'image/svg+xml'
    };

    const mimeType = mimeTypeMap[extension];
    if (!mimeType) {
        return '';
    }

    const buffer = fs.readFileSync(filePath);
    return `data:${mimeType};base64,${buffer.toString('base64')}`;
}

function getImageDimensions(filePath) {
    if (!filePath || !fs.existsSync(filePath)) {
        return null;
    }
    if (imageDimensionCache.has(filePath)) {
        return imageDimensionCache.get(filePath);
    }
    try {
        const output = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', filePath], { stdio: 'pipe' }).toString('utf8');
        const widthMatch = output.match(/pixelWidth:\s+(\d+)/);
        const heightMatch = output.match(/pixelHeight:\s+(\d+)/);
        if (widthMatch && heightMatch) {
            const dimensions = {
                width: Number(widthMatch[1]),
                height: Number(heightMatch[1])
            };
            imageDimensionCache.set(filePath, dimensions);
            return dimensions;
        }
    } catch (error) {}
    try {
        const output = execFileSync('identify', ['-format', '%w %h', filePath], { stdio: 'pipe' }).toString('utf8').trim();
        const [width, height] = output.split(/\s+/).map(Number);
        if (width && height) {
            const dimensions = { width, height };
            imageDimensionCache.set(filePath, dimensions);
            return dimensions;
        }
    } catch (error) {}
    return null;
}

function getCategoryImageLayout(categoryImagePath) {
    const lowerPanel = {
        x: 0,
        y: 234,
        width: IMAGE_WIDTH,
        height: 486
    };
    const baselineMaxSize = {
        width: 640,
        height: 400
    };
    const maxSize = {
        width: 960,
        height: 456
    };
    const dimensions = getImageDimensions(categoryImagePath);
    if (!dimensions) {
        return {
            x: 255,
            y: 244,
            width: 770,
            height: 462
        };
    }
    const baselineScale = Math.min(
        baselineMaxSize.width / dimensions.width,
        baselineMaxSize.height / dimensions.height
    );
    const preferredScale = baselineScale * 1.25;
    const fittedScale = Math.min(
        preferredScale,
        maxSize.width / dimensions.width,
        maxSize.height / dimensions.height
    );
    const renderedWidth = dimensions.width * fittedScale;
    const renderedHeight = dimensions.height * fittedScale;
    return {
        x: lowerPanel.x + ((lowerPanel.width - renderedWidth) / 2),
        y: lowerPanel.y + ((lowerPanel.height - renderedHeight) / 2),
        width: renderedWidth,
        height: renderedHeight
    };
}

function getCategoryImageLayouts(categoryImagePaths = []) {
    const usablePaths = categoryImagePaths.filter(Boolean);
    if (usablePaths.length === 2) {
        const lowerPanel = {
            x: 0,
            y: 234,
            width: IMAGE_WIDTH,
            height: 486
        };
        const horizontalGap = 82;
        const slotWidth = (lowerPanel.width - horizontalGap) / 2;
        const slotHeight = lowerPanel.height - 20;
        return usablePaths.map((imagePath, index) => {
            const slotX = lowerPanel.x + (index * (slotWidth + horizontalGap));
            const slotY = lowerPanel.y + 10;
            const dimensions = getImageDimensions(imagePath);
            if (!dimensions) {
                const fallbackWidth = Math.min(slotWidth * 0.82, 480);
                const fallbackHeight = Math.min(slotHeight * 0.88, 365);
                return {
                    x: slotX + ((slotWidth - fallbackWidth) / 2),
                    y: slotY + ((slotHeight - fallbackHeight) / 2),
                    width: fallbackWidth,
                    height: fallbackHeight
                };
            }
            const fittedScale = Math.min(
                (slotWidth * 0.88) / dimensions.width,
                (slotHeight * 0.88) / dimensions.height
            );
            const renderedWidth = dimensions.width * fittedScale;
            const renderedHeight = dimensions.height * fittedScale;
            return {
                x: slotX + ((slotWidth - renderedWidth) / 2),
                y: slotY + ((slotHeight - renderedHeight) / 2),
                width: renderedWidth,
                height: renderedHeight
            };
        });
    }
    return [getCategoryImageLayout(usablePaths[0] || '')];
}

function resolveCategories(metadata) {
    if (metadata.category) {
        if (Array.isArray(metadata.category) && metadata.category.length > 0) {
            return metadata.category.filter(Boolean);
        }
        if (typeof metadata.category === 'string' && metadata.category) {
            return [metadata.category];
        }
    }
    if (metadata.console) {
        return [metadata.console];
    }
    if (Array.isArray(metadata.categories) && metadata.categories.length > 0) {
        return [metadata.categories[0]];
    }
    if (typeof metadata.categories === 'string' && metadata.categories) {
        return [metadata.categories];
    }
    return ['Reverse Engineering'];
}

function wrapTitle(title, maxLineLength = 31, maxLines = 3) {
    const words = String(title || '').trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) {
        return ['Untitled'];
    }

    const lines = [];
    let currentLine = '';

    for (const word of words) {
        if (!currentLine) {
            currentLine = word;
            continue;
        }

        const nextLine = `${currentLine} ${word}`;
        if (nextLine.length <= maxLineLength || currentLine.length < 14) {
            currentLine = nextLine;
            continue;
        }

        lines.push(currentLine);
        currentLine = word;

        if (lines.length === maxLines - 1) {
            break;
        }
    }

    if (currentLine && lines.length < maxLines) {
        lines.push(currentLine);
    }

    return lines
        .slice(0, maxLines)
        .map((line, index, arr) => {
            if (index !== arr.length - 1 || line.length <= maxLineLength + 6) {
                return line;
            }
            return `${line.slice(0, maxLineLength + 3).trimEnd()}...`;
        });
}

function getInputTimestamp(filePath, configPath) {
    return Math.max(
        fs.statSync(filePath).mtimeMs,
        fs.statSync(configPath).mtimeMs
    );
}

function isUpToDate(outputPath, inputTimestamp) {
    if (!fs.existsSync(outputPath)) {
        return false;
    }
    return fs.statSync(outputPath).mtimeMs >= inputTimestamp;
}

function buildGeoPatternSvg(seed) {
    if (!RUBY_PATH) {
        return '';
    }

    try {
        return execFileSync(RUBY_PATH, [
            '-rgeo_pattern',
            '-e',
            "seed = ARGV[0]; puts GeoPattern.generate(seed).to_svg",
            seed
        ], { stdio: 'pipe' }).toString('utf8').trim();
    } catch (error) {
        return '';
    }
}

function buildSvg({ title, categories, categoryImagePaths, seed }) {
    const titleLines = wrapTitle(title);
    const titleY = titleLines.length === 1 ? 132 : 123;
    const categoryText = categories
        .slice(0, 2)
        .map((category) => String(category).replace(/-/g, ' ').toUpperCase())
        .join(' • ');
    const categoryImageHrefs = categoryImagePaths.map((categoryImagePath) => fileToDataUri(categoryImagePath));
    const logoImageHref = fileToDataUri(RR_LOGO_IMAGE);
    const geoPatternSvg = buildGeoPatternSvg(seed);
    const geoPatternHref = geoPatternSvg
        ? `data:image/svg+xml;base64,${Buffer.from(geoPatternSvg).toString('base64')}`
        : '';
    const textX = 171;
    const categoryImageLayouts = getCategoryImageLayouts(categoryImagePaths);

    const titleTspans = titleLines
        .slice(0, 2)
        .map((line, index) => `<tspan x="${textX}" dy="${index === 0 ? 0 : 66}">${escapeXml(line)}</tspan>`)
        .join('');

    const barHeight = titleLines.length === 1 ? 171 : 234;
    const logoYOffset = titleLines.length === 1 ? 18 : 41;

    const categoryImageMarkup = categoryImageHrefs
        .map((categoryImageHref, index) => {
            if (!categoryImageHref || !categoryImageLayouts[index]) {
                return '';
            }
            const categoryImageLayout = categoryImageLayouts[index];
            return `<image href="${categoryImageHref}" x="${categoryImageLayout.x}" y="${categoryImageLayout.y}" width="${categoryImageLayout.width}" height="${categoryImageLayout.height}" preserveAspectRatio="xMidYMid meet" />`;
        })
        .join('');

        return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${IMAGE_WIDTH}" height="${IMAGE_HEIGHT}" viewBox="0 0 ${IMAGE_WIDTH} ${IMAGE_HEIGHT}">
    <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#111827" flood-opacity="0.45" />
        </filter>
    </defs>
    <rect width="${IMAGE_WIDTH}" height="${IMAGE_HEIGHT}" fill="#4c43aa" />
    ${geoPatternHref ? `<image href="${geoPatternHref}" x="0" y="0" width="${IMAGE_WIDTH}" height="${IMAGE_HEIGHT}" preserveAspectRatio="none" />` : ''}
    <rect width="${IMAGE_WIDTH}" height="${barHeight}" fill="#161a22" />
  ${logoImageHref ? `<image href="${logoImageHref}" x="20" y="${logoYOffset}" width="194" height="128" preserveAspectRatio="xMinYMid meet" />` : ''}
  <text x="${textX}" y="55" fill="rgba(255,255,255,0.82)" font-family="Arial, Helvetica, sans-serif" font-size="37" font-weight="800" letter-spacing="1">${escapeXml(categoryText)}</text>
  <text x="${textX}" y="${titleY}" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="66" font-weight="800">${titleTspans}</text>
    <g filter="url(#shadow)">
        ${categoryImageMarkup}
    </g>
</svg>`;
}

function buildOutputPath(permalink) {
    const slug = toSlug(permalink);
    return {
        slug,
        jpg: path.join(OUTPUT_DIRECTORY, `${slug}.jpg`),
        svg: path.join(OUTPUT_DIRECTORY, `${slug}.svg`)
    };
}

function shouldGenerate(metadata) {
    if (!metadata.title || !metadata.permalink) {
        return false;
    }

    if (toBoolean(metadata.hidden)) {
        return false;
    }

    return !metadata.image && !metadata.twitterimage;
}

function generateImage(svgPath, outputPath) {
    if (Resvg) {
        const svgContent = fs.readFileSync(svgPath, 'utf8');
        const resvg = new Resvg(svgContent, {
            fitTo: {
                mode: 'width',
                value: IMAGE_WIDTH
            }
        });
        const pngBuffer = resvg.render().asPng();
        const tempPngPath = `${outputPath}.tmp.png`;
        fs.writeFileSync(tempPngPath, pngBuffer);
        execFileSync('convert', [
            tempPngPath,
            '-quality',
            '88',
            outputPath
        ], { stdio: 'pipe' });
        fs.unlinkSync(tempPngPath);
        return true;
    }
    if (!RSVG_CONVERT_PATH) {
        return false;
    }
    const tempPngPath = `${outputPath}.tmp.png`;
    execFileSync(RSVG_CONVERT_PATH, [
        '--width',
        String(IMAGE_WIDTH),
        '--height',
        String(IMAGE_HEIGHT),
        '--keep-aspect-ratio',
        svgPath,
        '-o',
        tempPngPath
    ], { stdio: 'pipe' });
    execFileSync('convert', [
        tempPngPath,
        '-quality',
        '88',
        outputPath
    ], { stdio: 'pipe' });
    fs.unlinkSync(tempPngPath);
    return true;
}

function main() {
    const forceRegenerate = process.argv.includes('--force');
    fs.mkdirSync(OUTPUT_DIRECTORY, { recursive: true });
    const categoryImages = parseCategoryImages(CONFIG_PATH);
    const contentFiles = CONTENT_DIRECTORIES
        .flatMap((directory) => findContentFiles(path.join(ROOT_DIR, directory)));

    let generatedCount = 0;
    let skippedCount = 0;
    let missingResvgWarningShown = false;
    let missingRsvgWarningShown = false;
    let missingGeoPatternWarningShown = false;

    for (const filePath of contentFiles) {
        const { success, metadata } = readMarkdownFile(filePath);
        if (!success || !shouldGenerate(metadata)) {
            continue;
        }

        const categories = resolveCategories(metadata).slice(0, 2);
        const categoryImagePaths = categories
            .map((category) => {
                const categoryImageRelativePath = categoryImages[category];
                return categoryImageRelativePath
                    ? path.join(ROOT_DIR, categoryImageRelativePath.replace(/^\//, ''))
                    : '';
            })
            .filter(Boolean);

        const outputPaths = buildOutputPath(metadata.permalink);
        const inputTimestamp = getInputTimestamp(filePath, CONFIG_PATH);

        const canGenerateJpg = Boolean(Resvg || RSVG_CONVERT_PATH);
        const jpgUpToDate = !canGenerateJpg || isUpToDate(outputPaths.jpg, inputTimestamp);
        if (!forceRegenerate && jpgUpToDate && isUpToDate(outputPaths.svg, inputTimestamp)) {
            skippedCount++;
            continue;
        }

        const seed = metadata.title;
        if (!missingGeoPatternWarningShown && !buildGeoPatternSvg(seed)) {
            console.warn('Warning: the Ruby geo_pattern gem is not installed, so SVG placeholders are falling back to a flat background.');
            missingGeoPatternWarningShown = true;
        }

        const svgContent = buildSvg({
            title: metadata.shorttitle || metadata.title,
            categories,
            categoryImagePaths,
            seed
        });

        fs.writeFileSync(outputPaths.svg, svgContent, 'utf8');
        if (generateImage(outputPaths.svg, outputPaths.jpg)) {
            // JPG created successfully.
        } else if (!Resvg && !missingResvgWarningShown) {
            console.warn('Warning: @resvg/resvg-js is not installed, so Node JPG generation is unavailable.');
            missingResvgWarningShown = true;
            if (!missingRsvgWarningShown && !RSVG_CONVERT_PATH) {
                console.warn('Warning: rsvg-convert is not installed, so JPG placeholder generation is being skipped.');
                missingRsvgWarningShown = true;
            }
        } else if (!missingRsvgWarningShown && !RSVG_CONVERT_PATH) {
            console.warn('Warning: rsvg-convert is not installed, so JPG placeholder generation is being skipped.');
            missingRsvgWarningShown = true;
        }
        generatedCount++;
    }

    console.log(`Generated ${generatedCount} social placeholder image(s).`);
    console.log(`Skipped ${skippedCount} up-to-date image(s).`);
    console.log(`Output directory: ${path.relative(ROOT_DIR, OUTPUT_DIRECTORY)}`);
}

if (require.main === module) {
    main();
}
