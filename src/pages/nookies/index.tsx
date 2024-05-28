import React from 'react'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

// npm i nookies
const Nookies = () => {
    const cookieName = 'NookiesSample'

    const handleSetCookie = () => {
        setCookie(null, cookieName, 'test-clientSide', {
            maxAge: 30 * 24 * 60 * 60, //1 month
            path: '/',
        })
        alert('Cookie Set!')
    }

    const handleDestroyCookie = () => {
        destroyCookie(null, cookieName)
        alert('Cookie Destroyed!')
    }

    const handleParseCookie = () => {
        const cookies = parseCookies()
        console.log(cookies.NookiesSample)
        alert('Cookie Parsed!')
    }

    return (
        <div className='flex flex-col items-center justify-start gap-8 w-full'>
            <h1 className='text-5xl'>Nookies ClientSide Sample</h1>

            <button
                onClick={handleSetCookie}
                className='mt-20 px-8 py-4 bg-red-500 text-white rounded-lg'
            >
                Set Cookie
            </button>
            <button
                onClick={handleDestroyCookie}
                className='px-8 py-4 bg-yellow-500 text-white rounded-lg'
            >
                Destroy Cookie
            </button>
            <button
                onClick={handleParseCookie}
                className='px-8 py-4 bg-blue-500 text-white rounded-lg'
            >
                Parse Cookie
            </button>
        </div>
    )
}

export default Nookies