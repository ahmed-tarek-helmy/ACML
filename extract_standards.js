import fs from "fs";
import path from "path";

// Use strict mode by default in modules
// Define file path
const basePath =
  "c:/Users/ahmed/OneDrive/Desktop/project-bolt-sb1-wrxjad17/Test/Pages-old/Puplishers/Standards & Industries Databases";
const fileName = "Standards & International Societies.html";
const fullPath = path.join(basePath, fileName);

console.log(`Trying to read: ${fullPath}`);

if (!fs.existsSync(fullPath)) {
  console.error(`File not found: ${fullPath}`);
  console.log("Contents of directory:");
  try {
    const files = fs.readdirSync(basePath);
    console.log(files.join("\n"));
  } catch (e) {
    console.error(`Could not list directory ${basePath}: ${e.message}`);
  }
  process.exit(1);
}

try {
  const content = fs.readFileSync(fullPath, "utf8");

  const items = [];
  // Regex - looking for links inside table cells
  // Some rows might have slightly different formatting, let's target the anchor tag directly.
  // The structure consistently has links inside <td>: <td><a href="...">...</a></td>

  const regex = /<a\s+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const url = match[1];
    let name = match[2];

    // Clean up name
    name = name
      .replace(/&amp;/g, "&")
      .replace(/&nbsp;/g, " ")
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    // Skip "back" links or navigation
    if (
      url.includes("#") ||
      name.toLowerCase() === "back" ||
      name.toLowerCase().includes("for more information")
    ) {
      continue;
    }

    items.push({ name, url });
  }

  console.log(`Found ${items.length} items`);

  // Write to JSON file
  fs.writeFileSync("extracted_standards.json", JSON.stringify(items, null, 2));
  console.log("Successfully wrote extracted_standards.json");
} catch (err) {
  console.error("Error processing file:", err);
  process.exit(1);
}
