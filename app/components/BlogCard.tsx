
'use client'

export default function BlogCard() {
    const blogs = [
        {
            title: 'A Review of Cars with Advanced Infotainment Systems',
            date: 'Jan 10, 2024 ∙ 3 min read',
            author: 'Dasteen',
            image: 'https://images.unsplash.com/photo-1549921296-3c6b694b69a9',
        },
        {
            title: 'A Deep Dive into Sports Cars',
            date: 'Jan 10, 2024 ∙ 3 min read',
            author: 'Dasteen',
            image: 'https://images.unsplash.com/photo-1609621838510-0d27d373dece',
        },
        {
            title: 'Reviewing Cars with the Best Resale Value',
            date: 'Jan 10, 2024 ∙ 3 min read',
            author: 'Dasteen',
            image: 'https://images.unsplash.com/photo-1605555371416-7e58eecdce99',
        },
        {
            title: 'Electric Cars & New Technology Trends',
            date: 'Jan 10, 2024 ∙ 3 min read',
            author: 'Dasteen',
            image: 'https://images.unsplash.com/photo-1616091093715-18041c24b7b4',
        },
    ]

    return (
        <section className="w-full px-4 sm:px-6 md:px-10 py-16 bg-white">
            {/* Heading */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-6">
                <h2 className="text-2xl font-bold text-[#232536]">New Technology</h2>
                <a href="#" className="text-sm font-bold text-[#232536] hover:underline">See All</a>
            </div>
            <div className="border-t-2 border-[#232536] w-28 sm:w-1/5 mb-10" />

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {blogs.map((blog, idx) => (
                    <div
                        key={idx}
                        className="bg-[#F4F0F8] rounded-xl overflow-hidden flex flex-col justify-between"
                    >
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-52 sm:h-48 md:h-52 lg:h-56 object-cover rounded-t-xl"
                        />
                        <div className="p-4 flex flex-col justify-between flex-1">
                            <h3 className="text-lg font-bold text-[#2B2C34] mb-2">{blog.title}</h3>
                            <p className="text-sm text-[#2B2C34] mb-1">{blog.date}</p>
                            <div className="flex items-center gap-2 mt-auto">
                                <div className="w-6 h-6 rounded-full bg-[#702727]" />
                                <span className="text-sm font-semibold text-[#2B2C34]">{blog.author}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
