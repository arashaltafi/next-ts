import { convertMilliSecondToHoursMinute } from '@/utils/Helper'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = () => {
    const maxTime = 12000
    const intervalDuration = 1000

    const [time, setTime] = useState<number>(maxTime)
    const [percentage, setPercentage] = useState<number>(100)
    const router = useRouter()

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => prev - intervalDuration)
        }, intervalDuration)

        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        if (time < 0) return;

        const calculatedPercentage = (time / maxTime) * 100
        setPercentage(calculatedPercentage)
        router.push('/progress?time=' + time)
    }, [time])

    const handleResend = () => {
        setTime(maxTime)
    }

    return (
        <div className='flex flex-col items-center justify-start w-full h-screen gap-16'>
            <h1 className='text-6xl'>Progress Sample</h1>

            <div className='relative'>
                <p className='top-0 bottom-0 left-0 right-0'>123</p>
                <span className='absolute -left-1 right-0 top-2 bottom-0 w-10 h-0.5 bg-red-500 rounded-full -rotate-12' />
            </div>

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