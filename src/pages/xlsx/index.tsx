import React from 'react'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

// npm i xlsx file-saver
// npm i --save-dev @types/file-saver
const XlsxSample = () => {

    // Sample JSON data
    const jsonData = [
        {
            'نام': 'آرش',
            'نام خانوادگی': 'الطافی',
            'سن': 26
        },
        {
            'نام': 'تست 1',
            'نام خانوادگی': 'تست 2',
            'سن': 21
        },
        {
            'نام': 'تست 3',
            'نام خانوادگی': 'تست 4',
            'سن': 35
        }
    ];

    const handleExport = () => {
        // Convert JSON data to worksheet
        const worksheet = XLSX.utils.json_to_sheet(jsonData);

        // Create a new workbook
        const workbook = XLSX.utils.book_new();

        // Set sheet direction to right-to-left
        if(!workbook.Workbook) workbook.Workbook = {};
        if(!workbook.Workbook.Views) workbook.Workbook.Views = [];
        if(!workbook.Workbook.Views[0]) workbook.Workbook.Views[0] = {};
        workbook.Workbook.Views[0].RTL = true;

        // Append the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'شیت 1');

        // Write the workbook to a binary string
        const workbookBinary = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });

        // Convert binary string to array buffer
        const buffer = new ArrayBuffer(workbookBinary.length);
        const view = new Uint8Array(buffer);
        for (let i = 0; i < workbookBinary.length; i++) {
            view[i] = workbookBinary.charCodeAt(i) & 0xFF;
        }

        // Create a Blob from the array buffer
        const blob = new Blob([buffer], { type: 'application/octet-stream' });

        // Use FileSaver to save the Blob as an XLSX file
        saveAs(blob, 'data.xlsx');
    };

    return (
        <div className='w-full min-h-screen flex flex-col gap-16 items-center justify-start'>
            <h1 className='text-5xl'>JSON to XLSX Export</h1>
            <button
                className='px-8 py-4 rounded-lg bg-green-600 hover:bg-green-700 transition-all'
                onClick={handleExport}
            >
                Export to XLSX
            </button>
        </div>
    )
}

export default XlsxSample