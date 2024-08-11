import React, { useState } from 'react'
import { Num2persian, persianCharToEnglishNumber, persianStringToEnglishString } from 'nums2persian';

// npm i nums2persian
const Nums2PersianSample = () => {
    const [nums2Persian, setNums2Persian] = useState<string>('');
    const [persianCharToEnglish, setPersianCharToEnglish] = useState<string>('');
    const [persianCharToEnglish2, setPersianCharToEnglish2] = useState<string>('');

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-8'>
            <h1 className='text-5xl'>Nums2Persian</h1>

            <input
                type="text"
                className='mt-16 w-1/3 px-6 py-4 bg-slate-500 text-white placeholder:text-slate-300 rounded-lg border-1 border-white border-solid'
                placeholder='Enter Number ...'
                value={nums2Persian}
                onChange={(e) => setNums2Persian(e.target.value)}
            />
            <h3>Nums2Persian: {Num2persian(nums2Persian)}</h3>

            <input
                type="text"
                className='mt-16 w-1/3 px-6 py-4 bg-slate-500 text-white placeholder:text-slate-300 rounded-lg border-1 border-white border-solid'
                placeholder='Enter Number ...'
                value={persianCharToEnglish}
                onChange={(e) => setPersianCharToEnglish(e.target.value)}
            />
            <h3>persianCharToEnglishNumber: {persianCharToEnglishNumber(persianCharToEnglish)}</h3>


            <input
                type="text"
                className='mt-16 w-1/3 px-6 py-4 bg-slate-500 text-white placeholder:text-slate-300 rounded-lg border-1 border-white border-solid'
                placeholder='Enter Number ...'
                value={persianCharToEnglish2}
                onChange={(e) => setPersianCharToEnglish2(e.target.value)}
            />
            <h3>persianStringToEnglishString: {persianStringToEnglishString(persianCharToEnglish2)}</h3>
        </div>
    )
}

export default Nums2PersianSample