import React from 'react'

const page = ({ params }: any) => {

    return (
        <div className='w-full flex flex-col items-center justify-center gap-12'>
            <div className='flex flex-row gap-8'>
                <h2 className='text-lg font-bold text-teal-500'>Search Params[0]:</h2>
                <p className='text-red-500'>{params.search[0]}</p>
            </div>
            <div className='flex flex-row gap-8'>
                <h2 className='text-lg font-bold text-teal-500'>Search Params[1]:</h2>
                <p className='text-red-500'>{params.search[1]}</p>
            </div>
            <div className='flex flex-row gap-8'>
                <h2 className='text-lg font-bold text-teal-500'>Search Params[2]:</h2>
                <p className='text-red-500'>{params.search[2]}</p>
            </div>
            <div className='flex flex-row gap-8'>
                <h2 className='text-lg font-bold text-teal-500'>Search Params[3]:</h2>
                <p className='text-red-500'>{params.search[3]}</p>
            </div>
        </div>
    )
}

export default page