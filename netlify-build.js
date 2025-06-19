// Netlify build script
const fs = require('fs');
const path = require('path');

console.log('Starting to install dependencies...');

// Ensure we're in the correct directory
process.chdir(path.dirname(__filename));

// Run npm install
const { execSync } = require('child_process');
try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('Dependencies installed successfully');
} catch (error) {
    console.error('Error installing dependencies:', error);
    process.exit(1);
}

// Build the project
try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('Build completed successfully');
} catch (error) {
    console.error('Error during build:', error);
    process.exit(1);
}

// Verify build output
const buildDir = path.join(__dirname, 'dist');
if (!fs.existsSync(buildDir)) {
    console.error('Build output directory not found');
    process.exit(1);
}

console.log('Build process completed successfully');
