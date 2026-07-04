import glob
import re
import os

files = glob.glob(r"e:\volddata\InternShipLinksUs\HKM-Landing-Test-2\app\blog\**\styles.css", recursive=True)

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # If it's a tiny file just importing others, skip
    if len(content) < 500:
        continue

    # We will try to find the "prose" or main body class block to force p and li
    # First, let's bump the clamp functions for titles and section titles
    # Titles are usually clamp(2rem, 5vw, 3.5rem) etc. Let's make them clamp(2.5rem, 5vw, 4rem)
    content = re.sub(r'clamp\(2rem.*?3\.5rem\)', 'clamp(2.5rem, 5vw, 4rem)', content)
    content = re.sub(r'clamp\(1\.6rem.*?2\.2rem\)', 'clamp(2rem, 4vw, 2.8rem)', content)
    content = re.sub(r'clamp\(3rem.*?4\.8rem\)', 'clamp(3.5rem, 7vw, 5.5rem)', content) # ramanavami title
    content = re.sub(r'clamp\(1\.35rem.*?1\.85rem\)', 'clamp(2rem, 4vw, 2.8rem)', content) # ramanavami sec title
    
    # We want to scale standard px/rem values
    # Let's write a function to map old sizes to new sizes
    def scale_font(match):
        val = match.group(1)
        if 'rem' in val:
            try:
                num = float(val.replace('rem', ''))
                # Scale logic: 
                # body is usually 1rem to 1.15rem -> 22px
                # small is < 1rem -> 18px
                # large is > 1.2rem -> bump by 0.5rem or convert to px
                if num < 1.0:
                    return "font-size: 18px"
                elif 1.0 <= num <= 1.25:
                    return "font-size: 22px"
                elif 1.25 < num <= 1.5:
                    return "font-size: 26px"
                elif 1.5 < num <= 2.0:
                    return "font-size: 30px"
                else:
                    return f"font-size: {num + 0.5}rem"
            except:
                return match.group(0)
        elif 'px' in val:
            try:
                num = float(val.replace('px', ''))
                if num < 14:
                    return "font-size: 18px"
                elif 14 <= num <= 18:
                    return "font-size: 22px"
                elif 18 < num <= 24:
                    return "font-size: 26px"
                elif 24 < num <= 30:
                    return "font-size: 32px"
                else:
                    return f"font-size: {num + 4}px"
            except:
                return match.group(0)
        return match.group(0)

    # Use a regex that finds font-size: <value>; but we must ensure we don't scale icon font sizes
    # We'll just replace globally for all font-size rules EXCEPT if the selector has 'icon' in it
    # This is a bit complex for regex, let's just do a blanket replacement of the values
    
    # Actually, a simpler way: just inject a global override at the end of the file!
    # Because they all use standard class structures like `.rn-blog-wrap`, `.bg-blog-wrap`, `.at-blog-wrap`
    
    prefix_match = re.search(r'\.([a-z0-9A-Z_]+)-(?:blog-wrap|prose)', content)
    if prefix_match:
        pfx = prefix_match.group(1)
        
        # We append a huge override block at the end of the file that forces 22px on everything that matters
        override = f"""
/* --- GLOBAL TYPOGRAPHY OVERRIDES FOR 22PX BASE --- */
.{pfx}-blog-wrap,
.{pfx}-prose,
.{pfx}-prose p,
.{pfx}-prose li,
.{pfx}-blog-wrap p,
.{pfx}-blog-wrap li {{
    font-size: 22px !important;
    line-height: 1.8 !important;
}}

.{pfx}-blog-title {{
    font-size: clamp(2.5rem, 5vw, 4rem) !important;
}}

.{pfx}-sec-title {{
    font-size: clamp(2rem, 4vw, 2.8rem) !important;
}}

.{pfx}-blog-subtitle,
.{pfx}-hero-label,
.{pfx}-blog-byline {{
    font-size: 24px !important;
}}

.{pfx}-sec-caption,
.{pfx}-bq footer,
.{pfx}-meta-row {{
    font-size: 20px !important;
}}

.{pfx}-pull-quote p,
.{pfx}-bq p {{
    font-size: 26px !important;
}}
"""
        # Remove any previous overrides if they exist
        content = re.sub(r'/\* --- GLOBAL TYPOGRAPHY OVERRIDES.*', '', content, flags=re.DOTALL)
        content += override

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {file}")
