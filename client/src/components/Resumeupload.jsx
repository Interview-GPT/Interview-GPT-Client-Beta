import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../styles/resume.css';

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

            setText(fullText); //the string fullText can be sent to an API
        } catch (error) {
            console.error('Error loading PDF:', error);
        }
    }

    return (
        <div id ='resume-page'>
            <h2>Submit Resume</h2>
            <form className='input'>
                <input type="file" name="file" onChange={handleFile} />
            </form>
            {file && (
                <div className='enclosed-area'>
                    <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={1} />
                    </Document>
                </div>
            )}
        </div>
    );
}

export default FileUpload;
