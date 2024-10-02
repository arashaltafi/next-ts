"use client"

import React, { useRef } from 'react'

const SearchText = () => {
    const paragraph = useRef<any>()

    const searchW = (value: string) => {
        const re = new RegExp(`${value}`, 'gi')

        if (paragraph.current && paragraph.current.innerText && value !== '') {
            paragraph.current.innerHTML = paragraph.current.innerText.replace(re, `<mark>${value}</mark>`)
        } else {
            paragraph.current.innerHTML = paragraph.current.innerText
        }
    }

    return (
        <div
            dir='rtl'
            className='w-full min-h-screen flex flex-col items-center justify-start gap-8 p-8'
        >
            <h1 className='text-5xl'>SearchText</h1>

            <input
                type="text"
                name='text'
                onInput={(e) => searchW(e.currentTarget.value)}
                className='mt-32 bg-white px-8 py-4 text-xl rounded-xl text-black text-center'
            />
            <p
                ref={paragraph}
                className='text-lg'
            >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
        </div>
    )
}

export default SearchText