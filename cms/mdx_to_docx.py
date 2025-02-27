import os
import re
from docx import Document

def mdx_to_docx(mdx_directory, output_file):
    doc = Document()
    
    for filename in os.listdir(mdx_directory):
        if filename.endswith('.mdx'):
            with open(os.path.join(mdx_directory, filename), 'r') as file:
                content = file.read()
                
                # Add a section marker
                doc.add_heading(f"FILE: {filename}", level=1)
                
                # Extract front matter
                front_matter = re.search(r'---\n(.*?)\n---', content, re.DOTALL)
                if front_matter:
                    front_matter_content = front_matter.group(1)
                    # List of keys to include
                    keys_to_include = ['title', 'description']
                    
                    # Parse front matter content
                    lines = front_matter_content.split('\n')
                    i = 0
                    while i < len(lines):
                        line = lines[i].strip()
                        if ':' in line:
                            key, value = line.split(':', 1)
                            key = key.strip()
                            value = value.strip()
                            
                            # Check if the key is in the list of keys to include
                            if key in keys_to_include:
                                print("Including", key)
                                # Handle multi-line values
                                if value == '"':
                                    i += 1
                                    while i < len(lines) and not lines[i].strip().endswith('"'):
                                        value += ' ' + lines[i].strip()
                                        i += 1
                                    if i < len(lines):
                                        value += ' ' + lines[i].strip()
                                
                                print("Extracted", value)
                                # Remove surrounding quotes if present
                                value = value.strip('"')
                                doc.add_paragraph(f"{key.capitalize()}: {value}")
                        i += 1
                
                # Remove front matter from the content
                if front_matter:
                    content = content.replace(front_matter.group(0), '', 1).strip()
                # Add the rest of the content
                doc.add_paragraph(content)
                
                # Add a page break between files
                doc.add_page_break()
    
    doc.save(output_file)

def docx_to_mdx(input_file, output_directory):
    doc = Document(input_file)
    current_file = None
    current_content = []
    
    for paragraph in doc.paragraphs:
        if paragraph.style.name == 'Heading 1' and paragraph.text.startswith('FILE:'):
            if current_file:
                # Write the previous file
                with open(os.path.join(output_directory, current_file), 'w') as file:
                    file.write('\n'.join(current_content))
            
            current_file = paragraph.text.split(': ')[1]
            current_content = []
        else:
            current_content.append(paragraph.text)
    
    # Write the last file
    if current_file:
        with open(os.path.join(output_directory, current_file), 'w') as file:
            file.write('\n'.join(current_content))

if __name__ == '__main__':
    # Usage
    mdx_to_docx('../stories', 'output.docx')
