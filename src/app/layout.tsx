import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NextJs 14',
  description: 'Sample NextJs 14 app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 text-slate-200`}>
        <main className='p-8'>
          {children}
        </main>
      </body>
    </html>
  )
}
