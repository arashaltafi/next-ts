import Link from 'next/link';
import React from 'react'

const ParticlesSample = () => {

  return (
    <div className='flex flex-col items-center justify-start gap-12 w-full h-screen py-8'>
      <Link
        href='/particles/sample1'
        className='text-3xl text-pink-500 no-underline hover:text-sky-500'
      >
        Sample 1
      </Link>
      <Link
        href='/particles/sample2'
        className='text-3xl text-pink-500 no-underline hover:text-sky-500'
      >
        Sample 2
      </Link>
      <Link
        href='/particles/sample3'
        className='text-3xl text-pink-500 no-underline hover:text-sky-500'
      >
        Sample 3
      </Link>
    </div>
  );
}

export default ParticlesSample