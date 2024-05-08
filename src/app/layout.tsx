import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css';
import ReduxProvider from '@/lib/provider';
import NextAuthProvider from '@/lib/NextAuthProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://app.arashaltafi.ir'),
  keywords: ['NextJs', 'NextJs 13', 'NextJs 14'],
  title: 'NextJs 14',
  description: 'Sample NextJs 14 app',
}

const vazirFont = localFont({
  src: '../../public/fonts/Vazirmatn-Medium.ttf'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 text-slate-200 ${vazirFont.className}`}>
        <main className='px-8 py-6'>
          <ReduxProvider>
            <NextAuthProvider>
              {children}
            </NextAuthProvider>
          </ReduxProvider>
        </main>
      </body>
    </html>
  )
}
