
'use client'

export default function NewTechnologySection() {
    const blogs = [
        {
            title: 'A Review of Cars with Advanced Infotainment Systems',
            author: 'Dasteen',
            date: 'Jan 10, 2024',
            time: '3 min read',
            image: '/car3.jpg',
        },
        {
            title: 'A Deep Dive into Sports Cars',
            author: 'Dasteen',
            date: 'Jan 10, 2024',
            time: '3 min read',
            image: '/car4.jpg',
        },
        {
            title: 'Reviewing Cars with the Best Resale Value',
            author: 'Dasteen',
            date: 'Jan 10, 2024',
            time: '3 min read',
            image: '/car5.jpg',
        },
        {
            title: 'Electric Cars Changing the Industry',
            author: 'Dasteen',
            date: 'Jan 10, 2024',
            time: '3 min read',
            image: '/car6.jpg',
        },
    ]

    return (
        <section className="px-6 md:px-16 py-20 bg-white">
            {/* Heading */}
            <div className="flex justify-between items-center mb-10 flex-wrap gap-y-4">
                <div className="flex items-center gap-4">
                    <span className="text-[#232536] font-bold text-2xl">New Technology</span>
                    <div className="w-12 border-t-2 border-[#232536] mt-1"></div>
                </div>
                <a href="#" className="text-sm font-bold text-[#232536] hover:underline">See All</a>
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className="bg-[#F4F0F8] rounded-[13px] overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Image */}
                        <div
                            className="w-full h-[180px] bg-cover bg-center rounded-t-[13px]"
                            style={{ backgroundImage: `url(${blog.image})` }}
                        />

                        {/* Content */}
                        <div className="p-4 flex flex-col justify-between flex-grow gap-2">
                            <h3 className="font-bold text-[18px] text-[#2B2C34] leading-[23px] capitalize">
                                {blog.title}
                            </h3>

                            {/* Author with Dynamic Avatar */}
                            <div className="flex items-center gap-2 text-[#2B2C34] text-sm font-semibold mt-2">
                                <img
                                    src={`https://i.pravatar.cc/40?u=${index}`}
                                    alt={`${blog.author}'s avatar`}
                                    className="w-6 h-6 rounded-full object-cover border border-gray-300"
                                />
                                {blog.author}
                            </div>

                            {/* Date and Read Time */}
                            <div className="text-[#2B2C34] text-xs font-normal capitalize">
                                {blog.date} &nbsp;∙&nbsp; {blog.time}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
