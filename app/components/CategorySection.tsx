
'use client'

const categories = [
    {
        title: 'Car Reviews',
        desc: 'Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit in.',
        img: '/car1.1.jpg',
    },
    {
        title: 'Maintenance Tips',
        desc: 'Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit in.',
        img: '/car1.2.jpg',
    },
    {
        title: 'Car Modifications',
        desc: 'Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit in.',
        img: '/car1.3.jpg',
    },
    {
        title: 'Driving Tips',
        desc: 'Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit in.',
        img: '/car1.4.jpg',
    },
]

export default function CategorySection() {
    return (
        <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-20 bg-white">
            {/* Heading */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold">All Category</h2>
                <div className="w-10 border-t-4 border-black mt-1 sm:mt-2" />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="bg-[#F4F0F8] rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
                    >
                        <img
                            src={cat.img}
                            alt={cat.title}
                            className="w-20 h-20 sm:w-[90px] sm:h-[90px] object-cover rounded-full mb-4"
                        />
                        <h3 className="font-semibold text-lg sm:text-xl mb-2">{cat.title}</h3>
                        <p className="text-sm sm:text-base text-black">{cat.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
