import React from 'react'
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const I18Next = () => {
    const { t, i18n } = useTranslation()

    const changeLang = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start'>
            <h1>{t('welcome')}</h1>
            <p>{t('description')}</p>
            <p>{t('test')}</p>

            <div className='mt-16 w-full flex flex-row gap-8 items-center justify-center'>
                <button className='bg-red-500 rounded-xl px-8 py-4' onClick={() => changeLang('en')}>English</button>
                <button className='bg-green-500 rounded-xl px-8 py-4' onClick={() => changeLang('fa')}>فارسی</button>
            </div>
        </div>
    )
}

export default I18Next

// ssg
// export const getStaticProps: GetStaticProps = async ({ locale }) => ({
//     props: {
//         ...(await serverSideTranslations(locale ?? 'en')),
//     },
// });

// ssr
export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en')),
    },
})