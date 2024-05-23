import React from 'react'

const Google2 = () => {
    return (
        <div className='w-full min-h-screen flex flex-col gap-16 items-center justify-start'>
            <h1 className='text-6xl'>Google iframe</h1>

            <div className='flex flex-col md:flex-row flex-wrap gap-8 items-center justify-center w-full'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d817.8432056543464!2d51.39181764720684!3d35.70092219609175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2sde!4v1716446016385!5m2!1sfa!2sde"
                    width="600"
                    height="450"
                    className='rounded-xl'
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy='no-referrer-when-downgrade' />

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207344.07421686477!2d51.5121238144783!3d35.707740685694496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2z2KrZh9ix2KfZhtiMINin2LPYqtin2YYg2KrZh9ix2KfZhtiMINin24zYsdin2YY!5e0!3m2!1sfa!2sde!4v1716446571975!5m2!1sfa!2sde"
                    width="600"
                    height="450"
                    className='rounded-xl'
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy='no-referrer-when-downgrade' />


                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13878843.813933827!2d64.29084446813144!3d31.868821395874456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef7ec2ec16b1df1%3A0x40b095d39e51face!2z2KfbjNix2KfZhg!5e0!3m2!1sfa!2sde!4v1716446668628!5m2!1sfa!2sde"
                    width="800"
                    height="600"
                    className='rounded-xl'
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy='no-referrer-when-downgrade' />
            </div>

        </div>
    )
}

export default Google2