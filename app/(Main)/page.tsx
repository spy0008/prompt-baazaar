'use client'

import Header from "@/components/Header"
import PromptCard from "@/components/prompt/PromptCard"
import About from "@/components/Routes/About"
import Hero from "@/components/Routes/Hero"
import BestSellers from "@/components/shop/BestSellers"
import { styles } from "@/utils/style"
import Image from "next/image"
import { useEffect, useState } from "react"

type Props = {}

const page = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div >
      <div className="banner">
        <Header activeItem={0} />
        <Hero />
      </div>
      <Image
        src="/assets/lightdiamondblue.png"
        width={120}
        height={120}
        alt=""
        className="absolute right-[-30px]"
      />
      <br />
      <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
        <About />
        <>
          <h1 className={`${styles.heading} p-2 font-Monserrat`}>
            Latest Prompts Collection
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
          </div>
          <br />
          <BestSellers />
        </>
      </div>
    </div>
  )
}

export default page