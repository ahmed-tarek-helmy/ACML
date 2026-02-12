const fs = require('fs');
const path = String.raw`c:\Users\ahmed\OneDrive\Desktop\project-bolt-sb1-wrxjad17\Test\Pages-old\Puplishers\Standards & Industries Databases\Standards & International Societies.html`;

try {
  const content = fs.readFileSync(path, 'utf8');
  const regex = /<a href="([^"]+)">([^<]+)<\/a>/g;
  let match;
  const societies = [];

  while ((match = regex.exec(content)) !== null) {
    let url = match[1];
    let name = match[2]
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ')
      .trim();
      
    if (name && url && !url.includes('mailto') && !url.includes('home.html')) {
        societies.push({ name, url });
    }
  }

  console.log('export const standardsSocieties = [');
  societies.forEach(soc => {
    console.log(`  { name: "${soc.name}", url: "${soc.url}" },`);
  });
  console.log('];');

} catch (err) {
  console.error("Error:", err);
}
