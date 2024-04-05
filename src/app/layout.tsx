import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'

export const metadata: Metadata = {
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
          {children}
        </main>
      </body>
    </html>
  )
}
