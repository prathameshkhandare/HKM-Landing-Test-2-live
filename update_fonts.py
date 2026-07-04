import glob
import re

files = glob.glob(r"e:\volddata\InternShipLinksUs\HKM-Landing-Test-2\app\blog\**\styles.css", recursive=True)

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the prefix by looking for -blog-wrap or -prose
    prefix_match = re.search(r'\.([a-z]+)-blog-wrap', content)
    if not prefix_match:
        prefix_match = re.search(r'\.([a-z]+)-prose', content)
        
    if prefix_match:
        pfx = prefix_match.group(1)
        
        replacements = [
            (rf'(\.{pfx}-prose\s*{{[^}}]*?font-size:\s*)[^;]+;', r'\g<1>22px;'),
            (rf'(\.{pfx}-hero-label\s*{{[^}}]*?font-size:\s*)[^;]+;', r'\g<1>22px;'),
            (rf'(\.{pfx}-blog-title\s*{{[^}}]*?font-size:\s*)(?:clamp\([^;]+\)|[^;]+);', r'\g<1>clamp(2.5rem, 5vw, 4rem);'),
            (rf'(\.{pfx}-blog-subtitle\s*{{[^}}]*?font-size:\s*)[^;]+;', r'\g<1>24px;'),
            (rf'(\.{pfx}-blog-byline\s*{{[^}}]*?font-size:\s*)[^;]+;', r'\g<1>22px;'),
            (rf'(\.{pfx}-meta-row\s*{{[^}}]*?font-size:\s*)[^;]+;', r'\g<1>18px;'),
            (rf'(\.{pfx}-sec-num\s*{{[^}}]*?font-size:\s*)[^;]+;', r'\g<1>14px;'),
            (rf'(\.{pfx}-sec-num\s*{{[^}}]*?margin-top:\s*)[^;]+;', r'\g<1>8px;'),
            (rf'(\.{pfx}-sec-title\s*{{[^}}]*?font-size:\s*)(?:clamp\([^;]+\)|[^;]+);', r'\g<1>clamp(2rem, 4vw, 2.8rem);'),
            (rf'(\.{pfx}-sec-caption\s*{{[^}}]*?font-size:\s*)[^;]+;', r'\g<1>20px;'),
            (rf'(\.{pfx}-pull-quote::before\s*{{[^}}]*?font-size:\s*)[^;]+;', r'\g<1>5rem;'),
            (rf'(\.{pfx}-pull-quote::after\s*{{[^}}]*?font-size:\s*)[^;]+;', r'\g<1>5rem;'),
            (rf'(\.{pfx}-pull-quote\s+p\s*{{[^}}]*?font-size:\s*)[^;]+;', r'\g<1>28px !important;'),
            (rf'(\.{pfx}-pull-quote\s+cite\s*{{[^}}]*?font-size:\s*)[^;]+;', r'\g<1>22px;'),
            (rf'(\.{pfx}-bq\s+p\s*{{[^}}]*?font-size:\s*)[^;]+;', r'\g<1>24px;'),
            (rf'(\.{pfx}-bq\s+footer\s*{{[^}}]*?font-size:\s*)[^;]+;', r'\g<1>20px;'),
        ]
        
        for old, new in replacements:
            content = re.sub(old, new, content)
            
        # Ensure p and li overrides exist in prose
        if re.search(rf'\.{pfx}-prose\s+p\s*{{', content):
            # The regex ensures that 'font-size: xx !important;' replaces the existing line or adds it.
            # A simpler way: if it matches `.{pfx}-prose p {`, we inject it immediately after if it doesn't already have it
            content = re.sub(rf'(\.{pfx}-prose\s+p\s*{{)(?!.*?font-size:\s*22px)', r'\g<1> font-size: 22px !important;', content, flags=re.DOTALL)
            content = re.sub(rf'(\.{pfx}-prose\s+li\s*{{)(?!.*?font-size:\s*22px)', r'\g<1> font-size: 22px !important;', content, flags=re.DOTALL)
        else:
            content = re.sub(rf'(\.{pfx}-prose\s*{{[^}}]*}})', rf'\g<1>\n.{pfx}-prose p {{ font-size: 22px !important; margin-bottom: 1.25rem; }}\n.{pfx}-prose li {{ font-size: 22px !important; }}', content)
            
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file}")
