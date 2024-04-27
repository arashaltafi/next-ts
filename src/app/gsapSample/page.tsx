"use client"

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const GsapSample = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 5,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            pin.kill();
        };
    }, []);

    return (
        <>
            <header className="h-screen flex items-center justify-center gap-8 text-center">
                <span className="text-7xl text-green-500">Header</span>
            </header>

            <section className="overflow-hidden">
                <div ref={triggerRef}>
                    <div ref={sectionRef} className="h-screen w-[400vw] flex flex-row relative">
                        <div className="h-screen w-screen flex items-center justify-center">
                            <h3 className="uppercase text-4xl text-red-500">Section 1</h3>
                        </div>
                        <div className="h-screen w-screen flex items-center justify-center">
                            <h3 className="uppercase text-4xl text-red-500">Section 2</h3>
                        </div>
                        <div className="h-screen w-screen flex items-center justify-center">
                            <h3 className="uppercase text-4xl text-red-500">Section 3</h3>
                        </div>
                        <div className="h-screen w-screen flex items-center justify-center">
                            <h3 className="uppercase text-4xl text-red-500">Section 4</h3>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="h-screen flex items-center justify-center">
                <span className="text-7xl text-blue-500">Footer</span>
            </footer>
        </>
    )
}

export default GsapSample