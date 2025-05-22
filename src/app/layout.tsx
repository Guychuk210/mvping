import './globals.css'
import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'

// Initialize the Hebrew font with all weights
const heebo = Heebo({ 
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'גיא לוי | פיתוח אפליקציות MVP',
  description: 'בניית אפליקציות מובייל ואתרים מותאמים ליזמים צעירים - מהר, בתקציב נוח ובשקיפות מלאה',
  keywords: 'פיתוח אפליקציות, MVP, מובייל, יזמים צעירים, סטארטאפ, פיתוח מהיר',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
