import fs from "fs";
import path from "path";

const jsonPath = "extracted_standards.json";
const tsPath =
  "c:/Users/ahmed/OneDrive/Desktop/project-bolt-sb1-wrxjad17/Test/src/data/standardsSocieties.ts";

try {
  const items = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  console.log(`Reading ${items.length} items from JSON.`);

  const content = `export const standardsSocieties = ${JSON.stringify(items, null, 2)};`;

  fs.writeFileSync(tsPath, content);
  console.log(`Successfully updated ${tsPath}`);
} catch (err) {
  console.error("Error updating file:", err);
}
