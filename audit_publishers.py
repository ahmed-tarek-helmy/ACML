import os

source_dir = r"c:/Users/ahmed/OneDrive/Desktop/project-bolt-sb1-wrxjad17/Test/Pages-old/Puplishers"
dest_dir = r"c:/Users/ahmed/OneDrive/Desktop/project-bolt-sb1-wrxjad17/Test/src/pages/Publishers"

html_files = []
for root, dirs, files in os.walk(source_dir):
    for file in files:
        if file.endswith(".html"):
            html_files.append(os.path.join(root, file))

tsx_files = []
for root, dirs, files in os.walk(dest_dir):
    for file in files:
        if file.endswith(".tsx"):
            tsx_files.append(file)

print(f"Found {len(html_files)} HTML files.")
print(f"Found {len(tsx_files)} TSX components.")

print("\n--- HTML Files ---")
for f in html_files:
    print(f)

print("\n--- TSX Files ---")
for f in tsx_files:
    print(f)
