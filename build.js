const fs = require('fs');
require('dotenv').config();

// Read the template HTML file
const html = fs.readFileSync('index.html', 'utf8');

// Replace environment variable placeholder
const windyApiKey = process.env.WINDY_API_KEY || '';
const processedHtml = html.replace(/\{\{WINDY_API_KEY\}\}/g, windyApiKey);

// Write the processed file to dist/index.html
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

fs.writeFileSync('dist/index.html', processedHtml);
console.log('Build completed! API key injected into dist/index.html');