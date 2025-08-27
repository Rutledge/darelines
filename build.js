const fs = require('fs');
require('dotenv').config();

// Read the template HTML file
const html = fs.readFileSync('index.html', 'utf8');

// Replace environment variable placeholders
const windyApiKey = process.env.WINDY_API_KEY || '';
const sitePassword = process.env.SITE_PASSWORD || 'puppy';

console.log('Environment variables:');
console.log('WINDY_API_KEY length:', windyApiKey.length);
console.log('SITE_PASSWORD:', sitePassword);

let processedHtml = html.replace(/\{\{WINDY_API_KEY\}\}/g, windyApiKey);
processedHtml = processedHtml.replace(/\{\{SITE_PASSWORD\}\}/g, sitePassword);

// Write the processed file to dist/index.html
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

fs.writeFileSync('dist/index.html', processedHtml);
console.log('Build completed! API key injected into dist/index.html');