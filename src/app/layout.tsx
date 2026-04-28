import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './globals.css'
import BootstrapClient from '@/components/BootstrapClient'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Reduz.in | Encurtador de URLs',
  description:
    'A alternativa mais completa e acessível para transformar seus URLs em ferramentas de marketing.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  )
}
