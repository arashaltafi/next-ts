"use client"

import Image from 'next/image'
import React from 'react'

const Print = () => {

    const handlePrint = () => {
        if (window.print) {
            window.print()
        } else {
            alert('your browser does not support window.print()')
        }
    }

    return (
        <div className='w-full min-h-screen flex flex-col gap-16 items-center justify-start'>
            <h1 className='text-6xl'>Print Sample</h1>

            <div className='flex flex-col items-center justify-center gap-8'>
                <h2>Print</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nam, nesciunt saepe sequi dolor consequuntur delectus reprehenderit consectetur repellendus rerum dignissimos sit repellat minima modi vel qui amet? Rerum, hic!</p>
                <Image
                    src={'https://arashaltafi.ir/arash.jpg'}
                    alt='arash picture'
                    quality={100}
                    loading='eager'
                    priority
                    width={400}
                    height={400} />

                <button
                    onClick={handlePrint}
                    className='text-xl text-white bg-red-500 hover:bg-red-600 rounded-lg px-6 py-3 transition-all print:hidden'>
                    Print
                </button>

                <label
                    className='text-xl self-start'
                    htmlFor="text">
                    prevented copy / paste / cute
                </label>
                <input
                    id='text'
                    className='text-xl px-8 py-4 w-full text-black'
                    type='text'
                    placeholder='Enter Text'
                    onPaste={e => e.preventDefault()}
                    onCopy={e => e.preventDefault()}
                    onCut={e => e.preventDefault()}
                />
            </div>
        </div>
    )
}

export default Print