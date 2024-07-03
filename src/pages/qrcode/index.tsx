import React, { useState } from 'react'
import QRCode from "react-qr-code";

const QrCode = () => {
    const [value, setValue] = useState('')

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-16'>
            <h1 className='text-5xl'>QrCode</h1>

            <input
                type="text"
                value={value}
                className='bg-white px-8 py-4 text-xl rounded-xl text-black'
                onChange={(e) => setValue(e.currentTarget.value)}
            />

            <QRCode
                size={256}
                className='w-1/2 h-80 bg-white py-8'
                viewBox={`0 0 256 256`}
                value={value}
            />
        </div>
    )
}

export default QrCode