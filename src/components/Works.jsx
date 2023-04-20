import { useContext } from "react";
import todoThumbnail from "../assets/todo.jpg";
import hooBank from "../assets/hoobank.jpg";
import growWithData from "../assets/growithdata.jpg";
import { mouseContext } from "../contexts/mouseContext";

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
          <div
            onMouseOver={() => {
              setHoverable((pre) => true);
            }}
            onMouseLeave={() => {
              setHoverable((pre) => false);
            }}
            className="group"
          >
            <div className="overflow-hidden mb-5 rounded">
              <img
                src={todoThumbnail}
                alt=""
                className="group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <span className="font-nunito font-light text-base md:text-lg text-[#828282]">
              ReactJS / Tailwindcss
            </span>
            <h2 className="text-[#E9E9E9] font-nunito font-bold text-xl md:text-xl">
              todo application
            </h2>
          </div>
          {/*  */}
          <div
            onMouseOver={() => {
              setHoverable((pre) => true);
            }}
            onMouseLeave={() => {
              setHoverable((pre) => false);
            }}
            className="group"
          >
            <div className="overflow-hidden mb-5 rounded">
              <img
                src={hooBank}
                alt=""
                className="group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <span className="font-nunito font-light text-base md:text-lg text-[#828282]">
              ReactJS / Tailwindcss
            </span>
            <h2 className="text-[#E9E9E9] font-nunito font-bold text-xl md:text-xl">
              Hoobank UI implementation
            </h2>
          </div>
          {/*  */}
          <div
            onMouseOver={() => {
              setHoverable((pre) => true);
            }}
            onMouseLeave={() => {
              setHoverable((pre) => false);
            }}
            className="group"
          >
            <div className="overflow-hidden mb-5 rounded">
              <img
                src={growWithData}
                alt=""
                className="group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <span className="font-nunito font-light text-base md:text-lg text-[#828282]">
              ReactJS / Tailwindcss
            </span>
            <h2 className="text-[#E9E9E9] font-nunito font-bold text-xl md:text-xl">
              Grow with data UI implementation
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
