"use client"

import React from 'react'
import { Bounce, toast, ToastContainer, Zoom } from 'react-toastify';

const Toastify = () => {
    const notify1 = () => {
        toast('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
    const notify2 = () => {
        toast.error('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Zoom,
        });
    }
    const notify3 = () => {
        toast.success('🦄 Wow so easy!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
        });
    }

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center gap-8'>
            <button
                className='px-4 py-3 bg-red-500 text-white font-bold text-center'
                onClick={notify1}
            >
                Notify Simple!
            </button>
            <button
                className='px-4 py-3 bg-red-500 text-white font-bold text-center'
                onClick={notify2}
            >
                Notify Error!
            </button>
            <button
                className='px-4 py-3 bg-red-500 text-white font-bold text-center'
                onClick={notify3}
            >
                Notify Success!
            </button>

            <ToastContainer />
        </div>
    )
}

export default Toastify