import React, { useEffect, useState } from 'react'
import UAParser from 'ua-parser-js'

// npm i ua-parser-js
const UaParser = () => {
    const [getResult, setGetResult] = useState()
    const [getBrowser, setGetBrowser] = useState()
    const [getDevice, setGetDevice] = useState()
    const [getEngine, setGetEngine] = useState()
    const [getOS, setGetOS] = useState()
    const [getCPU, setGetCPU] = useState()
    const [getUA, setGetUA] = useState()

    useEffect(() => {
        const parser = new UAParser()
        console.log(parser)
        setGetResult(parser.getResult())
        setGetBrowser(parser.getBrowser())
        setGetDevice(parser.getDevice())
        setGetEngine(parser.getEngine())
        setGetOS(parser.getOS())
        setGetCPU(parser.getCPU())
        setGetUA(parser.getUA())

        console.log('getResult:', parser.getResult())
    }, [])

    return (
        <div className='w-full flex gap-8 flex-col items-center justify-center'>
            <h1 className='text-5xl'>UaParser</h1>

            <p className='text-lg'>
                <span className='font-bold text-xl'>getBrowser: </span>{JSON.stringify(getBrowser)}
            </p>

            <span className='w-full h-px rounded-full bg-white my-8' />

            <p className='text-lg'>
                <span className='font-bold text-xl'>getDevice: </span>{JSON.stringify(getDevice)}
            </p>

            <span className='w-full h-px rounded-full bg-white my-8' />

            <p className='text-lg'>
                <span className='font-bold text-xl'>getEngine: </span>{JSON.stringify(getEngine)}
            </p>

            <span className='w-full h-px rounded-full bg-white my-8' />

            <p className='text-lg'>
                <span className='font-bold text-xl'>getOS: </span>{JSON.stringify(getOS)}
            </p>

            <span className='w-full h-px rounded-full bg-white my-8' />

            <p className='text-lg'>
                <span className='font-bold text-xl'>getCPU: </span>{JSON.stringify(getCPU)}
            </p>

            <span className='w-full h-px rounded-full bg-white my-8' />

            <p className='text-lg'>
                <span className='font-bold text-xl'>getUA: </span>{JSON.stringify(getUA)}
            </p>

            <span className='w-full h-px rounded-full bg-white my-8' />

            <p className='text-lg'>
                <span className='font-bold text-xl'>getResult: </span>{JSON.stringify(getResult)}
            </p>
        </div>
    )
}

export default UaParser