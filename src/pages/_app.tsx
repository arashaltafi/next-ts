import ReduxProvider from '@/lib/provider'
import './globals.css'
import { QueryClient, QueryClientProvider } from "react-query";
import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/Header';
import React from 'react';
import Footer from '@/components/Footer';

enum ComponentEnum {
    HEADER = 'Header',
    FOOTER = 'Footer'
}

type AppOwnProps = { example: string | undefined | ComponentEnum }

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const MyApp = ({ Component, pageProps, example }: AppProps & AppOwnProps) => {
    const queryClient = new QueryClient();

    return <div className={`bg-slate-900 text-slate-200 w-full min-h-screen ${roboto.className}`}>
        <ReduxProvider>
            <QueryClientProvider client={queryClient}>
                {
                    example && (
                        example === ComponentEnum.HEADER ? <Header /> : 
                        example === ComponentEnum.FOOTER ? <Footer /> : 
                        example
                    )
                }
                <Component className='px-16 py-8' {...pageProps} />
                <Script src="/script.js" />
            </QueryClientProvider>
        </ReduxProvider>
    </div>
}
export default MyApp

MyApp.getInitialProps = async (
    context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
    const ctx = await App.getInitialProps(context)

    if (context.router.route === '/') {
        return { ...ctx, example: 'home' }
    } else if (context.router.route === '/dashboard') {
        return { ...ctx, example: ComponentEnum.HEADER }
    } else {
        return { ...ctx, example: undefined }
    }
}