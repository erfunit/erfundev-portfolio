import React from "react";
import { motion } from "framer-motion";
import Typed from "react-typed";

import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { skillsIconsList } from "./skills";

const Hero = () => {
  return (
    <MouseParallaxContainer className="h-screen">
      <div
        id="hero"
        className="container flex-col mx-auto gap-5 sm:gap-8 md:gap-16 md:flex-row h-full flex justify-center items-center"
      >
        <div
          style={{ paddingTop: "40%" }}
          className="w-2/5 aspect-ratio h-0 mx-auto relative md:hidden border rounded-full border-[#FFB800]"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={"/assets/myImage.jpg"}
            className="w-full rounded-full absolute bottom-1 right-1"
            alt=""
          />
        </div>
        <div className="_info relative flex px-4 gap-1 items-center md:items-start flex-col font-nunito">
          <img
            src={"/assets/icons/dots2.svg"}
            className="w-28 absolute -top-11 -left-10"
            alt=""
          />
          <span className="flex flex-row items-center gap-1">
            <Typed
              strings={["Hi! my name is Erfun."]}
              typeSpeed={60}
              className="text-white/40 font-light text-base md:text-2xl"
            />
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 2 }}
              src={"/assets/hand.svg"}
              alt="Hi"
            />
          </span>
          <h1 className="text-3xl text-center md:text-start mx-3 md:mx-0  md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold">
            A Skilled and Efficient
            <br className="hidden md:block" /> Frontend developer
          </h1>
          <div className="flex max-w-lg h-14 flex-wrap flex-row mt-2 gap-3 justify-center md:justify-start w-full">
            {skillsIconsList.map((skill) => (
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: skill.duration, delay: skill.delay }}
                src={skill.src}
                alt={skill.title}
                className="w-12 object-contain "
              />
            ))}
          </div>
          <a
            href="/#about"
            className="relative flex flex-row items-center gap-2 top-32"
          >
            <img
              src={"public/assets/icons/down.svg"}
              className="animate-bounce w-3"
              alt=""
            />
            <span className="font-light text-lg text-white/50">
              Scroll down
            </span>
          </a>
        </div>

        <motion.div className="w-1/4 aspect-ratio h-0 pt-[40%] sm:w-2/5 lg:w-1/5 lg:pt-[20%] relative border hidden md:block rounded-full border-[#FFB800]">
          <MouseParallaxChild factorX={0.02} factorY={0.04}>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              src={"/assets/myImage.jpg"}
              className="absolute rounded-full bottom-0 right-0"
              alt="Erfun Ghodoosi"
            />
          </MouseParallaxChild>
        </motion.div>
      </div>
    </MouseParallaxContainer>
  );
};

export default Hero;
