import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

export const metadata: Metadata = {
  title: 'NextJs 14',
  description: 'Sample NextJs 14 app',
}

const vazirMediumFont = localFont({
  src: '../public/fonts/Vazirmatn-Medium.ttf',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 text-slate-200 ${vazirMediumFont.className}`}>
        <main className='p-8'>
          {children}
        </main>
      </body>
    </html>
  )
}
