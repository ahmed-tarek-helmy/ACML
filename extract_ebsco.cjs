const fs = require('fs');
const path = String.raw`c:\Users\ahmed\OneDrive\Desktop\project-bolt-sb1-wrxjad17\Test\Pages-old\Puplishers\Aggregators & Data Banks\Ebesco\EBSCODataBases.html`;

try {
  const content = fs.readFileSync(path, 'utf8');
  const regex = /<a href="([^"]+)">(.*?)<\/a>/g;
  let match;
  const databases = [];

  while ((match = regex.exec(content)) !== null) {
    let url = match[1];
    let name = match[2]
      .replace(/<[^>]+>/g, '') // Remove tags
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ')
      .trim();
    
    if (name && url && !url.includes('mailto') && !url.includes('#ebsco')) {
        databases.push({ name, url });
    }
  }

  console.log('export const ebscoDatabases = [');
  databases.forEach(db => {
    console.log(`  { name: "${db.name}", url: "${db.url}" },`);
  });
  console.log('];');

} catch (err) {
  console.error("Error:", err);
}
