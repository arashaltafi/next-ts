"use client"

import { useParams } from 'next/navigation'
import React from 'react'

const Sample4 = () => {

  const params = useParams()
  console.log(params)

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>Sample4</h1>
      <p>
        id: {params.id}
      </p>
      <p>
        name: {params.name}
      </p>
    </div>
  )
}

export default Sample4