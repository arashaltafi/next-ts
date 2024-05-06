"use client"

import React, { useState, useTransition } from 'react'

const TransitionHook = () => {
    const [name, setName] = useState('')
    const [isPending, startTransition] = useTransition()

    const handleUpdate = async () => {
        startTransition(async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const res = await response.json()
            setName(res.title)
        })
    }

    return (
        <div className='w-full h-screen flex flex-col items-center justify-start py-12'>
            <h1 className='text-5xl'>TransitionHook Sample</h1>

            <p className='text-xl mt-32'>name: {name}</p>
            {
                isPending && <p>pending</p>
            }

            <button
                className='mt-32 text-xl bg-red-500 hover:bg-red-600 text-white rounded-lg px-6 py-3 transition-all'
                onClick={() => handleUpdate()}
            >
                Update
            </button>
        </div>
    )
}

export default TransitionHook