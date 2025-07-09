

'use client'

export default function TrendingLatestSection() {
    return (
        <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
                {/* Latest Section */}
                <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6">Latest</h2>
                    <div className="relative w-full h-60 sm:h-72 md:h-[369px] rounded-lg overflow-hidden mb-6">
                        <img
                            src="/car2.jpg"
                            alt="Latest blog visual"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <p className="text-xs sm:text-sm text-[#4C4C4C] font-medium mb-2">By John Doe | March 12, 2024</p>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#232536] mb-4">
                        Lorem ipsum dolor sit amet, consectetur aiscing elit, sed do eiusmod tempor.
                    </h3>
                    <p className="text-sm sm:text-base text-[#6D6E76] leading-6 sm:leading-7 mb-6">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate.
                    </p>

                    <button className="bg-[#FF5959] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base">
                        Read more
                    </button>
                </div>

                {/* Trending Section */}
                <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-2">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">Trending Blogs</h2>
                        <a href="#" className="text-sm sm:text-base font-medium text-black hover:underline">See all</a>
                    </div>

                    {/* Trending Cards */}
                    <div className="space-y-6">
                        {[
                            {
                                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
                                author: 'John Deo',
                                date: 'Aug 23, 2023',
                                bg: 'bg-white',
                                text: 'text-[#232536]',
                            },
                            {
                                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
                                author: 'John Deo',
                                date: 'Aug 23, 2023',
                                bg: 'bg-[#FF5959]',
                                text: 'text-white',
                            },
                            {
                                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
                                author: 'John Deo',
                                date: 'Aug 23, 2023',
                                bg: 'bg-white',
                                text: 'text-[#232536]',
                            },
                            {
                                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
                                author: 'John Deo',
                                date: 'Aug 23, 2023',
                                bg: 'bg-white',
                                text: 'text-[#232536]',
                            }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className={`w-full p-4 sm:p-6 rounded-lg ${item.bg} shadow-md`}
                            >
                                <p className={`text-xs sm:text-sm font-medium ${item.text === 'text-white' ? 'text-white' : 'text-[#4C4C4C]'}`}>
                                    By {item.author} | {item.date}
                                </p>
                                <h3 className={`text-base sm:text-lg lg:text-2xl font-semibold mt-2 ${item.text}`}>
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
