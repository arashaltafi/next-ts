import CircularProgress from '@/components/CircularProgress';
import React, { useState } from 'react'

const CircleRange = () => {
    const [percent, setPercent] = useState(75);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="mb-4 text-2xl font-bold">Circular Progress Example</h1>
            <CircularProgress percent={percent} />
            <input
                type="range"
                min={0}
                max={100}
                value={percent}
                onChange={(e) => setPercent(Number(e.target.value))}
                className="mt-6"
            />
        </div>
    );
}

export default CircleRange