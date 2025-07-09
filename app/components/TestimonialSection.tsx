
// 'use client'

// export default function TestimonialSection() {
//     return (
//         <section className="w-full bg-[#232536] py-16 px-6 text-white">
//             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//                 {/* Left Content */}
//                 <div className="space-y-4">
//                     <p className="uppercase text-sm tracking-[3px] font-semibold">Testimonials</p>
//                     <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
//                         What people say about our blog
//                     </h2>
//                     <p className="text-base leading-7 text-[#FBF6EA]">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
//                     </p>
//                 </div>

//                 {/* Right Testimonial Box */}
//                 <div className="relative">
//                     {/* Decorative Line */}
//                     <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-[310px] h-0.5 bg-[#FBF6EA] opacity-40 rotate-90"></div>

//                     <div>
//                         <p className="text-lg sm:text-xl font-bold leading-8 mb-6">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                         </p>

//                         <div className="flex items-center gap-4">
//                             <img
//                                 src="https://randomuser.me/api/portraits/men/45.jpg"
//                                 alt="Jonathan Vallem"
//                                 className="w-12 h-12 object-cover rounded-lg"
//                             />
//                             <div>
//                                 <h4 className="text-lg font-bold">Jonathan Vallem</h4>
//                                 <p className="text-sm text-[#FBF6EA]">New York, USA</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Navigation Buttons */}
//                     <div className="flex gap-4 mt-6">
//                         <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth="2"
//                                 stroke="currentColor"
//                                 className="w-5 h-5 rotate-180"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//                             </svg>
//                         </button>
//                         <button className="w-12 h-12 rounded-full bg-[#FF5959] text-white flex items-center justify-center hover:scale-105 transition">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth="2"
//                                 stroke="currentColor"
//                                 className="w-5 h-5"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }
'use client'

import Image from 'next/image'

export default function TestimonialSection() {
    return (
        <section className="w-full bg-[#232536] py-16 px-6 text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-4">
                    <p className="uppercase text-sm tracking-[3px] font-semibold">Testimonials</p>
                    <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
                        What people say about our blog
                    </h2>
                    <p className="text-base leading-7 text-[#FBF6EA]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                </div>

                {/* Right Testimonial Box */}
                <div className="relative">
                    {/* Decorative Line */}
                    <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-[310px] h-0.5 bg-[#FBF6EA] opacity-40 rotate-90"></div>

                    <div>
                        <p className="text-lg sm:text-xl font-bold leading-8 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div className="flex items-center gap-4">
                            <Image
                                src="https://randomuser.me/api/portraits/men/45.jpg"
                                alt="Jonathan Vallem"
                                className="w-12 h-12 object-cover rounded-lg"
                                width={48} // 12 * 4 = 48px for w-12
                                height={48} // 12 * 4 = 48px for h-12
                            />
                            <div>
                                <h4 className="text-lg font-bold">Jonathan Vallem</h4>
                                <p className="text-sm text-[#FBF6EA]">New York, USA</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-6">
                        <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5 rotate-180"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="w-12 h-12 rounded-full bg-[#FF5959] text-white flex items-center justify-center hover:scale-105 transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}