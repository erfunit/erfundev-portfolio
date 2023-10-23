import React, { useState, useContext } from "react";
import { mouseContext } from "../contexts/mouseContext";
import mailIcon from "/public/assets/Icons/mail.svg";

const Navbar = () => {
  const [hoverabel, setHoverable] = useContext(mouseContext);
  const [navOpened, setNavOpened] = useState(false);
  const [navBack, setNavBack] = useState(false);

  window.addEventListener("scroll", () => {
    if (scrollY > 130) {
      setNavBack(() => true);
    } else {
      setNavBack(() => false);
    }
  });

  return (
    <div
      className={`fixed z-50 transition-all duration-500 border-b backdrop-blur-md w-full top-0 ${
        navBack ? "bg-black/80 border-white/10" : "bg-black/0 border-white/0"
      }`}
    >
      <header
        className={`p-4 2xl:max-w-screen-2xl mx-auto flex flex-row justify-between items-center`}
      >
        <div
          onClick={() => setNavOpened((pre) => !pre)}
          className={`cursor-pointer z-20 md:hidden  w-6 h-6 relative active:scale-75 transition-all flex flex-col justify-evenly`}
        >
          <div
            className={`h-[1px] w-[100%] ${
              navOpened ? "rotate-45 absolute" : ""
            } rounded-full transition-all bg-white`}
          />
          <div
            className={`h-[1px] ${
              navOpened ? "w-0 opacity-0" : "w-[80%] opacity-100"
            } rounded-full transition-all bg-white`}
            s
          />
          <div
            className={`h-[1px] ${
              navOpened ? "w-[100%] -rotate-45 absolute" : "w-[70%]"
            } rounded-full transition-all bg-white`}
          />
        </div>
        <h1 className="text-[#FFB800] text-2xl font-nunito font-light">
          Erfundev
        </h1>
        <nav className="text-white/70 hidden md:block text-lg font-light font-nunito">
          <ul className="flex flex-row gap-8">
            <li
              onMouseOver={() => {
                setHoverable((pre) => true);
              }}
              onMouseLeave={() => {
                setHoverable((pre) => false);
              }}
              className="relative after:absolute after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:bg-white/70 after:top-7"
            >
              <a href="#home">Home</a>
            </li>
            <li
              onMouseOver={() => {
                setHoverable((pre) => true);
              }}
              onMouseLeave={() => {
                setHoverable((pre) => false);
              }}
              className="relative after:absolute after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:bg-white/70 after:top-7"
            >
              <a href="#about">About</a>
            </li>
            <li
              onMouseOver={() => {
                setHoverable((pre) => true);
              }}
              onMouseLeave={() => {
                setHoverable((pre) => false);
              }}
              className="relative after:absolute after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:bg-white/70 after:top-7"
            >
              <a href="#works">Works</a>
            </li>
            <li
              onMouseOver={() => {
                setHoverable((pre) => true);
              }}
              onMouseLeave={() => {
                setHoverable((pre) => false);
              }}
              className="relative after:absolute after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:bg-white/70 after:top-7"
            >
              <a href="#contact">Contact me</a>
            </li>
          </ul>
        </nav>
        <a
          onMouseOver={() => {
            setHoverable((pre) => true);
          }}
          onMouseLeave={() => {
            setHoverable((pre) => false);
          }}
          href="mailto: erfunghodoosi@gmail.com"
          className="border p-3 rounded-full active:scale-75 transition-all border-[#292929] bg-[#141414]"
        >
          <img src={mailIcon} alt="mail-icon" className="md:hidden" />
          <span className="text-white/70 mx-5 hidden md:block">Email</span>
        </a>
      </header>
      <div
        className={`bg-[#161616] md:hidden h-screen ${
          navOpened ? "w-full" : "w-0"
        } fixed top-0 h-screen  left-0 z-10 overflow-hidden transition-all  flex flex-row justify-center items-center `}
      >
        <nav className="text-white flex w-1/3 flex-col gap-5 text-3xl font-light">
          <a
            onClick={() => setNavOpened((pre) => !pre)}
            href="#home"
            className="relative text-[#FFB800] after:h-[1px] after:top-[50px] after:left-0 after:w-full after:absolute after:bg-[#212121] "
          >
            Home
          </a>
          <a
            onClick={() => setNavOpened((pre) => !pre)}
            href="#about"
            className="relative after:h-[1px] after:top-[50px] after:left-0 after:w-full after:absolute after:bg-[#212121] "
          >
            About
          </a>
          <a
            onClick={() => setNavOpened((pre) => !pre)}
            href="#contact"
            className="relative after:h-[1px] after:top-[50px] after:left-0 after:w-full after:absolute after:bg-[#212121] "
          >
            Contact
          </a>
          <a
            onClick={() => setNavOpened((pre) => !pre)}
            href="#works"
            className=""
          >
            Works
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
