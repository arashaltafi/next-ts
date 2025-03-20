import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css';
import ReduxProvider from '@/lib/provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://app.arashaltafi.ir'),
  keywords: ['NextJs', 'NextJs 13', 'NextJs 14'],
  title: {
    default: 'NextJs 14 App',
    template: '%s | NextJs 14 App',
  },
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
              {children}
          </ReduxProvider>
        </main>
      </body>
    </html>
  )
}
