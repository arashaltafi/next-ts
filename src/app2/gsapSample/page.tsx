"use client"

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const GsapSample = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin1 = gsap.fromTo(
            section1Ref.current,
            {
                translateX: 0,
                opacity: 1,
                scale: 1.1,
            },
            {
                scale: 0.5,
                translateX: "-300vw",
                opacity: 0.8,
                ease: "none",
                duration: 5,
                scrollTrigger: {
                    trigger: section1Ref.current,
                    start: "top top",
                    end: "1000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            pin1.kill();
        };
    }, []);

    useEffect(() => {
        const pin2 = gsap.fromTo(
            section2Ref.current,
            {
                opacity: 1,
            },
            {
                opacity: 0.1,
                ease: "none",
                duration: 5,
                scrollTrigger: {
                    trigger: section2Ref.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            pin2.kill();
        };
    }, []);

    return (
        <>
            <header className="h-screen flex items-center justify-center gap-8 text-center">
                <span className="text-7xl text-green-500">Header</span>
            </header>

            <section className="overflow-hidden">
                <div ref={section1Ref} className="h-screen w-[400vw] flex flex-row relative">
                    <div className="h-screen w-screen flex items-center justify-center bg-purple-400">
                        <h3 className="uppercase text-4xl text-red-500">Section 1</h3>
                    </div>
                    <div className="h-screen w-screen flex items-center justify-center bg-purple-500">
                        <h3 className="uppercase text-4xl text-red-500">Section 2</h3>
                    </div>
                    <div className="h-screen w-screen flex items-center justify-center bg-purple-600">
                        <h3 className="uppercase text-4xl text-red-500">Section 3</h3>
                    </div>
                    <div className="h-screen w-screen flex items-center justify-center bg-purple-700">
                        <h3 className="uppercase text-4xl text-red-500">Section 4</h3>
                    </div>
                </div>
            </section>

            <main className="overflow-hidden">
                <div ref={section2Ref} className="h-screen flex items-center justify-center">
                    <span className="text-7xl text-red-500">Main</span>
                </div>
            </main>

            <footer className="h-screen flex items-center justify-center">
                <span className="text-7xl text-blue-500">Footer</span>
            </footer>
        </>
    )
}

export default GsapSample