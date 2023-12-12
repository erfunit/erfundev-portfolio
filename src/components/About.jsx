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
            bgImage={"/assets/myImage2.jpg"}
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
            I started coding to excel in my school subjects but quickly found a
            passion for creating dynamic, impactful designs. Proficient in{" "}
            <span class="text-[#FFB800]">HTML</span>,{" "}
            <span class="text-[#FFB800]">CSS</span>, and{" "}
            <span class="text-[#FFB800]">JAVASCRIPT</span>, I honed my frontend
            development skills and delved into{" "}
            <span class="text-[#FFB800]">TYPESCRIPT</span> and{" "}
            <span class="text-[#FFB800]">SASS</span> for more robust, scalable
            projects. My journey led me to{" "}
            <span class="text-[#FFB800]">REACT.JS</span> and{" "}
            <span class="text-[#FFB800]">NEXT.JS</span>, where I crafted
            responsive and SEO-friendly user interfaces. I embraced state
            management with <span class="text-[#FFB800]">REDUX</span> and
            <span class="text-[#FFB800]">ZUSTAND</span>, and form management
            with <span class="text-[#FFB800]">REACT HOOK FORM</span>, ensuring
            my designs were not only visually appealing but also functionally
            rich. Collaboration in my projects is streamlined with Git/Github,
            and my use of <span class="text-[#FFB800]">MATERIAL UI</span> and
            <span class="text-[#FFB800]">REACT QUERY</span> adds sophistication
            to my work. Each new skill has been a step towards creating more
            advanced and engaging digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
