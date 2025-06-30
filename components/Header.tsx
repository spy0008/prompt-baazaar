'use client';
import Link from 'next/link';
import React, { useState } from 'react'
import Navigations from './Navigations';
import { AiOutlineSearch } from "react-icons/ai";
import { RiUser6Line } from "react-icons/ri";
import { HiMiniBars3BottomRight } from "react-icons/hi2"

type ActiveProp = {
    activeItem: number
}

const Header = ({ activeItem }: ActiveProp) => {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setActive(true)
            } else {
                setActive(false)
            }
        })
    }

    const handleClose = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement
        if (target.id === 'screen') {
            setOpen(!open)
        }
    }

    return (
        <div className={`w-full p-5 border-b min-h-[60px] border-b-[#ffffff32] transition-opacity ${active && 'fixed top-0 left-0 bg-[#000000] z-[9999]'}`}>
            <div className="hidden md:w-[90%] mx-auto justify-between md:flex items-center">
                <div>
                    <Link href={'/'}>
                        <h1 className='font-Inter text-3xl cursur-pointer'>
                            <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent'>Prompt</span><span className="inline-block rotate-12 text-pink-500">B</span><span className="text-white underline">aazaar</span>
                        </h1>
                    </Link>
                </div>

                <div className='flex'>
                    <Navigations activeItem={activeItem} />
                </div>
                <div className="flex items-center ml-10">
                    <AiOutlineSearch className='text-[25px] mr-5 cursor-pointer' />
                    {/* auth */}
                    <Link href='/sign-in'>
                        <RiUser6Line className='text-[25px] cursor-pointer' />
                    </Link>
                </div>

            </div>

            {/* toggle */}


            {/* for mobile */}
            <div className="w-full md:hidden flex items-center justify-between">
                <>
                    <Link href="/">
                        <h1>
                            <Link href={'/'}>
                                <h1 className='font-Inter text-3xl cursur-pointer'>
                                    <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent'>Prompt</span><span className="inline-block rotate-12 text-pink-500">B</span><span className="text-white underline">aazaar</span>
                                </h1>
                            </Link>
                        </h1>
                    </Link>
                </>

                <>
                    <HiMiniBars3BottomRight
                        className='text-2xl cursor-pointer text-blue-500'
                        onClick={() => setOpen(!open)}
                    />
                </>

                {
                    open && (
                        <div className='fixed md:hidden w-full h-screen top-0 left-0 z-[99999] bg-[unset]' id='screen' onClick={handleClose}>
                            <div className="fixed  bg-black h-screen top-0 right-0 w-[40%] z-[9999]">
                                <div className="mt-20 p-5">
                                    <Navigations activeItem={activeItem} />

                                    {/* auth */}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header