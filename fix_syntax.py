import sys

files = [
    r'e:\volddata\InternShipLinksUs\HKM-Landing-Test-2\app\blog\sri-bhaktivinoda-thakura-life-teachings-legacy\BlogClient.tsx',
    r'e:\volddata\InternShipLinksUs\HKM-Landing-Test-2\app\blog\vyasa-puja-guide-offering\BlogClient.tsx'
]

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Replace literal backslash followed by single quote with just single quote
    content = content.replace("\\\'", "'")
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

print("Syntax fixed!")
