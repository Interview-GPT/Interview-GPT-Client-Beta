import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function FileUpload() {
    const [file, setFile] = useState(null);
    const [text, setText] = useState('');

    function handleFile(event) {
        setFile(event.target.files[0]);
    }

    async function onDocumentLoadSuccess() {
        try {
            const pdfData = await fetch(file).then((response) => response.arrayBuffer());
            const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
            const numPages = pdf.numPages;
            let fullText = '';

            for (let pageNum = 1; pageNum <= numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const content = await page.getTextContent();
                const pageText = content.items.map((item) => item.str).join(' ');
                fullText += pageText;
            }

            setText(fullText);
        } catch (error) {
            console.error('Error loading PDF:', error);
        }
    }

    return (
        <div>
            <h2>Submit Resume</h2>
            <form>
                <input type="file" name="file" onChange={handleFile} />
            </form>
            {file && (
                <div>
                    <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={1} />
                    </Document>
                    {text && (
                        <div>
                            <h2>Resume:</h2>
                            <pre>{text}</pre>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default FileUpload;
