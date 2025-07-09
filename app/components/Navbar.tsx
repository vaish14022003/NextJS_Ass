
// 'use client'

// import Link from 'next/link'
// import { useState } from 'react'
// import { Menu, X } from 'lucide-react'
// import { usePathname, useRouter } from 'next/navigation'

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false)
//     const [searchTerm, setSearchTerm] = useState('')
//     const router = useRouter()
//     const pathname = usePathname()

//     const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         if (searchTerm.trim()) {
//             router.push(`/blogs?search=${encodeURIComponent(searchTerm)}`)
//             setIsOpen(false)
//         }
//     }

//     return (
//         <nav className="w-full bg-[#232536] text-white">
//             <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between">
//                 {/* LOGO */}
//                 <div className="flex items-center gap-2">
//                     <div className="w-8 h-8 rounded-full bg-white"></div>
//                     <span className="text-white text-sm font-normal">LOGO</span>
//                 </div>

//                 {/* Desktop Nav + Search */}
//                 <div className="hidden md:flex items-center gap-6">
//                     <div className="flex gap-6 items-center text-base">
//                         <Link href="/" className="font-bold hover:underline">Home</Link>
//                         <Link href="/blogs" className="font-bold hover:underline">Blogs</Link>
//                         <Link href="/about" className="hover:underline">About</Link>
//                         <Link href="/contact" className="hover:underline">Contact Us</Link>
//                     </div>

//                     {/* Search Bar */}
//                     <form onSubmit={handleSearch} className="relative">
//                         <input
//                             type="text"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             placeholder="Search..."
//                             className="px-3 py-1 rounded-md bg-white text-black text-sm outline-none w-40 sm:w-52"
//                         />
//                         <button
//                             type="submit"
//                             className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 text-sm"
//                         >
//                             🔍
//                         </button>
//                     </form>
//                 </div>

//                 {/* Subscribe Button */}
//                 <button className="hidden md:inline bg-white text-[#232536] px-4 py-2 rounded-md text-sm font-bold">
//                     Subscribe
//                 </button>

//                 {/* Mobile Menu Toggle */}
//                 <button
//                     className="md:hidden"
//                     onClick={() => setIsOpen(!isOpen)}
//                     aria-label="Toggle Menu"
//                 >
//                     {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <div className="md:hidden bg-[#2B2C34] px-6 py-4 space-y-4 text-sm">
//                     {/* Mobile Search Bar */}
//                     <form onSubmit={handleSearch} className="w-full">
//                         <input
//                             type="text"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             placeholder="Search..."
//                             className="w-full px-3 py-2 rounded-md bg-white text-black outline-none"
//                         />
//                     </form>

//                     <Link href="/" onClick={() => setIsOpen(false)} className="block font-bold">Home</Link>
//                     <Link href="/blogs" onClick={() => setIsOpen(false)} className="block font-bold">Blogs</Link>
//                     <Link href="/about" onClick={() => setIsOpen(false)} className="block">About</Link>
//                     <Link href="/contact" onClick={() => setIsOpen(false)} className="block">Contact Us</Link>

//                     <button className="mt-2 w-full bg-white text-[#232536] px-4 py-2 rounded-md font-bold">
//                         Subscribe
//                     </button>
//                 </div>
//             )}
//         </nav>
//     )
// }
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter()
    //const pathname = usePathname()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (searchTerm.trim()) {
            router.push(`/blogs?search=${encodeURIComponent(searchTerm)}`)
            setIsOpen(false)
        }
    }

    return (
        <nav className="w-full bg-[#232536] text-white">
            <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between">
                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white"></div>
                    <span className="text-white text-sm font-normal">LOGO</span>
                </div>

                {/* Desktop Nav + Search */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex gap-6 items-center text-base">
                        <Link href="/" className="font-bold hover:underline">Home</Link>
                        <Link href="/blogs" className="font-bold hover:underline">Blogs</Link>
                        <Link href="/about" className="hover:underline">About</Link>
                        <Link href="/contact" className="hover:underline">Contact Us</Link>
                    </div>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="relative">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search..."
                            className="px-3 py-1 rounded-md bg-white text-black text-sm outline-none w-40 sm:w-52"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 text-sm"
                        >
                            🔍
                        </button>
                    </form>
                </div>

                {/* Subscribe Button */}
                <button className="hidden md:inline bg-white text-[#232536] px-4 py-2 rounded-md text-sm font-bold">
                    Subscribe
                </button>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#2B2C34] px-6 py-4 space-y-4 text-sm">
                    {/* Mobile Search Bar */}
                    <form onSubmit={handleSearch} className="w-full">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search..."
                            className="w-full px-3 py-2 rounded-md bg-white text-black outline-none"
                        />
                    </form>

                    <Link href="/" onClick={() => setIsOpen(false)} className="block font-bold">Home</Link>
                    <Link href="/blogs" onClick={() => setIsOpen(false)} className="block font-bold">Blogs</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="block">About</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="block">Contact Us</Link>

                    <button className="mt-2 w-full bg-white text-[#232536] px-4 py-2 rounded-md font-bold">
                        Subscribe
                    </button>
                </div>
            )}
        </nav>
    )
}