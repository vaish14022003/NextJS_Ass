

'use client'

export default function Footer() {
    return (
        <footer className="w-full bg-[#232536] text-white px-4 sm:px-6 py-16">
            {/* Top Logo and Links */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FFD6D6]" />
                    <span className="text-lg font-inter">LOGO</span>
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-center">
                    <a href="#">Home</a>
                    <a href="#">Blog</a>
                    <a href="#">About us</a>
                    <a href="#">Contact us</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>

            {/* Subscribe Section */}
            <div className="max-w-7xl mx-auto bg-[#2A2B39] rounded-lg py-10 px-6 flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-center lg:text-left max-w-md">
                    Subscribe to our newsletter to get latest updates and news
                </h3>
                <div className="flex flex-col sm:flex-row w-full max-w-xl gap-4">
                    <input
                        type="email"
                        placeholder="example@email.com"
                        className="flex-1 px-4 py-3 rounded-lg text-black placeholder:text-black/50"
                    />
                    <button className="bg-[#FF5959] px-6 py-3 rounded-lg font-bold text-white flex items-center justify-center gap-2">
                        Subscribe
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Contact and Socials */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="text-sm text-white/70 font-semibold">
                    <p className="mb-1">Finstreet 118 2561 abctown</p>
                    <p>example@femail.com 001 21345 442</p>
                </div>
                <div className="flex gap-4">
                    {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform, idx) => (
                        <div key={idx} className="w-5 h-5">
                            <img
                                src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${platform}.svg`}
                                alt={platform}
                                className="w-full h-full object-contain invert"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}
