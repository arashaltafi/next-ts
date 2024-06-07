import React, { useState } from 'react'
import Wave from 'react-wavify'

// npm i react-wavify
const WaveSample = () => {
    const [stop, setStop] = useState<boolean>(false)

    return (
        <div className='relative w-full min-h-screen flex flex-col gap-32 items-center justify-start'>
            <h1 className='text-5xl'>Wave Sample</h1>

            <button
                onClick={() => setStop(!stop)}
                className={`${stop ? 'bg-green-500' : 'bg-red-500'} px-8 py-4 rounded-xl`}
            >
                {stop ? 'Start' : 'Stop'}
            </button>
            <Wave
                fill='#f79902'
                paused={stop}
                className='flex absolute bottom-0 left-0 right-0'
                options={{
                    height: 10,
                    amplitude: 30,
                    speed: 0.20,
                    points: 8
                }}
            />
        </div>
    )
}

export default WaveSample