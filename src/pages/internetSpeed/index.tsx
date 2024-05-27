import React, { useEffect, useState } from 'react'

const SpeedTestSample = () => {
    const [speed, setSpeed] = useState<string>('');

    useEffect(() => {
        const checkSpeed = async () => {
            try {
                const startTime = performance.now();
                const response = await fetch('https://dl2.soft98.ir/soft/g/Google.Chrome.124.0.6367.92.x64.zip'); // URL to a large file
                const endTime = performance.now();
                const fileSize = response.headers.get('content-length');
                if (!fileSize) {
                    throw new Error('Content-Length header not found');
                }
                const downloadTime = endTime - startTime;
                const speedMbps = (parseInt(fileSize) / downloadTime / 1024 / 1024) * 8; // Convert bytes/ms to Mbps
                setSpeed(speedMbps.toFixed(2) + ' Mbps');
            } catch (error) {
                console.error('Error fetching speed:', error);
                setSpeed('Error fetching speed');
            }
        }

        checkSpeed()
    }, [])

    return (
        <div className='flex flex-col items-center justify-start w-full h-screen gap-16'>
            <h1>Internet Speed</h1>
            <p>{speed}</p>
        </div>
    )
}

export default SpeedTestSample