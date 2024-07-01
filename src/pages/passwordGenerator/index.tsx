import React, { useState } from 'react'

const PasswordGenerator = () => {
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const generatePassword1 = () => {
        const password = Math.random().toString(36).slice(2)
        return password
    }

    const generatePassword2 = (length: number) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    }

    const createPassword = () => {
        setPassword1(generatePassword1())
        setPassword2(generatePassword2(40))
    }

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-16'>
            <h1 className='text-5xl'>PasswordGenerator</h1>

            <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={createPassword}
            >
                Generate
            </button>

            <p>password1: {password1}</p>
            <p>password2: {password2}</p>
        </div>
    )
}

export default PasswordGenerator