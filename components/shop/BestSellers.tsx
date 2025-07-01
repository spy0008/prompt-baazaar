import { styles } from '@/utils/style'
import React from 'react'
import SellerCard from './SellerCard'

type Props = {}

const BestSellers = (props: Props) => {
    return (
        <div className='mb-10'>
            <h1 className={`${styles.heading} p-2 font-Monserrat mb-5`}>
                Baazaar Tops Sellers
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
                <SellerCard />
                <SellerCard />
                <SellerCard />
            </div>

        </div>
    )
}

export default BestSellers