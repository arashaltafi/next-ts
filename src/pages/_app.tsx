import ReduxProvider from '@/lib/provider'
import './globals.css'
import { QueryClient, QueryClientProvider } from "react-query";
import App, { AppContext, AppInitialProps, AppProps } from 'next/app'

type AppOwnProps = { example: string }

const MyApp = ({ Component, pageProps, example }: AppProps & AppOwnProps) => {
    const queryClient = new QueryClient();

    return <div className='bg-slate-900 text-slate-200 w-full min-h-screen px-16 py-8'>
        <ReduxProvider>
            <QueryClientProvider client={queryClient}>
                <p>Data: {example}</p>
                <Component {...pageProps} />
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