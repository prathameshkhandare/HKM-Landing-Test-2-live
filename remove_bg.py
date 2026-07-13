from rembg import remove
from PIL import Image

input_path = 'public/images/gita-pathashala/gita_girl_book.png'
output_path = 'public/images/gita-pathashala/gita_girl_book_nobg.png'

print("Opening image...")
input = Image.open(input_path)
print("Removing background...")
output = remove(input)
print("Saving image...")
output.save(output_path)
print("Done!")
