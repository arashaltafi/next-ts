import Image from 'next/image'
import React from 'react'

const Checkbox = () => {
    const [isAllowed, setIsAllowed] = React.useState<boolean>(false)

    return (
        <div className='pt-32 w-full h-[80vh] bg-zinc-500'>
            <label className="flex items-center justify-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={isAllowed}
                    onChange={() => setIsAllowed(!isAllowed)}
                    className='hidden'
                />
                {
                    isAllowed ? (
                        <Image
                            src={'/checkbox_checked.svg'}
                            width={24}
                            height={24}
                            alt='checkbox'
                        />
                    ) : (
                        <Image
                            src={'/checkbox_not_checked.svg'}
                            width={24}
                            height={24}
                            alt='checkbox'
                        />
                    )
                }
            </label>
        </div>
    )
}

export default Checkbox