import React, { useState } from 'react'
import axios from 'axios'

// npm i axios
const AxiosSample = () => {
    const [getRes, setGetRes] = useState<{
        name: string, age: number, email: string
    }>()

    const [error, setError] = useState()

    const handleGet1 = () => {
        setGetRes(undefined)
        const url = 'https://arashaltafi.ir/test_200.php'
        axios({
            method: 'get',
            url: url,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            setGetRes(response.data)
        }).catch((error: any) => {
            setError(error.message)
        })
    }

    const handleGet2 = async () => {
        setGetRes(undefined)
        try {
            const url = 'https://arashaltafi.ir/test_200.php'
            const response = await axios.get(url)
            setGetRes(response.data)
        } catch (error: any) {
            setError(error.message)
        }
    }

    return (
        <div className='flex flex-col gap-12 items-center justify-center w-full'>
            <h1 className='text-5xl'>AxiosSample</h1>
            <a
                href='https://github.com/arashaltafi/react-ts/blob/master/src/Components/Axios.tsx'
                target='_blank'
                className='text-blue-400 hover:text-blue-500'
            >
                Full Otional Axios Setting
            </a>

            {
                error && <p>{error}</p>
            }
            {
                getRes && <p>{JSON.stringify(getRes, null, 2)}</p>
            }

            <button
                onClick={handleGet1}
                className='mt-20 text-lg text-white bg-red-500 hover:bg-red-600 rounded-lg px-6 py-4 transition-all'
            >
                Test Get 1
            </button>

            <button
                onClick={handleGet2}
                className='text-lg text-white bg-red-500 hover:bg-red-600 rounded-lg px-6 py-4 transition-all'
            >
                Test Get 2
            </button>
        </div>
    )
}

export default AxiosSample