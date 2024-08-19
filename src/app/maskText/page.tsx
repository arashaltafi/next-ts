"use client"

import { checkOnlyNumber, maskPhoneNumber, numberValidation } from '@/utils/utils'
import React, { useEffect, useState } from 'react'

const MaskText = () => {
    const [phone, setPhone] = useState<number>()
    const [phoneMask, setPhoneMask] = useState<string | undefined>()

    useEffect(() => {
        setPhoneMask(maskPhoneNumber(phone))
    }, [phone])

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-16'>
            <h1 className='text-5xl'>MaskText</h1>

            <input 
                type="tel"
                value={phone}
                className='bg-white px-8 py-4 text-2xl rounded-xl text-black text-center'
                onChange={(e) => {
                    const value = e.target.value
                    if (isNaN(parseInt(value)) || value.length > 11 || checkOnlyNumber(value) === false || numberValidation(value) === false) {
                        setPhone(0)
                    } else {
                        setPhone(Number(value))
                    }
                }}
            />

            <p className='mt-16 text-lg'>phone: {phone}</p>
            <p className='-mt-8 text-lg'>phoneMask: {phoneMask}</p>
        </div>
    )
}

export default MaskText