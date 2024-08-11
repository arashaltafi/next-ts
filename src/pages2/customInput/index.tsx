import Link from 'next/link'
import React from 'react'

const CustomInputs = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start px-32 py-16 gap-16'>
            <h1 className='text-5xl'>CustomInputs</h1>

            <Link className='mt-32 text-xl text-sky-500' href="/customInput/checkbox">CustomInput Checkbox</Link>
            <Link className='text-xl text-sky-500' href="/customInput/radiobutton">CustomInput Radio</Link>
            <Link className='text-xl text-sky-500' href="/customInput/range">CustomInput Range</Link>
            <Link className='text-xl text-sky-500' href="/customInput/customRange">CustomInput customRange</Link>

            <div style={{
                width: '300px',
                height: '150px',
                borderTop: '10px solid #000',
                borderRadius: '150px 150px 0 0',
            }} />
        </div>
    )
}

export default CustomInputs