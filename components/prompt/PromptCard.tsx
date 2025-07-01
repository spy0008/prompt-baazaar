
import Image from 'next/image'
import React from 'react'

type Props = {

}

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
      <span className="text-white text-xs pl-2">({rating})</span>
    </div>
  );
};

const PromptCard = (props: Props) => {
  const rating = 4.5;
  return (
    <div className="max-w-sm w-full mt-10 rounded-3xl overflow-hidden shadow-2xl relative group bg-gray-900">
      
      <div className="relative">
        <Image
          src="/assets/one.png"
          alt="AI Card"
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
          width={300}
          height={300}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-blue-700/40 to-pink-500/20 backdrop-blur-sm transition-all duration-500"></div>
      </div>

      
      <div className="absolute bottom-0 left-0 w-full p-5 z-10 text-white bg-gradient-to-t from-black/90 to-transparent">
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Image
              src='/assets/user.png'
              alt="Profile"
              width={36}
              height={36}
              className="rounded-full border-2 border-white shadow"
            />
            <StarRating rating={rating} />
          </div>
        </div>

        
        <h2 className="text-xl font-bold drop-shadow-sm">Next-Gen AI Prompt</h2>

       
        <p className="text-sm opacity-80 mt-2 drop-shadow-sm">
          Dive into future-ready AI prompts for builders, designers & thinkers.
        </p>

        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center bg-white/10 hover:bg-white/20 px-3 py-1 rounded-[20px] transition-all">
            <Image src="/assets/chat.png" alt="chat" width={20} height={20} />
            <span className="ml-2 text-sm">ChatGPT</span>
          </div>
          <button className="bg-white text-pink-600 cursor-pointer font-bold px-4 py-2 rounded-full hover:bg-pink-200 shadow duration-300 transition">
            Get Prompt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PromptCard