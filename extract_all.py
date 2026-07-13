import sys
from docx import Document

def extract_text(doc_path, out_path):
    doc = Document(doc_path)
    with open(out_path, 'w', encoding='utf-8') as f:
        for element in doc.element.body:
            if element.tag.endswith('p'):
                text = ""
                for r in element.findall('.//w:t', namespaces=element.nsmap):
                    if r.text:
                        text += r.text
                if text.strip():
                    f.write(text.strip() + '\n')
            elif element.tag.endswith('tbl'):
                f.write("--- TABLE START ---\n")
                for row in element.findall('.//w:tr', namespaces=element.nsmap):
                    row_text = []
                    for cell in row.findall('.//w:tc', namespaces=element.nsmap):
                        cell_text = ""
                        for r in cell.findall('.//w:t', namespaces=element.nsmap):
                            if r.text:
                                cell_text += r.text
                        row_text.append(cell_text.strip())
                    f.write(" | ".join(row_text) + '\n')
                f.write("--- TABLE END ---\n")

extract_text(sys.argv[1], sys.argv[2])
