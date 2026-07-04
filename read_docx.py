import zipfile, xml.etree.ElementTree as ET
def get_docx_text(path):
    with zipfile.ZipFile(path) as docx:
        tree = ET.XML(docx.read('word/document.xml'))
        namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        paragraphs = []
        for paragraph in tree.findall('.//w:p', namespaces):
            texts = [node.text for node in paragraph.findall('.//w:t', namespaces) if node.text]
            if texts:
                paragraphs.append(''.join(texts))
        return '\n\n'.join(paragraphs)

with open('vakreshvara.txt', 'w', encoding='utf-8') as out:
    out.write(get_docx_text(r'E:\talentroanut -data\New folder\New folder\blg\vakreshvara-pandita-blog.docx'))
