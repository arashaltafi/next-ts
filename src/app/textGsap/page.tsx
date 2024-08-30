"use client"

import React, { useEffect } from 'react'
import SplitType from "split-type"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const TextGsap = () => {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const splitType = document.querySelector(".about-title")
        const text = new SplitType(splitType as HTMLElement, { types: "chars" })
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: splitType,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
          duration: 1.8,
          opacity: 0.2,
          stagger: 0.5,
        })
      }, [])

    return (
        <div className='w-full min-h-screen flex flex-col gap-32 items-center justify-start'>
            <h1 className='text-5xl mb-64'>TextGsapAnimation</h1>
            <div className='h-80 w-full bg-red-500' />

            <div className="bg-black flex relative items-center justify-center">
                <p className="about-title text-center font-thin lg:text-[4vw] sm:text-[5vw] text-[7.5vw] text-white inline">
                    Hi I&apos;m <strong>Arash</strong> a <strong>fro</strong>ntend
                    developer and <strong>JavaS</strong>cript enthusiast with a{" "}
                    <strong>bach</strong>elor&apos;s <strong>degre</strong>e and over{" "}
                    <strong>4 yea</strong>rs of
                    <strong>expe</strong>rience. I&apos;ve <strong>succes</strong>sfully
                    delivered <strong>hig</strong>h-quality user <strong>int</strong>
                    erface <strong>soluti</strong>ons for <strong>star</strong>tups and{" "}
                    <strong>enterp</strong>rise companies, <strong>gain</strong>ing
                    valuable <strong>experie</strong>nce along the way.
                </p>
            </div>

            <div className='h-80 w-full bg-yellow-500' />
            <div className='h-80 w-full bg-green-500' />
        </div>
    )
}

export default TextGsap