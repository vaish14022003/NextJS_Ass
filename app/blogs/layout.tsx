

import '../globals.css'
import { Inter, Poppins, Plus_Jakarta_Sans } from 'next/font/google'

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

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${jakarta.variable} ${poppins.variable} ${inter.variable} font-sans bg-[#fdfdfd] text-[#232536]`}>
            {children}
        </div>
    )
}
