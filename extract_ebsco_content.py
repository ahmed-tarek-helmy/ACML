import re

file_path = r"c:\Users\ahmed\OneDrive\Desktop\project-bolt-sb1-wrxjad17\Test\Pages-old\Puplishers\Aggregators & Data Banks\Ebesco\EBSCODataBases.html"

with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

# Extract links and text
matches = re.findall(r'<a href="([^"]+)">(.*?)</a>', content)

print("export const ebscoDatabases = [")
for href, text in matches:
    # Clean up text
    text = re.sub(r'<[^>]+>', '', text).strip()
    text = text.replace("&amp;", "&").replace("    ", " ")
    print(f'  {{ name: "{text}", url: "{href}" }},')
print("];")
