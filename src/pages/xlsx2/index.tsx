import React from 'react'
import { downloadExcel } from "react-export-table-to-excel";

// npm i react-export-table-to-excel
const XlsxSample = () => {

    const name = 'data.xlsx';
    const date = new Date().toDateString();
    const header = ['نام', 'نام خانوادگی', 'سن'];
    const body = [
        ['آرش', 'الطافی', 26],
        ['تست 1', 'تست 2', 21],
        ['تست 3', 'تست 4', 35],
    ];

    const handleExport = () => {
        downloadExcel({
            fileName: name.replace('.xlsx', ''),
            sheet: date,
            tablePayload: {
                header: header,
                body: body,
            },
        });
    }

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