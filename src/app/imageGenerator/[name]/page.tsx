import Image from 'next/image'
import React from 'react'

const ImageGenerator = ({ params }: { params: { name: string } }) => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-16 p-16'>
            <Image
                width={800}
                height={400}
                src={`http://localhost:3000/api/imageGenerator/${params.name}`}
                alt={params.name}
            />
        </div>
    )
}

export default ImageGenerator