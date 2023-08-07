import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Instagram Clone',
  description: 'Instagram Clone App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {/* Header */}
        
        {children}
        </body>
    </html>
  )
}
