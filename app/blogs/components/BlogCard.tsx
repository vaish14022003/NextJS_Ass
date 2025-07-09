
'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function BlogCard() {
    const router = useRouter()

    const blogs = [
        {
            id: 1,
            title: 'A Review of Cars with Advanced Infotainment Systems',
            author: 'Dasteen',
            date: 'Jan 10, 2024',
            readTime: '3 min read',
            avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
            image: 'car1.5.jpg',
            content: 'Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.',
        },
        {
            id: 2,
            title: 'Electric Cars: What to Expect in 2025',
            author: 'Aarav Singh',
            date: 'Feb 2, 2024',
            readTime: '4 min read',
            avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
            image: 'car1.6.jpg',
            content: 'Electric vehicles are taking over the world, and 2025 promises to be a major year. We’ll explore the models to look out for and how charging infrastructure is improving.',
        },
        {
            id: 3,
            title: 'Top 10 SUVs for Indian Roads in 2024',
            author: 'Ritika Mehra',
            date: 'Mar 18, 2024',
            readTime: '5 min read',
            avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
            image: 'car1.7.jpg',
            content: 'Indian roads need reliable and rugged SUVs. Here’s a curated list of the best performing SUVs that offer style, power, and comfort.',
        },
    ]

    return (
        <section className="w-full px-4 sm:px-6 pt-28 pb-16 bg-white">
            {/* All Posts Heading */}
            <div className="mb-16 text-center sm:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#232536] leading-tight tracking-tight">
                    All Posts
                </h2>
                <hr className="w-full sm:w-[90%] max-w-5xl border border-[#6D6E76] opacity-30 mt-3" />
            </div>

            {/* All Articles */}
            <div className="space-y-14">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="flex flex-col lg:flex-row gap-6 mx-auto max-w-6xl"
                    >
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full lg:w-1/2 h-64 lg:h-[350px] object-cover rounded-xl"
                        />
                        <div className="flex flex-col justify-between w-full lg:w-1/2">
                            <div>
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={blog.avatar}
                                        alt="author avatar"
                                        width={24}
                                        height={24}
                                        className="rounded-full"
                                    />
                                    <span className="text-xs font-semibold text-[#2B2C34] uppercase">
                                        {blog.author}
                                    </span>
                                </div>
                                <p className="text-[10px] text-[#2B2C34] capitalize mt-1">
                                    {blog.date} ∙ {blog.readTime}
                                </p>
                                <h3 className="text-xl sm:text-2xl font-bold text-[#232536] mt-4 leading-tight capitalize">
                                    {blog.title}
                                </h3>
                                <p className="text-sm sm:text-base text-[#232536] mt-4 capitalize leading-[24px]">
                                    {blog.content.slice(0, 200)}...
                                </p>
                            </div>
                            <button
                                onClick={() => router.push(`/blogs/${blog.id}`)}
                                className="mt-6 w-fit bg-[#FF5959] text-white px-4 py-2 rounded font-bold text-sm hover:bg-[#e24b4b] transition"
                            >
                                Read full article...
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
