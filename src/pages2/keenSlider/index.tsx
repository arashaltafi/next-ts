import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

// https://keen-slider.io/docs
// https://keen-slider.io/examples
// npm i keen-slider
const KeenSlider = () => {
    const [loaded, setLoaded] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: false,
        breakpoints: {
            '(min-width: 500px)': {
                loop: true,
            },
        },
        slides: {
            perView: 1,
            spacing: 10,
        },
        disabled: false,
        drag: true,
        dragSpeed: 1,
        initial: 0,
        mode: "snap",
        created() {
            setLoaded(true)
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
    })

    return (
        <div className='flex flex-col items-center justify-start w-full gap-8'>
            <h1 className='text-5xl'>KeenSlider</h1>

            <div ref={sliderRef} className="keen-slider mt-20">
                <div className="keen-slider__slide bg-red-500 text-xl px-16 py-8 rounded-xl">banner 1</div>
                <div className="keen-slider__slide bg-red-500 text-xl px-16 py-8 rounded-xl">banner 2</div>
                <div className="keen-slider__slide bg-red-500 text-xl px-16 py-8 rounded-xl">banner 3</div>
                <div className="keen-slider__slide bg-red-500 text-xl px-16 py-8 rounded-xl">banner 4</div>
                <div className="keen-slider__slide bg-red-500 text-xl px-16 py-8 rounded-xl">banner 5</div>
                <div className="keen-slider__slide bg-red-500 text-xl px-16 py-8 rounded-xl">banner 6</div>
            </div>

            {loaded && instanceRef.current && (
                <div className='flex flex-row items-center justify-center gap-8'>
                    <div
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.prev()
                        }
                        className='transition-all bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-lg cursor-pointer select-none'
                    >
                        Backward
                    </div>

                    <div
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        }
                        className='transition-all bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg cursor-pointer select-none'
                    >
                        Forward
                    </div>
                </div>
            )}

            {loaded && instanceRef.current && (
                <div className="flex justify-center px-2">
                    { // add "downlevelIteration": true to tsconfig.json
                        [...Array(instanceRef.current.track.details.slides.length).keys()].map((index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(index)
                                }}
                                className={"size-2 bg-red-500 rounded-full m-2 p-2 cursor-pointer" + (currentSlide === index ? " bg-black" : "")}
                            />
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default KeenSlider