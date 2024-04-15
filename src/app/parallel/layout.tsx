import React from 'react'

const Layout = ({ children, test1, test2 }: any) => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start gap-8'>
      {children}
      <div className='w-full flex flex-row items-center justify-between gap-8'>
        {test1}
        {test2}
      </div>
    </div>
  )
}

export default Layout