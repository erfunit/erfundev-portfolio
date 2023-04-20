import { useContext } from "react";
import { projects } from "./Projects";
import { mouseContext } from "../contexts/mouseContext";
import { FaEye, FaGithub } from "react-icons/fa";

const Works = () => {
  const [hoverable, setHoverable] = useContext(mouseContext);

  return (
    <div id="works" className="">
      <div className="container mx-auto 2xl:max-w-screen-xl px-5 py-20">
        <h1 className=" mb-7 font-nunito font-bold text-white text-4xl ">
          <span className="hidden md:inline-block">Checkout</span> my works
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {/*  */}
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseOver={() => {
                setHoverable((pre) => true);
              }}
              onMouseLeave={() => {
                setHoverable((pre) => false);
              }}
              className="group"
            >
              <div className="overflow-hidden rounded relative border border-white/10 mb-5 ">
                <img
                  src={project.thumbnail}
                  alt=""
                  className="group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute hidden opacity-0 gap-x-3 transition-all group-hover:opacity-100 h-full w-full bg-gray-800/60 z-20 top-0 left-0 md:flex justify-center items-center flex-row">
                  <a
                    target="_black"
                    href={project.githubLink}
                    className="p-4  rounded bg-white/40 text-white transition-all hover:bg-white/60 active:scale-95"
                  >
                    <FaGithub
                      size={25}
                      className="rounded-full opacity-0  scale-50 group-hover:opacity-100 group-hover:scale-100 delay-150 transition-all "
                    />
                  </a>
                  <a
                    target="_black"
                    href="https://github.com/erfunit/grow-with-data"
                    className="p-4 rounded bg-white/40 text-white transition-all hover:bg-white/60 active:scale-95"
                  >
                    <FaEye
                      size={25}
                      className="rounded-full opacity-0  scale-50 group-hover:opacity-100 group-hover:scale-100 delay-100 transition-all "
                    />
                  </a>
                </div>
              </div>
              <span className="font-nunito font-light text-base md:text-lg text-[#828282]">
                {project.techs}
              </span>
              <h2 className="text-[#E9E9E9] font-nunito font-bold text-xl md:text-xl">
                {project.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
