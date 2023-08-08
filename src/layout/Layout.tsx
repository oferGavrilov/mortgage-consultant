import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
      <div>
            <Header />
              {children}
              <Footer />
      </div>
  )
}
