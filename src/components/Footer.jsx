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
        <div className="flex gap-6 px-6 max-w-md flex-col justify-start ">
          <h1 className="text-[#FFB800] text-4xl font-light font-nunito">
            Erfungraph
          </h1>
          <p className="text-lg font-nunito font-light">
            I also have been a graphic designer for 6 years and my Graphic
            design experience made me a{" "}
            <span className="text-[#FFB800]">pixel perfect</span> frontend
            developer.
          </p>
          <div className="w-full text-white/50 flex flex-row gap-8">
            <a target="_blank" href="https://instagram.com/erfun.dev">
              <FaInstagram
                size={23}
                className="hover:text-[#FFB800] transition-all"
              />
            </a>
            <a target="_blank" href="https://github.com/erfunit">
              <FaGithub
                size={23}
                className="hover:text-[#FFB800] transition-all"
              />
            </a>
            <a
              target="_blank"
              href="https://stackoverflow.com/users/21657915/mohammad-erfan-ghodoosi"
            >
              <FaStackOverflow
                size={23}
                className="hover:text-[#FFB800] transition-all"
              />
            </a>
            <a target="_blank" href="https://t.me/erfundev">
              <FaTelegram
                size={23}
                className="hover:text-[#FFB800] transition-all"
              />
            </a>
            <a target="_blank" href="https://medium.com/@erfungraph99">
              <BsMedium
                size={23}
                className="hover:text-[#FFB800] transition-all"
              />
            </a>
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
      <div className=" h-[1px] bg-white/10 w-[90%] mx-auto"></div>
      <p className="flex flex-row my-3 space-x-2 items-center justify-center font-nunito font-light text-white/30">
        <FaRegCopyright />
        <span>2023 ErfunDev. All Rights Reserved.</span>
      </p>
    </footer>
  );
};

export default Footer;
