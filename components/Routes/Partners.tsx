import { styles } from '@/utils/style'
import React from 'react'
import Marquee from 'react-fast-marquee'

type Props = {}

const Partners = (props: Props) => {
  return (
    <div className='py-10'>
        <h1 className={`${styles.heading} font-Monserrat text-center`}>
            Our Partner&rsquo;s
        </h1>

        <div className='w-full flex justify-center pt-3'>
            <div className='w-[50px] h-[2px] bg-[#4b6cff]'/>
        </div>

        <Marquee className='w-full my-10'>
            <div className="flex items-center space-x-8 gap-4 w-full justify-center">
                <span className="text-gray-400 text-lg italic">
                    No partners yet. Stay tuned!
                </span>
                <span className="text-gray-400 text-lg italic">
                    No partners yet. Stay tuned!
                </span>
                <span className="text-gray-400 text-lg italic">
                    No partners yet. Stay tuned!
                </span>
                <span className="text-gray-400 text-lg italic">
                    No partners yet. Stay tuned!
                </span>
            </div>
        </Marquee>
    </div>
  )
}

export default Partners