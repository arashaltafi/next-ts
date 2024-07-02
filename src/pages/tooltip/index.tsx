import TooltipComponent from '@/components/TooltipComponent'
import React from 'react'

const Tooltip = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center gap-16'>
            <h1 className='text-5xl'>Tooltip Sample</h1>

            <TooltipComponent content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'>
                <button className='px-8 py-4 bg-red-500 text-white rounded-lg'>
                    Hover Me Show Tooltip
                </button>
            </TooltipComponent>
        </div>
    )
}

export default Tooltip