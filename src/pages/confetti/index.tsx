import React from 'react'
import confetti from 'canvas-confetti'

// npm i canvas-confetti
// npm i --save-dev @types/canvas-confetti
// https://www.kirilv.com/canvas-confetti/
const Confetti = () => {

    const handleConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            zIndex: 9999,
            colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
            shapes: ["square", "circle", "star"],
            scalar: 1.5,
            drift: 0.5,
            gravity: 1,
            ticks: 100,
        })
    }

    return (
        <div className='w-full min-h-screen flex flex-col gap-16 items-center justify-start'>
            <h1 className='text-5xl'>Confetti Sample</h1>

            <button
                onClick={() => handleConfetti()}
                className='mt-20 px-8 py-4 bg-red-500 text-white rounded-lg'
            >
                Confetti
            </button>
        </div>
    )
}

export default Confetti