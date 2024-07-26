// components/EarnMoreCoins.js

import React from 'react';
import { Calendar, dollarCoin, hamsterExchange, InviteFriend, Telegram, X, Youtube } from '@/public/images';
import Image from 'next/image';

const EarnMoreCoins = () => {
  return (
    <div className="p-4 bg-black text-white max-w-xl mx-auto shadow-lg">
      <div className="flex flex-col items-center mb-4">
        <Image src={dollarCoin} alt="Coin" className="w-24 h-24 mb-2" />
        <h1 className="text-2xl font-bold">Earn more coins</h1>
      </div>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Hamster Youtube</h2>
          <div className="p-4 bg-[#1d2025] rounded-2xl flex items-center justify-between">
            <div className="flex items-center">
              <Image src={Youtube} alt="YouTube" className="w-12 h-12 mr-4" />
              <div>
                <p className="font-semibold">5 richest people in the world</p>
                <p className="text-yellow-400">+100,000</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Daily tasks</h2>
          <div className="p-4 bg-[#1d2025] rounded-2xl flex items-center justify-between">
            <div className="flex items-center">
              <Image src={Calendar} alt="Calendar" className="w-12 h-12 mr-4" />
              <div>
                <p className="font-semibold">Daily reward</p>
                <p className="text-yellow-400">+6,649,000</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Tasks list</h2>
          <div className="p-4 bg-[#1d2025] rounded-2xl flex items-center justify-between">
            <div className="flex items-center">
              <Image src={Telegram} alt="Telegram" className="w-12 h-12 mr-6" />
              <div>
                <p className="font-semibold">Join our TG channel</p>
                <p className="text-yellow-400">+5,000</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="p-4 bg-[#1d2025] rounded-2xl mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <Image src={X} alt="Telegram" className="w-16  h-16 mr-2" />
              <div>
                <p className="font-semibold">Follow our X account</p>
                <p className="text-yellow-400">+5,000</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="p-4 bg-[#1d2025] rounded-2xl mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <Image src={hamsterExchange} alt="Telegram" className="w-12 h-12 mr-6" />
              <div>
                <p className="font-semibold">Choose your exchange</p>
                <p className="text-yellow-400">+5,000</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="p-4 bg-[#1d2025] rounded-2xl mt-2 mb-16 flex items-center justify-between">
            <div className="flex items-center">
              <Image src={InviteFriend} alt="Telegram" className="w-16 h-16 mr-2" />
              <div>
                <p className="font-semibold">Invite 3 Friends</p>
                <p className="text-yellow-400">+5,000</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnMoreCoins;
