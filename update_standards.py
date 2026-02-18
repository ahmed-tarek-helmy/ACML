import os

file_path = r'c:\Users\ahmed\OneDrive\Desktop\project-bolt-sb1-wrxjad17\Test\src\data\standardsSocieties.ts'

print(f"Processing {file_path}...")

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    changes_count = 0
    
    for line in lines:
        # Only replace in the "name" field to avoid breaking URLs
        if '"name":' in line and 'IHS' in line:
            new_line = line.replace('IHS', 'Accuris')
            new_lines.append(new_line)
            changes_count += 1
        else:
            new_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

    print(f"Successfully replaced {changes_count} occurrences of 'IHS' with 'Accuris' in 'name' fields.")
    
except Exception as e:
    print(f"Error: {e}")
