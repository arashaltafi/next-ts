"use client"

import React from 'react'

const Error = ({ error, reset }: any) => {
    return (
        <div>
            <h1 className='text-red-500 '>Error: {error.message}</h1>
            <button
                className='bg-red-500 hover:bg-red-600 text-white rounded-lg px-6 py-3 transition-all'
                onClick={() => reset()}>
                Try Again
            </button>
        </div>
    )
}

export default Error