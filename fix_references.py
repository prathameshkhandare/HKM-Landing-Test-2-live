import re
import os

files = [
    r'e:\volddata\InternShipLinksUs\HKM-Landing-Test-2\app\blog\sri-bhaktivinoda-thakura-life-teachings-legacy\BlogClient.tsx',
    r'e:\volddata\InternShipLinksUs\HKM-Landing-Test-2\app\blog\vyasa-puja-guide-offering\BlogClient.tsx'
]

def fix_content(content):
    # Fix Bhaktivinoda Thakura: <strong>— Text</strong> -> <span style={{ fontSize: '0.9em', color: '#666' }}>(Text)</span>
    content = re.sub(r'<strong>—\s*(.*?)</strong>', r'<span style={{ fontSize: \'0.9em\', color: \'#666\' }}>(\1)</span>', content)
    
    # Fix Vyasa Puja: <span style={{ fontSize: '0.9em', color: '#C9A84C', fontWeight: 'bold' }}>— Text</span>
    content = re.sub(r'<span style={{ fontSize: \'0\.9em\', color: \'#C9A84C\', fontWeight: \'bold\' }}>—\s*(.*?)</span>', r'<span style={{ fontSize: \'0.9em\', color: \'#666\' }}>(\1)</span>', content)

    # Fix the generic p tag source in Vyasa Puja: <p className="sp-sec-paragraph" style={{fontSize: '0.9em', fontStyle: 'italic', marginTop: '1rem'}}>Source: ...</p>
    content = re.sub(r'<p className="sp-sec-paragraph" style={{fontSize: \'0\.9em\', fontStyle: \'italic\', marginTop: \'1rem\'}}>\s*Source:\s*(.*?)\s*</p>', r'<p className="sp-sec-paragraph" style={{fontSize: \'0.9em\', color: \'#666\', marginTop: \'1rem\'}}>(\1)</p>', content)
    
    # Let's also fix the Vyasa Puja quote inside the text (Srimad-Bhagavatam 6.7.23)
    content = re.sub(r'— Srimad-Bhagavatam 6\.7\.23</p>', r'(Srimad-Bhagavatam 6.7.23)</p>', content)

    # Add objectPosition: 'top' to hero image in Bhaktivinoda Thakura
    content = re.sub(
        r'<img src="/images/sri-bhaktivinoda-thakura/hero\.png" alt="([^"]+)" />',
        r'<img src="/images/sri-bhaktivinoda-thakura/hero.png" alt="\1" style={{ objectPosition: \'top\' }} />',
        content
    )
    return content

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = fix_content(content)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(new_content)

print("Fixed references and hero image.")
