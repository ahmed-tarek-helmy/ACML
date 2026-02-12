const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const rootDir = 'c:/Users/ahmed/OneDrive/Desktop/project-bolt-sb1-wrxjad17/Test/Pages-old/Puplishers';

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      if (name.endsWith('.html')) {
        files.push(name);
      }
    }
  }
  return files;
}

const files = getFiles(rootDir);
const hashes = {};

files.forEach(file => {
  const content = fs.readFileSync(file);
  const hash = crypto.createHash('md5').update(content).digest('hex');
  if (!hashes[hash]) {
    hashes[hash] = [];
  }
  hashes[hash].push(file);
});

console.log(JSON.stringify(hashes, null, 2));
