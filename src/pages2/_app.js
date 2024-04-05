import './globals.css'

const MyApp = ({ Component, pageProps }) => {
    return <div className='bg-slate-900 text-slate-200 w-full min-h-screen px-16 py-8'>
        <Component {...pageProps} />
    </div>
}
export default MyApp
