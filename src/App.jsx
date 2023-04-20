import React, { useContext, useEffect } from "react";
import { mouseContext } from "./contexts/mouseContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { useState } from "react";
import ScrollBar from "./components/ScrollBar";

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverable] = useContext(mouseContext);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    scrollTo(App);
    if (hoverable) {
      setScale("2");
    } else {
      setScale("1");
    }
  }, [hoverable]);

  const mouseMoveHandler = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const mouseDown = () => {
    setScale("0.7");
  };

  const mouseUp = () => {
    setScale("1");
  };

  const cursroStyle = {
    scale: scale,
    width: "7px",
    height: "7px",
    backgroundColor: "#FFB800",
    position: "fixed",
    borderRadius: "50%",
    left: position.x + 5 + "px",
    top: position.y + 5 + "px",
    transition: "scale 0.2s",
    boxShadow: " 0 0 30px 5px #FFB80065",
    zIndex: "100",
  };

  return (
    <div
      onMouseDown={() => mouseDown()}
      onMouseUp={() => mouseUp()}
      onMouseMove={(e) => mouseMoveHandler(e)}
      className="cursor-none "
    >
      <div style={cursroStyle} className=" md:inline-block hidden"></div>
      <ScrollBar />
      <Navbar />
      <Hero />
      <About />
      <Works />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
