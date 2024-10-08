'use client'

import React, { useEffect, useState } from 'react';

interface ImageSkeletonProps {
    src: string,
    alt: string,
    skeletonHeight?: string | number,
    skeletonWidth?: string | number,
};

const ImageSkeleton = ({
    src,
    alt,
    skeletonHeight = '200px',
    skeletonWidth = '200px',
}: ImageSkeletonProps) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoading(false);
    }, [src]);

    return (
        <div style={{ position: 'relative', width: skeletonWidth, height: skeletonHeight }}>
            {
                loading ? (
                    <div
                        className={`skeleton`}
                        style={{
                            height: skeletonHeight,
                            width: skeletonWidth,
                            borderRadius: '8px',
                        }}
                    />
                ) : (
                    <img
                        src={src}
                        alt={alt}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'fill',
                            borderRadius: '8px',
                        }}
                    />
                )
            }
        </div>
    );
};

export default ImageSkeleton;