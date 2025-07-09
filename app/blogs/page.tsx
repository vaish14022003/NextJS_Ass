
'use client'

import BlogCard from './components/BlogCard'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

export default function BlogsPage() {
    return (
        <main className="w-full min-h-screen bg-white text-[#232536]">
            <HeroSection />
            <BlogCard />
            <Footer />
        </main>
    )
}
