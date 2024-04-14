"use client"

import React from 'react'

const Error = ({ error, reset }: any) => {
    return (
        <div>
            <h1 className='text-red-500 '>Error: {error.message}</h1>
            <button>
                reset
            </button>
        </div>
    )
}

export default Error