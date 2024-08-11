"use client"

import React, { useState } from 'react'
import Confetti from 'react-dom-confetti';

const ConfettiSample = () => {
    const [active, setActive] = useState(false)

    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "10px",
        height: "10px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    return (
        <div className='w-full h-screen flex flex-col items-center justify-start gap-8 overflow-hidden'>
            <h1 className='text-6xl'>ConfettiSample</h1>

            <button
                className='bg-red-500 hover:bg-red-600 text-white rounded-lg px-6 py-3 transition-all'
                onClick={() => setActive(!active)}
            >
                show confetti
            </button>

            <Confetti active={active} config={config} />
        </div>
    )
}

export default ConfettiSample