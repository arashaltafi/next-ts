import Image from 'next/image'
import React from 'react'

interface PropsType {
    isAllowed?: boolean
    setIsAllowed: React.Dispatch<React.SetStateAction<boolean>>
}

const CustomRadioButton = ({ isAllowed, setIsAllowed }: PropsType) => {
    return (
        <label className="flex items-center justify-center cursor-pointer">
            <input
                type="radio"
                checked={isAllowed}
                onChange={() => setIsAllowed(!isAllowed)}
                className='hidden'
            />
            {
                isAllowed ? (
                    <Image
                        src={'/radiobutton_selected.svg'}
                        width={24}
                        height={24}
                        alt='checkbox'
                    />
                ) : (
                    <Image
                        src={'/radiobutton_not_selected.svg'}
                        width={24}
                        height={24}
                        alt='checkbox'
                    />
                )
            }
        </label>
    )
}

export default CustomRadioButton