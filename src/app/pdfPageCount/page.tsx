"use client"

import { useEffect, useState } from 'react';

const PdfPageCountComponent: React.FC = () => {
    const [pageCount, setPageCount] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    const pdfUrl = 'https://arashaltafi.ir/resume_en.pdf';

    useEffect(() => {
        const fetchPdfPageCount = async () => {
            try {
                const response = await fetch(pdfUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch PDF');
                }

                const arrayBuffer = await response.arrayBuffer();
                const pdfData = new Uint8Array(arrayBuffer);

                const pageCount = extractPageCount(pdfData);
                setPageCount(pageCount);
            } catch (err) {
                console.error(err);
                setError('Failed to load PDF');
            }
        };

        fetchPdfPageCount();
    }, [pdfUrl]);

    const extractPageCount = (pdfData: Uint8Array): number => {
        // Searching for /Count keyword within the PDF
        const countKeyword = '/Count';
        const dataString = new TextDecoder().decode(pdfData);

        const index = dataString.lastIndexOf(countKeyword);
        if (index === -1) {
            throw new Error('Page count information not found');
        }

        const countStart = index + countKeyword.length;
        const countEnd = dataString.indexOf('/', countStart);

        const pageCountStr = dataString.slice(countStart, countEnd).trim();
        const pageCount = parseInt(pageCountStr, 10);

        if (isNaN(pageCount)) {
            throw new Error('Unable to extract page count');
        }

        return pageCount;
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {pageCount !== null ? (
                <p>PDF Page Count: {pageCount}</p>
            ) : (
                <p>Loading PDF page count...</p>
            )}
        </div>
    );
};

export default PdfPageCountComponent;