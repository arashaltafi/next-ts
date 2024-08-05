import React from 'react'
import Image from 'next/image'

const RadioButton = () => {
    const [isAllowed1, setIsAllowed1] = React.useState<boolean>(false)
    const [isAllowed2, setIsAllowed2] = React.useState<boolean>(false)

    return (
        <div className='pt-32 w-full h-[80vh] bg-zinc-500 flex flex-col gap-8'>
            <label className="flex items-center justify-center cursor-pointer">
                <input
                    type="radio"
                    checked={isAllowed1}
                    onChange={() => setIsAllowed1(!isAllowed1)}
                    className='hidden'
                />
                {
                    isAllowed1 ? (
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

            <label className="flex items-center justify-center cursor-pointer">
                <input
                    type="radio"
                    checked={isAllowed2}
                    onChange={() => setIsAllowed2(!isAllowed2)}
                    className='hidden'
                />
                {
                    isAllowed2 ? (
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
        </div>
    )
}

export default RadioButton