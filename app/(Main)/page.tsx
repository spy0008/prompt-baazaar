'use client'

import Header from "@/components/Layout/Header"
import PromptCard from "@/components/prompt/PromptCard"
import About from "@/components/Routes/About"
import Future from "@/components/Routes/Future"
import Hero from "@/components/Routes/Hero"
import Partners from "@/components/Routes/Partners"
import BestSellers from "@/components/shop/BestSellers"
import SellersBanner from "@/components/shop/SellersBanner"
import Footer from "@/components/Layout/Footer"
import { styles } from "@/utils/style"
import Image from "next/image"
import { useEffect, useState } from "react"
import axios from "axios"
import Loader from "@/utils/Loader"

type Props = {}

const page = (props: Props) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isSellerExist, setIsSellerExist] = useState(false)

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setLoading(true)
    axios.get("/api/me")
      .then((res) => {
        setUser(res.data.user)
        setIsSellerExist(res.data.shop ? true : false)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (!isMounted) return null;


  return (
    <>
      {
        loading ? (
          <>
            <Loader />
          </>
        ) : (
          <div >
            <div className="banner">
              <Header activeItem={0} user={user} isSellerExist={isSellerExist} />
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
                <Future />
                <Partners />
                <SellersBanner />
                <br />
                <br />
                <hr className="text-[#ffffff23]" />
                <Footer />
              </>
            </div>
          </div>
        )
      }
    </>
  )
}

export default page