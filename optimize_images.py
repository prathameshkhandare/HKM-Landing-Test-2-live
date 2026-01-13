
import os
import shutil
from PIL import Image, ImageOps

def optimize_images(root_dir):
    eligible_extensions = {'.jpg', '.jpeg', '.png'}
    backup_dir = os.path.join(root_dir, '_original_images_backup')
    
    if not os.path.exists(backup_dir):
        os.makedirs(backup_dir)

    processed_count = 0
    total_original_size = 0
    total_optimized_size = 0

    print(f"Scanning {root_dir}...")

    for subdir, dirs, files in os.walk(root_dir):
        # Skip the backup directory itself
        if '_original_images_backup' in subdir:
            continue
            
        for file in files:
            filepath = os.path.join(subdir, file)
            ext = os.path.splitext(file)[1].lower()
            
            if ext not in eligible_extensions:
                continue
                
            file_size = os.path.getsize(filepath)
            # requirement 3: > 50KB
            if file_size < 50 * 1024: 
                continue

            try:
                with Image.open(filepath) as img:
                    # Fix orientation immediately (EXIF)
                    img = ImageOps.exif_transpose(img)
                    
                    width, height = img.size
                    
                    # Requirement 4: Resize max width 1920
                    if width > 1920:
                        ratio = 1920 / width
                        new_height = int(height * ratio)
                        img = img.resize((1920, new_height), Image.Resampling.LANCZOS)
                        was_resized = True
                    else:
                        was_resized = False

                    # Requirement 7: Backup
                    rel_path = os.path.relpath(filepath, root_dir)
                    backup_path = os.path.join(backup_dir, rel_path)
                    os.makedirs(os.path.dirname(backup_path), exist_ok=True)
                    if not os.path.exists(backup_path): # Don't overwrite existing backup from previous runs
                         shutil.copy2(filepath, backup_path)

                    total_original_size += file_size

                    # Requirement 4 & 6 & 10: Optimize in place AND Generate Webpf
                    # We optimize the original file (resize + compress) to keep paths valid.
                    # We ALSO generate a webp version for future use.
                    
                    # 1. Optimize Original (In-Place)
                    if ext in ['.jpg', '.jpeg']:
                        img.save(filepath, "JPEG", quality=80, optimize=True)
                    elif ext == '.png':
                        # Png doesn't support 'quality' heavily same as jpeg but optimize=True helps
                        # For PNG we can restrict colors or just use optimize flag. 
                        # To strictly follow "quality level 75-80", we mostly apply this to lossy formats.
                        # For PNG, we stay safe with optimize=True.
                        img.save(filepath, "PNG", optimize=True)
                    
                    # 2. Convert to WebP (Sibling)
                    webp_path = os.path.splitext(filepath)[0] + '.webp'
                    img.save(webp_path, "WEBP", quality=80)
                    
                    new_size = os.path.getsize(filepath)
                    total_optimized_size += new_size
                    processed_count += 1
                    
                    status = "Resized & Optimized" if was_resized else "Optimized"
                    print(f"[OK] {file} ({status}) | Original: {file_size/1024:.1f}KB -> New: {new_size/1024:.1f}KB")

            except Exception as e:
                print(f"[ERROR] Could not process {filepath}: {e}")

    print("-" * 50)
    print(f"Processing Complete.")
    print(f"Total Images Processed: {processed_count}")
    print(f"Total Original Size: {total_original_size / 1024 / 1024:.2f} MB")
    print(f"Total Optimized Size (Original Formats): {total_optimized_size / 1024 / 1024:.2f} MB")
    print(f"Saved: {(total_original_size - total_optimized_size) / 1024 / 1024:.2f} MB")
    print("Note: WebP versions were also generated alongside original files.")

if __name__ == "__main__":
    optimize_images("public")
