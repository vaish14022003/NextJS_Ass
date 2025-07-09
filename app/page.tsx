
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import BlogSection from './components/BlogSection'
import NewTechnologySection from './components/NewTechnologySection'
import CategorySection from './components/CategorySection'
import TestimonialSection from './components/TestimonialSection'
import BlogCard from './components/BlogCard'

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <BlogSection />
      <NewTechnologySection />
      <CategorySection />
      <TestimonialSection />
      <BlogCard/>
      <Footer/>
    </>
  )
}
