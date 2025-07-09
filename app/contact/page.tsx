
'use client';

import React from 'react';
import Footer from '../components/Footer';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white text-[#232536]">
            {/* Hero Section */}
            <section className="bg-[#F4F0F8] py-16 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                <p className="text-lg max-w-2xl mx-auto">
                    We would love to hear from you.Whether you have a question about cars, feedback on our blog, or just want to say hello  we are here.
                </p>
            </section>

            {/* Contact Form */}
            <section className="py-16 px-6 max-w-4xl mx-auto">
                <form className="bg-[#F9F9FB] shadow-md rounded-xl p-6 sm:p-8 space-y-6">
                    <div>
                        <label className="block text-sm font-semibold mb-1" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#FF5959]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#FF5959]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows={5}
                            placeholder="Your message..."
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#FF5959]"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#FF5959] hover:bg-[#e24b4b] text-white px-6 py-3 rounded-md font-bold transition w-full sm:w-fit"
                    >
                        Send Message
                    </button>
                </form>
            </section>

            {/* Contact Info Section (Optional - uncomment to use) */}
            {/* 
            <section className="bg-[#232536] text-white py-12 px-6">
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Email</h3>
                        <p>support@carblog.com</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Phone</h3>
                        <p>+91 98765 43210</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Location</h3>
                        <p>New Delhi, India</p>
                    </div>
                </div>
            </section> 
            */}

            <Footer />
        </main>
    );
}
