
import './globals.css'
import { Inter, Poppins, Plus_Jakarta_Sans } from 'next/font/google'
import Navbar from './components/Navbar' // ✅ Load globally

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '600', '700'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400'],
})

export const metadata = {
  title: 'Car Blog',
  description: 'A blog for car lovers',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${poppins.variable} ${inter.variable}`}>
      <body className="font-sans bg-[#fdfdfd] text-[#232536]">
        <Navbar /> 
        {children}
      </body>
    </html>
  )
}
