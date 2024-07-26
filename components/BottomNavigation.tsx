'use client'

import Coins from '@/public/icons/Coins'
import Friends from '@/public/icons/Friends'
import Mine from '@/public/icons/Mine'
import { binanceLogo, hamsterCoin } from '@/public/images'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const BottomNavigation = () => {

    const route = useRouter();
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">
        <button  onClick={() => route.push("/")} className="text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl">
          <Image src={binanceLogo} alt="Exchange" className="w-8 h-8 mx-auto" />
          <p className="mt-1">Exchange</p>
        </button>
        <div className="text-center text-[#85827d] w-1/5">
          <Mine className="w-8 h-8 mx-auto" />
          <p className="mt-1">Mine</p>
        </div>
        <button onClick={() => route.push("/inviteFriends")} className="text-center text-[#85827d] w-1/5">
          <Friends className="w-8 h-8 mx-auto" />
          <p className="mt-1">Friends</p>
        </button>
        <button onClick={() => route.push("/EarnMoreCoins")} className="text-center text-[#85827d] w-1/5">
          <Coins className="w-8 h-8 mx-auto" />
          <p className="mt-1">Earn</p>
        </button>
        <div className="text-center text-[#85827d] w-1/5">
          <Image src={hamsterCoin} alt="Airdrop" className="w-8 h-8 mx-auto" />
          <p className="mt-1">Airdrop</p>
        </div>
      </div>
  )
}

export default BottomNavigation