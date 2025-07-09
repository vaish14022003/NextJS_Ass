
// import React from 'react';
// import Footer from '../components/Footer';
// import Image from "next/image";
// export default function AboutPage() {
//     return (
//         <main className="min-h-screen bg-white text-[#232536]">
//             {/* Hero Section */}
//             <section className="bg-[#F4F0F8] py-16 px-4 sm:px-6 text-center">
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
//                     About Us
//                 </h1>
//                 <p className="text-base sm:text-lg max-w-3xl mx-auto">
//                     We are passionate about delivering quality car reviews, tips, and news to help you make informed decisions and enjoy your ride.
//                 </p>
//             </section>

//             {/* Mission Section */}
//             <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
//                 <h2 className="text-xl sm:text-2xl font-bold mb-4">Our Mission</h2>
//                 <p className="text-sm sm:text-base leading-relaxed mb-8">
//                     Our mission is to empower car enthusiasts, buyers, and casual readers with accurate, engaging, and easy-to-understand content.
//                     Whether it is a breakdown of the latest features, expert maintenance tips, or hands-on modification tutorials — we have  got you covered.
//                 </p>
//             </section>

//             {/* Team Section */}
//             <section className="bg-[#F9F9FB] py-16 px-4 sm:px-6">
//                 <h2 className="text-xl sm:text-2xl font-bold mb-10 text-center">Meet the Team</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//                     {/* Team Member 1 */}
//                     <div className="bg-white rounded-xl shadow-md p-6 text-center">
//                         {/* <img
//                             src="https://randomuser.me/api/portraits/men/75.jpg"
//                             alt="Team Member"
//                             className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
//                         /> */}
//                         <Image
//                             src="https://randomuser.me/api/portraits/men/75.jpg"
//                             alt="Team Member"
//                             className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
//                             width={96} // Specify width (24 * 4 = 96px for w-24)
//                             height={96} // Specify height (24 * 4 = 96px for h-24)
//                         />
//                         <h3 className="font-bold text-lg">Dasteen</h3>
//                         <p className="text-sm text-gray-600">Editor-in-Chief & Car Reviewer</p>
//                     </div>
//                     {/* Team Member 2 */}
//                     <div className="bg-white rounded-xl shadow-md p-6 text-center">
//                         <img
//                             src="https://randomuser.me/api/portraits/women/65.jpg"
//                             alt="Team Member"
//                             className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
//                         />
//                         <h3 className="font-bold text-lg">Anika Mehra</h3>
//                         <p className="text-sm text-gray-600">Technical Writer & Auto Expert</p>
//                     </div>
//                     {/* Team Member 3 */}
//                     <div className="bg-white rounded-xl shadow-md p-6 text-center">
//                         <img
//                             src="https://randomuser.me/api/portraits/men/85.jpg"
//                             alt="Team Member"
//                             className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
//                         />
//                         <h3 className="font-bold text-lg">Rohit Raj</h3>
//                         <p className="text-sm text-gray-600">Content Strategist</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer CTA */}
//             <section className="py-16 px-4 sm:px-6 text-center">
//                 <h2 className="text-xl sm:text-2xl font-bold mb-4">Want to know more?</h2>
//                 <p className="mb-6 text-sm sm:text-base">
//                     Check out our blog or reach out to us on the contact page for more information.
//                 </p>
//                 <a
//                     href="/contact"
//                     className="inline-block bg-[#FF5959] text-white px-6 py-3 rounded font-bold hover:bg-[#e24b4b] transition"
//                 >
//                     Contact Us
//                 </a>
//             </section>

//             <Footer />
//         </main>
//     );
// }
import React from 'react';
import Footer from '../components/Footer';
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-[#232536]">
            {/* Hero Section */}
            <section className="bg-[#F4F0F8] py-16 px-4 sm:px-6 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    About Us
                </h1>
                <p className="text-base sm:text-lg max-w-3xl mx-auto">
                    We are passionate about delivering quality car reviews, tips, and news to help you make informed decisions and enjoy your ride.
                </p>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-sm sm:text-base leading-relaxed mb-8">
                    Our mission is to empower car enthusiasts, buyers, and casual readers with accurate, engaging, and easy-to-understand content.
                    Whether it is a breakdown of the latest features, expert maintenance tips, or hands-on modification tutorials — we have got you covered.
                </p>
            </section>

            {/* Team Section */}
            <section className="bg-[#F9F9FB] py-16 px-4 sm:px-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-10 text-center">Meet the Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {/* Team Member 1 */}
                    <div className="bg-white rounded-xl shadow-md p-6 text-center">
                        <Image
                            src="https://randomuser.me/api/portraits/men/75.jpg"
                            alt="Team Member"
                            className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                            width={96} // 24 * 4 = 96px for w-24
                            height={96} // 24 * 4 = 96px for h-24
                        />
                        <h3 className="font-bold text-lg">Dasteen</h3>
                        <p className="text-sm text-gray-600">Editor-in-Chief and Car Reviewer</p>
                    </div>
                    {/* Team Member 2 */}
                    <div className="bg-white rounded-xl shadow-md p-6 text-center">
                        <Image
                            src="https://randomuser.me/api/portraits/women/65.jpg"
                            alt="Team Member"
                            className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                            width={96} // 24 * 4 = 96px for w-24
                            height={96} // 24 * 4 = 96px for h-24
                        />
                        <h3 className="font-bold text-lg">Anika Mehra</h3>
                        <p className="text-sm text-gray-600">Technical Writer and Auto Expert</p>
                    </div>
                    {/* Team Member 3 */}
                    <div className="bg-white rounded-xl shadow-md p-6 text-center">
                        <Image
                            src="https://randomuser.me/api/portraits/men/85.jpg"
                            alt="Team Member"
                            className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                            width={96} // 24 * 4 = 96px for w-24
                            height={96} // 24 * 4 = 96px for h-24
                        />
                        <h3 className="font-bold text-lg">Rohit Raj</h3>
                        <p className="text-sm text-gray-600">Content Strategist</p>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-16 px-4 sm:px-6 text-center">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Want to know more</h2>
                <p className="mb-6 text-sm sm:text-base">
                    Check out our blog or reach out to us on the contact page for more information.
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-[#FF5959] text-white px-6 py-3 rounded font-bold hover:bg-[#e24b4b] transition"
                >
                    Contact Us
                </a>
            </section>

            <Footer />
        </main>
    );
}
