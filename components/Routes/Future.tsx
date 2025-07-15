import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { styles } from '@/utils/style'

type Props = {}

const Future = (props: Props) => {
    return (
        <div className='w-full relative p-4 md:p-[unset] grid md:grid-cols-2 py-8'>
            <div className='col-span-1'>
                <Image 
                src="/assets/tools-thumb.png"
                alt='image'
                width={800}
                height={500}
                className='md:w-[90%] md:ml-[-50px] 2xl:ml-[-90px]'
                />
            </div>

            <div className='col-span-1 w-ful flex justify-center items-center'>
                <div className='2xl:w-[60%]'>
                    <Button className={`${styles.button} cursor-pointer bg-[#2551b0] pt-1.5  mb-[30px]  font-[600] h-[35px]`} variant='outline'>
                        Future
                    </Button>

                    <hr className="border-t-2 border-gray-300 my-4" />
                    <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>
                        Exploring the Exciting Future of AI-Generated Imagery
                    </h5>
                    <hr className="border-t-2 border-gray-300 my-4" />
                    <p className={`${styles.paragraph} pb-5`}>
                        discover the future of AI-generated imagery, where creativity meets technology.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Future