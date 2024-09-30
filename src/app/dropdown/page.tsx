'use client'

import Dropdown from '@/components/DropDown'
import React from 'react'

const DropdownSample = () => {

    const handleSelect = (option: string) => {
        console.log('Selected option:', option);
    }

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-8 p-8'>
            <h1 className='text-5xl'>DropdownSample</h1>

            <Dropdown
                options={['Option 1', 'Option 2', 'Option 3']}
                title='Select an option'
                onSelect={handleSelect}
                className='bg-red-500 hover:bg-red-600'
            />
        </div>
    )
}

export default DropdownSample