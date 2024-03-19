"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BiSolidDownArrow } from "react-icons/bi";
import { MainLogo } from "@/public/image/index";
import { NavItems } from "@/utils/constants";
import Link from "next/link";

export default function Header() {
  const [isTop, setIsTop] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // offset > 73px
      setIsTop(currentScrollPos < 73);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTop, prevScrollPos]);

  return (
    <div
      className={`main_header_wrapper z-[999] bg-primary bg-opacity-15 ${
        !isTop && "main_header_wrapper--resize"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <Image
            src={MainLogo}
            alt="main-logo"
            objectFit="contain"
            className={
              isTop
                ? "max-h-[72.9px] max-w-[110px]"
                : "max-h-[46.266px] max-w-[70px]"
            }
          />
          <ul className="navbar">
            {React.Children.toArray(
              NavItems.map((item) => {
                if (item.sub)
                  return (
                    <li className="nav_item--arrow">
                      <Link
                        href={item.sub[0].url}
                        className={` uppercase before:!border-none ${
                          !isTop && "text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                      <BiSolidDownArrow
                        size={8}
                        className={`${!isTop && "text-white"}`}
                      />
                      <ul className="subnav">
                        {React.Children.toArray(
                          item.sub.map((subItem) => {
                            return (
                              <li className="subnav_item">
                                <Link href={subItem.url}>{subItem.label}</Link>
                              </li>
                            );
                          }),
                        )}
                      </ul>
                    </li>
                  );
                else
                  return (
                    <li className="nav_item">
                      <Link
                        href={item.url}
                        className={`${!isTop && "text-white"} uppercase before:!border-none`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
              }),
            )}
          </ul>
          <div className={`languages ${!isTop && "text-white"}`}>
            <span className="font-bold">VI</span>
            <div className="px-[5px]">
              <BiSolidDownArrow size={8} />
            </div>
            <div className="lang_list">
              <Link
                href="#"
                className="px-[15px] text-[15px] font-bold leading-[22.5px] text-[#363636]"
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
