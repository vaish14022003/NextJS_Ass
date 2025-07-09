
'use client'

import { Send } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative w-full h-[594px] md:h-[700px] lg:h-[800px]">
            {/* Background image */}
            <div className="absolute inset-0 bg-[url('/car3.jpg')] bg-cover bg-center" />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-25" />

            {/* Content */}
            <div className="relative z-10 px-4 sm:px-8 md:px-16 py-10 text-white flex flex-col justify-center h-full">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold leading-tight sm:leading-[1.2]">
                    Your Journey<br />
                    Your Car<br />
                    Your Way
                </h1>

                <p className="mt-4 text-base sm:text-lg md:text-[18px] leading-6 max-w-[600px]">
                    Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum vel euismod
                    aliquam. Amet ultrices neque augue consectetur purus phasellus. Ullamcorper lorem montes
                    varius amet vestibulum tellus facilisis consequat pretium.
                </p>

                <button className="mt-6 flex items-center gap-2 bg-[#FF5959] text-white px-6 py-3 rounded-lg font-bold text-base sm:text-lg w-fit">
                    Subscribe
                    <Send className="w-5 h-5" />
                </button>
            </div>
        </section>
    )
}
