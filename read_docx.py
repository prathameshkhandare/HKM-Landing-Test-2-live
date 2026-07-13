from docx import Document
import sys

doc_path = sys.argv[1]
try:
    doc = Document(doc_path)
    with open('output.txt', 'w', encoding='utf-8') as f:
        for para in doc.paragraphs:
            if para.text.strip():
                f.write(para.text + '\n')
except Exception as e:
    print(f"Error: {e}")
