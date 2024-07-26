// components/InviteFriends.js

import React from 'react';

const InviteFriends = () => {
  return (
    <div className="p-4 bg-black h-screen text-white  shadow-lg max-w-xl mx-auto">
      <h1 className="text-4xl mt-5 font-bold mx-auto  flex justify-center ">Invite friends!</h1>
      <p className="mb-4  flex justify-center mt-4">You and your friend will receive bonuses</p>
      <div className="space-y-4">
        <div className="p-4 bg-gray-800 rounded-2xl flex items-center justify-between">
          <div className="flex items-center">
            <img src="/gift-icon.png" alt="Gift" className="w-12 h-12 mr-4" />
            <div>
              <p className="font-semibold ">Invite a friend</p>
              <p className="text-yellow-400">+5,000 for you and your friend</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-800 rounded-2xl flex items-center justify-between">
          <div className="flex items-center">
            <img src="/gift-icon.png" alt="Gift" className="w-12 h-12 mr-4" />
            <div>
              <p className="font-semibold text-xl" >Invite a friend with Telegram Premium</p>
              <p className="text-yellow-400">+25,000 for you and your friend</p>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="text-blue-400 mt-4 block text-center">More bonuses</a>
      <h2 className="mt-6 mb-2">List of your friends</h2>
      <div className="bg-gray-800 p-4 rounded-3xl text-center">
        <p className="text-gray-400 p-4">You haven&apos;t invited anyone yet</p>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <button className="bg-blue-600 py-4 px-4 rounded-2xl w-full semi-bold text-2xl ">Invite a friend</button>
        <button className="bg-blue-600 py-2 px-4 rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 14h.01M12 10h.01M7 20h.01M7 16h.01M7 12h.01M7 8h.01M7 4h.01M16 20h.01M16 16h.01M16 12h.01M16 8h.01M16 4h.01M20 8h.01M20 4h.01M20 12h.01M20 16h.01M20 20h.01" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InviteFriends;
