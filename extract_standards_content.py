import re

file_path = r"c:\Users\ahmed\OneDrive\Desktop\project-bolt-sb1-wrxjad17\Test\Pages-old\Puplishers\Standards & Industries Databases\Standards & International Societies.html"

with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

# Extract links and text - standards page seems to have a specific structure
# Based on my memory of similar pages, it likely has <p><a href="...">Name</a> description...</p>
# Or maybe simpler. Let's start with simple extraction.

matches = re.findall(r'<a href="([^"]+)">([^<]+)</a>', content)

print("export const standardsSocieties = [")
for href, text in matches:
    # Filter for organization names if possible, but for now grab all links
    # Assuming the main links are the organizations
    if "mailto" in href or "home.html" in href:
        continue
    text = text.strip().replace("&amp;", "&")
    print(f'  {{ name: "{text}", url: "{href}" }},')
print("];")
