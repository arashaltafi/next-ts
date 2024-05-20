"use client"

import React from 'react'
import { useTheme } from './ThemeContext';

const UseContext = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className='flex flex-col items-center justify-start gap-8 w-full h-screen'>
            <h1>UseContext</h1>

            <button
                onClick={toggleTheme}
                className='bg-red-500 hover:bg-red-600 text-white rounded-lg px-6 py-3 transition-all'
            >
                Toggle Theme
            </button>

            <h2>{theme}</h2>

            <p className={`
                text-lg px-8 py-4 ${theme === 'light' ? 'text-black bg-white' : 'text-white bg-black'}
            `}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, molestias nesciunt praesentium necessitatibus neque possimus explicabo, error autem voluptates, temporibus ea laboriosam id? Vel obcaecati laboriosam nam quos, at ut?
            </p>
        </div>
    )
}

export default UseContext