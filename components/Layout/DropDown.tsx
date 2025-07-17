import { User } from '@clerk/nextjs/server'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import { styles } from '@/utils/style'
import Link from 'next/link'
import { TbSwitchVertical } from "react-icons/tb"
import { AiOutlineLogout } from "react-icons/ai"
import { useClerk } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

type Props = {
    user: User | null,
    setOpen: (open: boolean) => {} | void,
    handleProfile: () => void,
    isSellerExist: boolean,
}
const DropDown = ({ user, setOpen, handleProfile, isSellerExist }: Props) => {

    const { signOut } = useClerk()
    const router = useRouter()

    const handleLogout = async () => {
        await signOut()
        router.push("/sign-in")
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Image
                    src={user?.imageUrl || ""}
                    alt='UserImage'
                    className='w-10 h-10 cursor-pointer rounded-full border-2 border-primary shadow-lg transition-transform hover:scale-105 outline-none'
                    width={40}
                    height={40}
                    style={{ boxShadow: 'none', border: '2px solid #3b82f6' }}
                />
            </DropdownMenuTrigger>

            <DropdownMenuContent
                aria-label='Profile Actions'
                align="end"
                sideOffset={8}
                className="min-w-[170px] transition-all duration-200 bg-white rounded-2xl outline-none shadow-xl border-none p-2 !z-[100000]"
                side="bottom"
                avoidCollisions={false}
            >
                <DropdownMenuItem
                    onClick={() => {
                        handleProfile()
                        setOpen(false)
                    }}
                    className="hover:bg-primary/10 rounded-2xl transition-colors cursor-pointer"
                >
                    <div className='flex items-center gap-3 w-full'>
                        <Image
                            src={user?.imageUrl || ""}
                            alt='UserImage'
                            className='w-8 h-8 rounded-full border border-gray-200'
                            width={32}
                            height={32}
                        />
                        <div>
                            <span className={`${styles.label} text-black font-semibold text-[16px]`}>
                                My Profile
                            </span>
                        </div>
                    </div>
                </DropdownMenuItem>

                <DropdownMenuItem
                    className={`hover:bg-primary/10 rounded-2xl transition-colors cursor-pointer ${!isSellerExist && 'hidden'}`}
                >
                    <Link href={"/my-shop"} className='flex w-full items-center'>
                        <span className={`${styles.label} text-black font-semibold text-[16px]`}>
                            Switching to Seller
                        </span>
                        <TbSwitchVertical className='text-2xl ml-2 text-black' />
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={handleLogout}
                >
                    <div className='flex items-center w-full font-semibold rounded-2xl transition-colors gap-3.5 cursor-pointer'>

                        <AiOutlineLogout className='ml-1.5 size-6 text-black' />
                        <span className={`${styles.label} text-black font-semibold text-[16px]`}>
                            Log Out
                        </span>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropDown