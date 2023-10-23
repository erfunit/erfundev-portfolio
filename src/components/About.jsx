import myImage from "../../public/assets/myImage2.jpg";
import { Parallax } from "react-parallax";

const About = () => {
  return (
    <div
      id="about"
      className=" h-auto py-10 w-full flex justify-center items-center bg-[#151515]"
    >
      <div className="container mx-auto grid md:grid-cols-2 items-center  gap-10 px-6 2xl:max-w-screen-xl">
        <div className="w-full flex justify-center h-full">
          <Parallax
            className="w-10/12  aspect-square h-full"
            strength={250}
            bgImage={myImage}
            alt=""
          />
        </div>
        <div>
          <h1 className="font-nunito flex flex-col mb-4 items-start font-bold text-white text-4xl">
            <span className="hidden text-lg md:flex items-center gap-[6px]  flex-row font-light text-white/30">
              <div className="w-[18px] rounded-full h-[7px] bg-[#FFB800]"></div>{" "}
              Know a little bit more
            </span>{" "}
            <span>About me</span>
          </h1>
          <p className="font-nunito text-[#aaa] leading-7 font-light text-xl ">
            I started coding to pass my school subjects, but I quickly realized
            that I had a passion for creating dynamic designs that could make a
            real difference. I focused on learning frontend development and
            became proficient in <span className="text-[#FFB800]">HTML</span>,{" "}
            <span className="text-[#FFB800]">CSS</span>, and{" "}
            <span className="text-[#FFB800]">JavaScript</span>. To take my
            skills to the next level, I also learned preprocessors and libraries
            such as
            <span className="text-[#FFB800]"> SASS</span>,{" "}
            <span className="text-[#FFB800]">ReactJS</span>, and{" "}
            <span className="text-[#FFB800]">Tailwind</span>. With each new
            skill I acquired, I created more impressive designs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
