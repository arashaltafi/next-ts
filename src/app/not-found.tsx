import { Metadata } from 'next'
import React from 'react'

const NotFound = () => {
  return (
    <div>404 | Custom</div>
  )
}

export default NotFound

export const metaData: Metadata = {
  title: {
    absolute: 'Not Found'
  },
  description: 'Not Found',
}