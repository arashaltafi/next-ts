import React from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const index = () => {

  const startProgress = () => {
    NProgress.start()
  }

  const stopProgress = () => {
    NProgress.done()
  }

  const AddProgress = () => {
    NProgress.inc()
  }

  const SetProgress = () => {
    NProgress.set(0.6)
  }

  return (
    <div className='flex flex-col items-center justify-start gap-8 w-full'>
      <h1 className='text-5xl'>NProgress Sample</h1>

      <button
        onClick={startProgress}
        className='mt-20 px-8 py-4 bg-red-500 text-white rounded-lg'
      >
        Start Progress
      </button>
      <button
        onClick={stopProgress}
        className='px-8 py-4 bg-yellow-500 text-white rounded-lg'
      >
        Stop Progress
      </button>
      <button
        onClick={AddProgress}
        className='px-8 py-4 bg-blue-500 text-white rounded-lg'
      >
        Add Progress
      </button>
      <button
        onClick={SetProgress}
        className='px-8 py-4 bg-green-500 text-white rounded-lg'
      >
        Set Progress
      </button>
    </div>
  )
}

export default index