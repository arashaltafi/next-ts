import React from 'react'
import CsvDownloader from 'react-csv-downloader';

// npm i react-csv-downloader
const CsvSample = () => {
    const columns = [
        {
            id: 'cell1',
            displayName: 'First Name',
        },
        {
            id: 'cell2',
            displayName: 'Last Name',
        },
        {
            id: 'cell3',
            displayName: 'Email',
        }
    ]

    const datas = [
        {
            cell1: 'arash1',
            cell2: 'altafi1',
            cell3: 'arashaltafi1377@gmail.com1'
        },
        {
            cell1: 'arash2',
            cell2: 'altafi2',
            cell3: 'arashaltafi1377@gmail.com2'
        },
        {
            cell1: 'arash3',
            cell2: 'altafi3',
            cell3: 'arashaltafi1377@gmail.com3'
        },
    ]

    return (
        <div className='w-full min-h-screen flex flex-col gap-16 items-center justify-start'>
            <h1 className='text-5xl'>React CSV</h1>
            <CsvDownloader
                filename='users.csv'
                title='test title'
                meta={true}
                disabled={false}
                bom={true}
                prefix={false}
                suffix={false}
                separator={`,`}
                wrapColumnChar={``}
                extension={`.csv`}
                datas={datas}
                columns={columns}
                handleError={(err: any) => {
                    console.log("err:", err)
                }}
            >
                <button className='bg-green-500 hover:bg-green-600 text-white rounded-lg px-6 py-3 transition-all'>
                    DownLoad CSV
                </button>
            </CsvDownloader>
        </div>
    )
}

export default CsvSample