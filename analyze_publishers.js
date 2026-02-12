import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Correct path based on previous ls output
const rootDir = path.resolve('c:/Users/ahmed/OneDrive/Desktop/project-bolt-sb1-wrxjad17/Test/Pages-old/Puplishers');

function getFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      if (file.toLowerCase().endsWith('.html')) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

console.log(`Scanning: ${rootDir}`);
const allFiles = getFiles(rootDir);
console.log(`Found ${allFiles.length} HTML files.`);

const hashMap = {};

allFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath);
    const hash = crypto.createHash('md5').update(content).digest('hex');
    
    if (!hashMap[hash]) {
      hashMap[hash] = [];
    }
    hashMap[hash].push(filePath);
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
  }
});

const result = Object.entries(hashMap).map(([hash, files]) => ({
  hash,
  count: files.length,
  files: files.map(f => path.relative(rootDir, f))
}));

// Sort by count (duplicates first)
result.sort((a, b) => b.count - a.count);

console.log(JSON.stringify(result, null, 2));
