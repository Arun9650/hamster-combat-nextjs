"use client";

import Coins from "@/public/icons/Coins";
import Friends from "@/public/icons/Friends";
import Mine from "@/public/icons/Mine";
import { BeeCoin, Bees, binanceLogo, hamsterCoin } from "@/public/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type NavigationItem = {
  name: string;
  icon: JSX.Element;
  link: string;
};

const BottomNavigation = () => {
  const [activeLink, setActiveLink] = useState("/");

  const NavigationItems: NavigationItem[] = [
    {
      name: "Exchange",
      icon: <Image src={binanceLogo} width={34} height={34} alt="Exchange" />,
      link: "/",
    },
    {
      name: "Mine",
      icon: <Mine className="w-8 h-8 mx-auto" />,
      link: "/mine",
    },
    {
      name: "Friends",
      icon: <Friends className="w-8 h-8 mx-auto" />,
      link: "/inviteFriends",
    },
    {
      name: "Earn",
      icon: <Coins className="w-8 h-8 mx-auto" />,
      link: "/EarnMoreCoins",
    },
    {
      name: "AirDrop",
      icon: <Image src={BeeCoin} width={34} height={34} alt="AirDrop" />,
      link: "/AirDrop",
    },
  ];

  const handleRoute = (link: string) => {
    setActiveLink(link);
    route.push(link);
  };

  const route = useRouter();
  return (
    <div className="fixed bottom-0 p-1 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">
      {NavigationItems.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              activeLink === item.link
                ? "bg-[#1c1f24] text-white"
                : "bg-[#272a2f]"
            } p-2  w-full flex items-center justify-center rounded-2xl `}
          >
            <button
              onClick={() => handleRoute(item.link)}
              className={`  text-center   flex items-center justify-center flex-col flex-wrap  text-[#85827d] `}
            >
              <div
                className={`${
                  activeLink === item.link ? " text-white" : ""
                } mx-auto`}
              >
                {item.icon}
              </div>
              <p
                className={`${
                  activeLink === item.link ? " text-white" : ""
                }  mt-1`}
              >
                {item.name}
              </p>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
