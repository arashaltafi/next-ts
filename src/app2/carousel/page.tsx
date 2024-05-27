"use client"

import React, { useState } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'

const CarouselSample = () => {
    const mockItems = [
        {
            id: 'item-1',
            title: 'slide 1'
        },
        {
            id: 'item-2',
            title: 'slide 2'
        },
        {
            id: 'item-3',
            title: 'slide 3'
        },
        {
            id: 'item-4',
            title: 'slide 4'
        }
    ]
    const [currentSlide, setCurrentSlide] = useState(mockItems[0].id)

    const {
        carouselFragment,
        slideToPrevItem, // go back to previous slide
        slideToNextItem, // move to next slide
        useListenToCustomEvent //custom hook to listen event when the slide changes
    } = useSpringCarousel({
        itemsPerSlide: 3, // number of slides per view
        withLoop: true, // will loop
        initialStartingPosition: 'center', // the active slide will be at the center
        gutter: 24, // to add the space between slides
        items: mockItems.map((item) => {
            return {
                ...item,
                renderItem: (
                    <div
                        className={`grid aspect-[2] w-full place-items-center text-2xl text-white transition-all duration-700 rounded-lg ${currentSlide === item.id
                            ? 'z-10 scale-150 bg-sky-600'
                            : 'bg-pink-500'
                            }`}>
                        {item.title}
                    </div>
                )
            }
        })
    })

    useListenToCustomEvent((event: any) => {
        if (event.eventName === 'onSlideStartChange') {
            setCurrentSlide(event?.nextItem?.id)
        }
    })

    return (
        <div className='flex flex-col items-center justify-center gap-8'>
            <h1 className='text-6xl'>CarouselSample</h1>

            <div className="py-20 relative select-none">
                <button
                    onClick={slideToPrevItem}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-full left-[5%] btnSuccess bg-red-500"
                >
                    Preview
                </button>
                <div className="mx-auto w-[80%] overflow-x-clip py-[4%] relative">
                    {carouselFragment}
                </div>
                <button
                    onClick={slideToNextItem}
                    className="absolute top-1/2 -translate-y-1/2 translate-x-full right-[5%] btnSuccess bg-green-500"
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default CarouselSample