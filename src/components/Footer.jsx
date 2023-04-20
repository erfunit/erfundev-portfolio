import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaStackOverflow,
  FaTelegram,
  FaRegCopyright,
} from "react-icons/fa";

import { BsMedium } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="container 2xl:max-w-screen-xl mx-auto py-10 sm:py-12 md:py-20 grid grid-cols-1 md:grid-cols-2">
        <div className="flex gap-10 px-6 max-w-md flex-col justify-start ">
          <h1 className="text-[#FFB800] text-4xl font-light font-nunito">
            ErfunDev
          </h1>
          <p className="text-lg font-nunito font-light">
            I also have been a graphic designer for 6 years and my Graphic
            design experience made me a{" "}
            <span className="text-[#FFB800]">pixel perfect</span> frontend
            developer.
          </p>
          <div className="w-full text-white/50 flex flex-row justify-between">
            <FaInstagram
              size={23}
              className="hover:text-[#FFB800] transition-all"
            />
            <FaGithub
              size={23}
              className="hover:text-[#FFB800] transition-all"
            />
            <FaStackOverflow
              size={23}
              className="hover:text-[#FFB800] transition-all"
            />
            <FaTelegram
              size={23}
              className="hover:text-[#FFB800] transition-all"
            />
            <BsMedium
              size={23}
              className="hover:text-[#FFB800] transition-all"
            />
          </div>
        </div>
        <div className="space-y-6 px-5 mt-8">
          <h2 className="text-xl font-nunito text-white">
            Some of my medium posts
          </h2>
          <ul className="text-white/70 flex flex-col gap-3 font-nunito font-light text-lg">
            <li
              className="hover:text-white/100 transition-all
            "
            >
              <a
                target="_blank"
                href="https://medium.com/@erfungraph99/5-tips-to-get-rid-of-procrastinating-productivity-31297ba2d58a"
              >
                -4 tips to get rid of procrastinating productivity
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" h-[1px] bg-white/50 w-[90%] mx-auto"></div>
      <p className="flex flex-row my-3 space-x-2 items-center justify-center font-nunito font-light text-white/50">
        <FaRegCopyright />
        <span>2023 ErfunDev. All Rights Reserved.</span>
      </p>
    </footer>
  );
};

export default Footer;
