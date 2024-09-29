import Register from '@/actions/Register'
import React from 'react'

const ServerActionSample = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-16 p-8'>
            <h1>ServerActionSample</h1>

            <form
                action={Register}
                className='flex flex-col items-center justify-center gap-16'
            >
                <div className='w-full flex gap-8 items-center justify-center'>
                    <label htmlFor="name">Name:</label>
                    <input
                        className='px-8 py-4 text-center text-lg rounded-xl bg-white text-black border border-solid border-rose-500'
                        type="text"
                        name="name"
                        id='name'
                    />
                </div>

                <div className='w-full flex gap-8 items-center justify-center'>
                    <label htmlFor="family">Family:</label>
                    <input
                        className='px-8 py-4 text-center text-lg rounded-xl bg-white text-black border border-solid border-rose-500'
                        type="text"
                        name="family"
                        id='family'
                    />
                </div>

                <div className='w-full flex gap-8 items-center justify-center'>
                    <label htmlFor="email">Email:</label>
                    <input
                        className='px-8 py-4 text-center text-lg rounded-xl bg-white text-black border border-solid border-rose-500'
                        type="email"
                        name="email"
                        id='email'
                    />
                </div>

                <div className='w-full flex gap-8 items-center justify-center'>
                    <label htmlFor="password">Password:</label>
                    <input
                        className='px-8 py-4 text-center text-lg rounded-xl bg-white text-black border border-solid border-rose-500'
                        type="password"
                        name="password"
                        id="password"
                    />
                </div>

                <div className='w-full flex gap-8 items-center justify-center'>
                    <label htmlFor="confirm_password">Confirm Password:</label>
                    <input
                        className='px-8 py-4 text-center text-lg rounded-xl bg-white text-black border border-solid border-rose-500'
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                    />
                </div>

                <input type="hidden" name="token" value={'token_value'} />

                <div className='w-full flex gap-8 items-center justify-center'>
                    <input className='px-8 py-4 rounded-xl text-white bg-green-500 hover:bg-green-600 active:bg-green-400 transition-all duration-150' type="submit" value="Register" />
                    <input className='px-8 py-4 rounded-xl text-white bg-red-500 hover:bg-red-600 active:bg-red-400 transition-all duration-150' type="reset" value="cancel" />
                </div>
            </form>
        </div>
    )
}

export default ServerActionSample