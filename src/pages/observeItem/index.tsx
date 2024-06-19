import React, { useEffect, useRef } from 'react'

const Observe = () => {
    const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = videoRefs.current.indexOf(entry.target as HTMLDivElement);
                        console.log(videoRefs.current[index]?.textContent);
                    }
                });
            },
            {
                threshold: 0.75, // Adjust threshold as needed
            }
        );

        videoRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className='w-full min-h-screen flex flex-col gap-16 items-center justify-start'>
            <h1 className='text-5xl'>Observe</h1>

            {
                Array.from({ length: 20 }, (_, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            videoRefs.current[index] = el;
                        }}
                    >
                        <p>Video {index + 1}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default Observe