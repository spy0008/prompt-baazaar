import { styles } from '@/utils/style'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

type Props = {}

const SellersBanner = (props: Props) => {
  return (
    <div className='w-full 2xl:w-[80%] 2xl:m-auto h-[30vh] flex items-center justify-center sellers-banner rounded-2xl md:m-2'>
        <div className='text-center'>
            <h1 className={`${styles.heading} font-Monserrat`}>
                Start to selling with us
            </h1>
            <br />
            <br />
            <Link href={"/create-shop"}>
            <Button className='mb-3 p-6 cursor-pointer rounded-2xl text-xl bg-black text-white font-Inter' 
            variant="link">
                <span>
                    Get Started
                </span>
            </Button>
            </Link>
        </div>
    </div>
  )
}

export default SellersBanner