'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Navigations from './Navigations';
import { AiOutlineSearch } from "react-icons/ai";
import { RiUser6Line } from "react-icons/ri";
import { HiMiniBars3BottomRight } from "react-icons/hi2"
import { RxCross1 } from "react-icons/rx"
import { User } from '@clerk/nextjs/server';
import DropDown from './DropDown';
import { UserProfile } from '@clerk/nextjs';

type ActiveProp = {
    activeItem: number,
    user: User | null,
    isSellerExist: boolean,
}

const Header = ({ activeItem, user, isSellerExist }: ActiveProp) => {

    const [active, setActive] = useState(false)
    const [activeProfile, setActiveProfile] = useState(false)
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


    const handleProfile = () => {
        setActiveProfile(!activeProfile)
    }

    return (
        <div className={`w-full p-5 border-b min-h-[60px] border-b-[#ffffff32] transition-opacity ${active && 'fixed top-0 transition-all animation-duration-initial  left-0 bg-black/75 z-[9999]'}`}>
            <div className="hidden md:w-[90%] mx-auto justify-between md:flex items-center">
                <div>
                    <Link href='/'>
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
                    {
                        user ? (
                            <div>
                                <DropDown
                                    user={user}
                                    setOpen={setOpen}
                                    handleProfile={handleProfile}
                                    isSellerExist={isSellerExist}
                                />
                            </div>
                        ) : (
                            <Link href='/sign-in'>
                                <RiUser6Line className='text-[25px] cursor-pointer' />
                            </Link>
                        )
                    }
                </div>

            </div>

            {
                activeProfile && (
                    <div className='w-full fixed h-screen overflow-hidden flex justify-center items-center top-0 left-0 bg-[#00000068] z-[9999]'>
                        <div className='w-min relative h-[90vh] overflow-y-scroll bg-white rounded-xl shadow'>
                            <UserProfile routing="hash" />
                            <RxCross1
                                className='absolute text-black text-2xl top-[16px] lg:top-[30px] right-10 cursor-pointer'
                                onClick={handleProfile}
                            />
                        </div>
                    </div>
                )
            }


            {/* for mobile */}
            <div className="w-full md:hidden flex items-center justify-between">
                <>
                    <Link href="/">
                        <h1>
                            <Link href='/'>
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
                        <div className='fixed md:hidden w-full h-screen top-0 left-0 !z-[99999] bg-[unset]
' id='screen' onClick={handleClose}>
                            <div className="fixed bg-black/75 h-screen top-0 right-0 w-[40%] !z-[9999] overflow-x-visible overflow-y-auto">
                                <div className="mt-20 p-5">
                                    <Navigations activeItem={activeItem} />
                                    {
                                        user && (

                                            <DropDown
                                                user={user}
                                                setOpen={setOpen}
                                                handleProfile={handleProfile}
                                                isSellerExist={isSellerExist}
                                            />
                                        )
                                    }
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