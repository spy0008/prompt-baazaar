import Image from 'next/image'
import React from 'react'
import line from "@/public/assets/line2.png"
import Marquee from "react-fast-marquee"

type Props = {}

const rowOneImages = [
    {
        url: "/assets/one.png",
    },
    {
        url: "/assets/two.png",
    },
    {
        url: "/assets/three.png",
    },
    {
        url: "/assets/four.png",
    },
    {
        url: "/assets/five.png",
    },
];

const rowTwoImages = [
    {
        url: "/assets/one2.png",
    },
    {
        url: "/assets/two2.png",
    },
    {
        url: "/assets/three2.png",
    },
    {
        url: "/assets/four2.png",
    },
    {
        url: "/assets/five2.png",
    },
];


const Hero = (props: Props) => {
    return (
        <div className="w-full min-h-screen mt-7 flex flex-col items-center justify-center px-4 text-center bg-gradient-to-br from-gray via-gray-950 to-pink-950">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 animate-text-glow font-Monserrat drop-shadow-md">
                <span className="block">Buy and Sell</span>
                <span className="block">AI Prompts</span>
                <span className="block">All in One Marketplace</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl leading-relaxed">
                Join the global marketplace for
                <span className="text-blue-600 font-semibold"> ChatGPT</span>,
                <span className="text-pink-500 font-semibold"> Midjourney</span>,
                coding, and
                <span className="text-purple-600 font-semibold"> AI automation</span> prompts.
            </p>

            <div className='md:mt-10'>
                <Image
                    src={line}
                    alt=''
                    className='absolute left-20 bottom-20  hidden md:block'
                    width={2000}
                    height={1}
                />
            </div>

            <div className='w-[100vw] mb-5 md:mb-20 relative'>
                <div className='rotate-[4deg] mt-10 md:mt-[6.5rem]'>
                    <Marquee>
                        {
                            rowOneImages.map((i, index) => (
                                <Image
                                    key={index}
                                    src={i.url}
                                    alt='images'
                                    className='md:m-4 w-[200px] m-2 md:w-[500px] rounded-[20px]'
                                    width={500}
                                    height={300}
                                />
                            ))
                        }
                    </Marquee>
                    <Marquee>
                        {
                            rowTwoImages.map((i, index) => (
                                <Image
                                    key={index}
                                    src={i.url}
                                    alt='images'
                                    className='md:m-4 w-[200px] m-2 md:w-[500px] rounded-[20px]'
                                    width={500}
                                    height={300}
                                />
                            ))
                        }
                    </Marquee>
                </div>
            </div>
        </div>


    )
}

export default Hero