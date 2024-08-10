import React from 'react'
import { Toaster, toast } from 'sonner';

// npm i sonner
// https://sonner.emilkowal.ski/
const Sonner = () => {

    const showToast = (type: 'success' | 'error' | 'info', message: string, duration?: number) => {
        const time = duration ? duration : 3000
        toast[type](message, { duration: time })
    }

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-8'>
            <Toaster />

            <h1 className='text-5xl mb-8'>Sonner</h1>
            <button onClick={() => showToast('error', 'Error toast 2', 2000)}>Error Toast 2 Sec</button>
            <button onClick={() => showToast('success', 'Success toast 2', 2000)}>Success Toast 2 Sec</button>
            <button onClick={() => showToast('info', 'Info toast 2', 2000)}>Info Toast 2 Sec</button>
        </div>
    )
}

export default Sonner