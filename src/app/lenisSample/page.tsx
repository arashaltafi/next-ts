"use client"

import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const LenisSample = () => {
    const targetSection = useRef(null);

    return (
        <div className='h-screen w-full'>
            <section
                className={`tall:pt-20 tall:pb-16 pt-40 pb-24 w-full relative select-none section-container`}
                ref={targetSection}
            >
                
            </section>
        </div>
    )
}

export default LenisSample