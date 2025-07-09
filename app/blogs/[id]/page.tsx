


import CategorySection from '../../components/CategorySection';
import Footer from '../../components/Footer';

export default function InfotainmentReview() {
    return (
        <main className="w-full min-h-screen bg-white text-black">
            <section className="px-6 pt-28 pb-16 max-w-screen-xl mx-auto">
                <img
                    src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9yc2NoZSUyMDkxMXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Infotainment Header"
                    className="w-full h-96 object-cover rounded-xl mb-6"
                />
                <h1 className="text-4xl font-bold text-[#232536] mb-6">
                    A Review of Cars with Advanced Infotainment Systems
                </h1>
                {/* <p className="text-sm text-[#2B2C34] mb-4">By Dasteen • Jan 10, 2024 • 3 min read</p> */}
                <div className="flex items-center gap-2 text-sm text-[#2B2C34] mb-4">
                    <img
                        src="https://i.pravatar.cc/40?u=dasteen"
                        alt="Author"
                        className="w-6 h-6 rounded-full object-cover"
                    />
                    <span>By Dasteen • Jan 10, 2024 • 3 min read</span>
                </div>

              
                <p className="text-lg leading-relaxed text-[#232536]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat justo nec massa efficitur, ut placerat ex volutpat.
                    Quisque quis justo nec magna eleifend imperdiet. Suspendisse nec mi in nunc tincidunt viverra. Duis eu interdum velit.
                    Nulla facilisi. Integer blandit, sapien vitae blandit posuere, velit augue fermentum sapien, vel fringilla nunc eros nec urna.
                    Sed sagittis sapien quis erat fermentum, a tristique justo sagittis. Duis at pulvinar orci, et ullamcorper nisi.
                </p>
                {/* <h1 className="text-2xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat justo nec massa efficitur</h1>
                <p className="text-lg leading-relaxed text-[#232536]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat justo nec massa efficitur, ut placerat ex volutpat.
                    Quisque quis justo nec magna eleifend imperdiet. Suspendisse nec mi in nunc tincidunt viverra. Duis eu interdum velit.
                    Nulla facilisi. Integer blandit, sapien vitae blandit posuere, velit augue fermentum sapien, vel fringilla nunc eros nec urna.
                    Sed sagittis sapien quis erat fermentum, a tristique justo sagittis. Duis at pulvinar orci, et ullamcorper nisi.
                </p> */}



                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#232536] mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </h2>

                {/* Paragraph */}
                <p className="text-base md:text-lg text-[#232536] leading-[28px] mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                    Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo.
                    Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                </p>

                {/* Another Heading */}
                <h2 className="text-3xl md:text-4xl text-[#232536] font-bold tracking-tight mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </h2>

                {/* Paragraph */}
                <p className="text-base md:text-lg text-[#232536] leading-[28px] mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                    Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo.
                    Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                </p>

                {/* Paragraph */}
                <p className="text-base md:text-lg text-[#232536] leading-[28px] mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                    Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo.
                    Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                </p>

                {/* List Section */}
                <ul className="space-y-4 text-[#161722] font-semibold opacity-80 text-lg md:text-xl mt-6 list-disc list-inside">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Non blandit massa enim nec scelerisque</li>
                    <li>Neque egestas congue quisque egestas</li>
                </ul>
            </section>

            {/* Category Section */}
            <section className="w-full bg-white">
                <CategorySection />
            </section>

            <Footer />
        </main>
    );
}

