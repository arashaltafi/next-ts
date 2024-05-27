import ReduxProvider from '@/lib/provider'
import './globals.css'
import { QueryClient, QueryClientProvider } from "react-query";
import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import Script from 'next/script'

type AppOwnProps = { example: string }

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const MyApp = ({ Component, pageProps, example }: AppProps & AppOwnProps) => {
    const queryClient = new QueryClient();

    return <div className={`bg-slate-900 text-slate-200 w-full min-h-screen px-16 py-8 ${roboto.className}`}>
        <ReduxProvider>
            <QueryClientProvider client={queryClient}>
                <p>Data: {example}</p>
                <Component {...pageProps} />
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

    return { ...ctx, example: 'data' }
}