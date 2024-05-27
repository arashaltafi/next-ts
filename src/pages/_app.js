import ReduxProvider from '@/lib/provider'
import './globals.css'
import { QueryClient, QueryClientProvider } from "react-query";

const MyApp = ({ Component, pageProps }) => {
    const queryClient = new QueryClient();

    return <div className='bg-slate-900 text-slate-200 w-full min-h-screen px-16 py-8'>
        <ReduxProvider>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </ReduxProvider>
    </div>
}
export default MyApp
