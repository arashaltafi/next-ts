'use client'

import ImageSkeleton from '@/components/ImageSkeleton'
import { delay } from '@/utils/Helper'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type ResponseData = {
    name: string
    email: string
    username: string
}

const SkeletonClientSample = () => {
    const [data, setData] = useState<ResponseData[]>([])

    const fetchData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
            cache: 'no-store'
        })
        const response: ResponseData[] = await res.json()
        await new Promise((resolve) => setTimeout(resolve, 2000))
        await delay(2000)
        setData(response)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='flex flex-col gap-8 items-center justify-start w-full min-h-screen'>
            <h1 className='text-5xl font-bold'>Skeleton Sample</h1>
            <ImageSkeleton
                src="https://arashaltafi.ir/Social_Media/story-03.jpg"
                alt="Sample Image"
                skeletonHeight={400}
                skeletonWidth={600}
            />

            {
                data && data.length > 0 ? (
                    <>
                        {
                            data.map((res: any) => (
                                <div className='w-full flex flex-col mt-8 items-center justify-center gap-2'>
                                    <h2 className='text-2xl'><span className='font-bold text-gray-300'>name:</span> {res.name}</h2>
                                    <h3 className='text-xl'><span className='font-bold text-gray-300'>email:</span> {res.email}</h3>
                                    <h4 className='text-lg'><span className='font-bold text-gray-300'>username:</span> {res.username}</h4>
                                    <span className='mt-8 w-full h-px bg-white rounded-full' />
                                </div>
                            ))
                        }
                    </>
                ) : (
                    <Skeleton
                        width={500}
                        height={30}
                        count={10}
                        circle={false}
                        enableAnimation={true}
                    />
                )
            }
        </div>
    )
}

export default SkeletonClientSample