import Image from 'next/image';
import React from 'react'

type Props = {}


type starProps = {
    rating: number

}

const StarRating = ({ rating }: starProps) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center text-yellow-400 text-sm">
            {[...Array(fullStars)].map((_, i) => (
                <span key={`full-${i}`}>★</span>
            ))}
            {hasHalfStar && <span>☆</span>}
            {[...Array(emptyStars)].map((_, i) => (
                <span key={`empty-${i}`}>☆</span>
            ))}
            <span className="text-white text-xs pl-2">({rating}/5)</span>
        </div>
    );
};


const SellerCard = (props: Props) => {
    const rating = 4.5;
    return (
        <div className="md:max-w-xs w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-xl overflow-hidden hover:scale-[1.03] transition-transform duration-300 cursor-pointer">
            <div className="flex flex-col items-center p-6 text-center space-y-4">
                <Image
                    src='/assets/user.png'
                    alt='seller'
                    className="rounded-full object-cover border-4 border-white shadow-md"
                    width={80}
                    height={80}
                />
                <h2 className="text-xl font-semibold text-white">@Naman</h2>

                <div className="flex items-center justify-center space-x-1">
                    <StarRating rating={rating} />
                </div>

                <p className="text-sm text-white">
                    Total Sales:{" "}
                    <span className="font-medium text-white">200</span>
                </p>
            </div>
        </div>
    )
}

export default SellerCard