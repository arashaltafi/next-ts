import Image from 'next/image'
import React from 'react'

interface PropsType {
    isAllowed?: boolean
    setIsAllowed: React.Dispatch<React.SetStateAction<boolean>>
}

const CustomCheckBox = (props: PropsType) => {
    return (
        <label className="flex items-center justify-center cursor-pointer">
            <input
                type="checkbox"
                checked={props.isAllowed}
                onChange={() => props.setIsAllowed(!props.isAllowed)}
                className='hidden'
            />
            {
                props.isAllowed ? (
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
    )
}

export default CustomCheckBox