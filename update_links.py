import os
import glob
import re

search_dir = "e:/volddata/InternShipLinksUs/HKM-Landing-Test-2/app"
replacement = "https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign"

count = 0
for filepath in glob.glob(os.path.join(search_dir, '**', '*.tsx'), recursive=True):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the full target first so it's out of the way
    new_content = content.replace(replacement, "TEMP_PLACEHOLDER")
    
    # Now replace short versions (with or without slash)
    new_content = new_content.replace("https://campaigns.hkmchennai.org/", replacement)
    new_content = new_content.replace("https://campaigns.hkmchennai.org", replacement)
    
    # Restore the full version
    new_content = new_content.replace("TEMP_PLACEHOLDER", replacement)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        count += 1
        print(f"Updated {filepath}")

print(f"Total files updated: {count}")
