import Image from 'next/image'
import React from 'react'

const Range = () => {
    return (
        <div dir='rtl' className='max-w-[1280px] mx-auto'>
            <div className="w-full flex gap-4">
                <div className="w-full flex flex-col gap-4">
                    <div className="p-6 rounded-lg border-[0.5px] border-gray-300 flex flex-col gap-6">
                        <h4 className="text-gray900 text-sm leading-7 font-medium">لیست دارایی کل</h4>
                        <div className="flex flex-col gap-6 flex-wrap">
                            <div className="flex gap-2 items-center justify-start">
                                <span className="size-3 bg-[#FF8C22] rounded-full" />
                                <h5 className="text-xs leading-6 font-medium">سهام</h5>
                            </div>
                            <div className="flex gap-2 items-center justify-start">
                                <span className="size-3 bg-[#1EAEB7] rounded-full" />
                                <h5 className="text-xs leading-6 font-medium">بیمه</h5>
                            </div>
                            <div className="flex gap-2 items-center justify-start">
                                <span className="size-3 bg-[#EBC749] rounded-full" />
                                <h5 className="text-xs leading-6 font-medium">صندوق</h5>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 rounded-lg border-[0.5px] border-gray300 flex flex-col gap-8">
                        <h4 className="text-gray900 text-sm leading-7 font-medium">از هر دارایی چند درصد توثیق شده است؟</h4>
                        <div className="w-full flex gap-8 items-center justify-center">
                            <div className="w-full flex flex-col items-center justify-center gap-3">
                                <div className="relative">
                                    <input
                                        type="range"
                                        className="range-panel"
                                        value={50}
                                        min={0}
                                        max={100}
                                    />
                                    <div className="absolute left-0 top-0 h-5 bg-blue-700 pointer-events-none rounded-lg"
                                        style={{
                                            width: `${50}%`,
                                        }}
                                    />
                                </div>
                                <div className="w-full flex flex-col items-center justify-center">
                                    <p className="text-xs leading-6 font-semibold">{50}%</p>
                                    <p className="text-xs leading-6 font-medium">بیمه</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-center justify-center gap-3">
                                <div className="relative">
                                    <input
                                        type="range"
                                        className="range-panel"
                                        value={50}
                                        min={0}
                                        max={100}
                                    />
                                    <div className="absolute left-0 top-0 h-5 bg-blue-700 pointer-events-none rounded-lg"
                                        style={{
                                            width: `${50}%`,
                                        }}
                                    />
                                </div>
                                <div className="w-full flex flex-col items-center justify-center">
                                    <p className="text-xs leading-6 font-semibold">{50}%</p>
                                    <p className="text-xs leading-6 font-medium">صندوق</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-center justify-center gap-3">
                                <div className="relative">
                                    <input
                                        type="range"
                                        className="range-panel"
                                        value={50}
                                        min={0}
                                        max={100}
                                    />
                                    <div className="absolute left-0 top-0 h-5 bg-blue-700 pointer-events-none rounded-lg"
                                        style={{
                                            width: `${50}%`,
                                        }}
                                    />
                                </div>
                                <div className="w-full flex flex-col items-center justify-center">
                                    <p className="text-xs leading-6 font-semibold">{50}%</p>
                                    <p className="text-xs leading-6 font-medium">سهام</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-start justify-between p-6 rounded-lg border-[0.5px] border-gray300">
                    <div className="flex flex-col">
                        <h4 className="text-gray900 text-sm leading-7 font-medium">نسبت دارایی‌های توثیق شده به دارایی کل</h4>
                        <h6 className="mt-6 text-xs leading-6 font-normal text-gray700">دارایی کل</h6>
                        <h4 className="text-xs leading-6 font-semibold text-gray900">123465789</h4>
                        <div className="mt-0.5 flex gap-1.5 ms-3">
                            <span className="w-px bg-gray-300" />
                            <div className="flex flex-col">
                                <div className="flex gap-1 text-gray500 text-xs leading-6 font-normal">
                                    <h5>در دسترس:</h5>
                                    <h5>{50}%</h5>
                                    <h5>123456789</h5>
                                </div>
                                <div className="flex gap-1 text-brand700 text-xs leading-6 font-normal">
                                    <h5>توثیق شده:</h5>
                                    <h5>{50}%</h5>
                                    <h5>123456789</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-20 h-full bg-gray-100 rounded-xl border border-gray900 flex items-center justify-center overflow-hidden">
                        <input
                            type="range"
                            className="range-panel-vertical"
                        />
                        {
                            <div className="absolute left-0 bottom-0 flex items-center justify-center w-full h-full bg-blue-700 pointer-events-none rounded-lg"
                                style={{
                                    height: `${50}%`,
                                }}
                            >
                                <Image
                                    className="absolute -top-1 z-10 shake-animation"
                                    src={'/wave-2.svg'}
                                    alt='wave1'
                                    width={100}
                                    height={14}
                                />
                                <Image
                                    className="absolute -top-1.5 z-10 wave-animation"
                                    src={'/wave-1.svg'}
                                    alt='wave1'
                                    width={100}
                                    height={14}
                                />
                                <h4 className="text-white text-xs leading-6 font-semibold z-10">{50}%</h4>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Range