import { convertMilliSecondToHoursMinute } from '@/utils/Helper'
import React, { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = () => {
    const maxTime = 12000
    const intervalDuration = 1000

    const [time, setTime] = useState<number>(maxTime)
    const [percentage, setPercentage] = useState<number>(100)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => prev - intervalDuration)
        }, intervalDuration)

        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        const calculatedPercentage = (time / maxTime) * 100
        setPercentage(calculatedPercentage)
    }, [time])

    const handleResend = () => {
        setTime(maxTime)
    }

    return (
        <div className='flex flex-col items-center justify-start w-full h-screen gap-16'>
            <h1 className='text-6xl'>Progress Sample</h1>

            <h2>
                {
                    time > 0 ?
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage.toFixed(2)}%`}
                            strokeWidth={5}
                            maxValue={100}
                            minValue={0}
                        /> :
                        <button
                            onClick={handleResend}
                            className='text-2xl text-red-500'>
                            reSend
                        </button>
                }
            </h2>
            <h4 className='text-3xl text-sky-500'>
                {convertMilliSecondToHoursMinute(time, false, true, true)}
            </h4>
        </div>
    )
}

export default Progress