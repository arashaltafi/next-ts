"use client"

import React from 'react'
import { showToast } from '@arashaltafi/react-toast';

// npm i @arashaltafi/react-toast
const ToastArash = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-16'>
            <h1 className='text-5xl'>ToastArash</h1>

            <button
                className='text-xl text-white bg-red-500 hover:bg-red-600 transition-all duration-200'
                onClick={() => {
                    showToast('Error toast', 'success', true, 100000, "/close-success.svg", "/close-error.svg")
                }}
            >
                show toast error
            </button>
        </div>
    )
}

export default ToastArash