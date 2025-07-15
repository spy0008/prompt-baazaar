import { styles } from '@/utils/style'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className=" text-gray-200 py-10 mt-16 shadow-inner">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
                <Link href="/" className="flex items-center space-x-2 group">
                    <h1 className="font-Inter text-3xl cursor-pointer flex items-center">
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent font-bold transition group-hover:scale-105">Prompt</span>
                        <span className="inline-block rotate-12 text-pink-500 font-bold text-3xl mx-1 transition group-hover:rotate-6">B</span>
                        <span className="text-white underline decoration-pink-500 decoration-2 font-bold">aazaar</span>
                    </h1>
                </Link>

                <nav>
                    <ul className="flex items-center flex-wrap gap-2 md:gap-6">
                        <li>
                            <Link
                                href="/"
                                className={`${styles.label} hover:text-pink-400 transition-all duration-300 px-2 md:px-4`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/baazaar"
                                className={`${styles.label} hover:text-pink-400 transition-all duration-300 px-2 md:px-4`}
                            >
                                Baazaar
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact-us"
                                className={`${styles.label} hover:text-pink-400 transition-all duration-300 px-2 md:px-4`}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} PromptBaazaar. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer