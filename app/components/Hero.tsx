
// 'use client'

// import { Send } from 'lucide-react'

// export default function Hero() {
//     return (
//         <section className="relative w-full h-[450px] sm:h-[520px] md:h-[594px]">
//             {/* Background image */}
//             <div className="absolute inset-0 bg-[url('/car1.jpg')] bg-cover bg-center" />

//             {/* Dark overlay */}
//             <div className="absolute inset-0 bg-black opacity-25" />

//             {/* Content */}
//             <div className="relative z-10 px-4 sm:px-8 md:px-16 py-10 text-white flex flex-col gap-4 sm:gap-6 max-w-[714px]">
//                 <h1 className="text-4xl sm:text-[48px] md:text-[70px] font-bold leading-tight md:leading-[1.2]">
//                     Your Journey<br />
//                     Your Car<br />
//                     Your Way
//                 </h1>

//                 <p className="text-sm sm:text-base md:text-[18px] leading-6 max-w-[600px]">
//                     Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum vel euismod
//                     aliquam. Amet ultrices neque augue consectetur purus phasellus. Ullamcorper lorem montes
//                     varius amet vestibulum tellus facilisis consequat pretium.
//                 </p>

//                 <button className="mt-4 flex items-center gap-2 bg-[#FF5959] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-base sm:text-lg w-fit">
//                     Subscribe
//                     <Send className="w-4 h-4 sm:w-5 sm:h-5" />
//                 </button>
//             </div>
//         </section>
//     )
// }
'use client'

import { Send } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative w-full h-[450px] sm:h-[520px] md:h-[594px]">
            {/* Background image */}
            <div className="absolute inset-0 bg-[url('/car1.jpg')] bg-cover bg-center" />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-25" />

            {/* Content */}
            <div className="relative z-10 px-4 sm:px-8 md:px-16 py-10 text-white flex flex-col gap-4 sm:gap-6 max-w-[714px]">
                <h1 className="text-4xl sm:text-[48px] md:text-[70px] font-bold leading-tight md:leading-[1.2]">
                    Your Journey<br />
                    Your Car<br />
                    Your Way
                </h1>

                <p className="text-sm sm:text-base md:text-[18px] leading-6 max-w-[600px]">
                    Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum vel euismod
                    aliquam. Amet ultrices neque augue consectetur purus phasellus. Ullamcorper lorem montes
                    varius amet vestibulum tellus facilisis consequat pretium.
                </p>

                <button className="mt-4 flex items-center gap-2 bg-[#FF5959] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-base sm:text-lg w-fit">
                    Subscribe
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>
        </section>
    )
}