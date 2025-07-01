"use client"

import { styles } from '@/utils/style'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {

    const router = useRouter()

    return (
        <div className='w-full relative grid md:grid-cols-2 md:py-8' >
            <div className="col-span-1 w-full md:w-[60%] md:mt-5 px-5 md:px-[unset]">
                <button className={`${styles.button} px-5 mb-[30px] bg-[#12211f]`}>
                    AI Image
                </button>

                <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>
                    Discover ready to use AI solutions. No technical barriers.
                </h5>

                <p className={`${styles.paragraph} pb-5`}>
                    AI image generation tools have emerged as powerful resources in the
                    realm of digital art and design. These cutting-edge tools leverage
                    advanced.
                </p>

                <Button
                    className={`${styles.button} cursor-pointer bg-[#2551b0] font-[600] h-[45px]`}
                    onClick={() => router.push("/baazaar")}
                    variant='outline'
                >
                    Visit Baazaar
                </Button>
            </div>

            <div className='col-span-1 my-10 md:mt-[unset]'>
                <Image
                    src="/assets/craft-thumb.png"
                    alt="image"
                    width={600}
                    height={600}
                    priority
                />
            </div>

        </div>
    )
}

export default About