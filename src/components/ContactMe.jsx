import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import loadingImage from "/public/assets/icons/loading.svg";
import { motion } from "framer-motion";

const ContactMe = () => {
  const form = useRef(null);
  const [email, setEmail] = useState("");
  const [subjecet, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoaing] = useState(false);

  const formSubmit = (e) => {
    if (email === "" || subjecet === "" || content === "") {
      alert("you have to fill in all the fields!");
      return;
    }
    e.preventDefault();
    setLoaing(() => true);
    emailjs
      .sendForm(
        "service_em8jaiy",
        "template_k0v2m4o",
        form.current,
        "0WK1WzLCaEXl-VcU0"
      )
      .then(
        (result) => {
          setLoaing(() => false);
          setEmail("");
          setSubject("");
          setContent("");
        },
        (error) => {}
      );
  };

  return (
    <div id="contact" className="bg-[#151515]">
      <div className="container px-6 flex flex-col md:flex-row items-center gap-14 justify-center py-20  mx-auto 2xl:max-w-screen-xl">
        <div className="text-left">
          <p className="text-[#858585] font-nunito text-xl">
            if you think I can make it better for you,
          </p>
          <h1 className="text-white font-nunito text-4xl  font-bold">
            Let me know about your next project.
          </h1>
        </div>
        <form
          ref={form}
          method="get"
          onSubmit={(e) => formSubmit(e)}
          className="flex items-start w-full md:w-8/12 max-w-lg flex-col gap-3"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            autoFocus
            autoComplete="off"
            className="p-2 rounded accent-[#FFB800] font-nunito w-full font-light bg-[#E8E8E8] focus:bg-white transition-all outline-none "
            type="email"
            placeholder="YourEmail@gmail.com"
            name="email"
            id="email"
          />
          <input
            onChange={(e) => setSubject(e.target.value)}
            value={subjecet}
            autoComplete="off"
            className="p-2 rounded accent-[#FFB800] font-nunito w-full font-light bg-[#E8E8E8] focus:bg-white transition-all outline-none "
            type="text"
            name="projectSubject"
            id="project-subject"
            placeholder="Your project subject..."
          />
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            autoComplete="off"
            className="p-2 rounded accent-[#FFB800] font-nunito w-full font-light bg-[#E8E8E8] focus:bg-white transition-all outline-none  resize-none"
            name="Project_summary"
            id="Project-summary"
            cols="30"
            rows="10"
            placeholder="Your project summary..."
          ></textarea>
          <button className="cursor-none flex flex-row active:scale-95 bg-[#FFB800] px-10 py-3 font-nunito hover:bg-[#e2a303] transition-all  font-bold rounded">
            <span>Send it!</span>
            {loading ? (
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                src={loadingImage}
                alt=""
                className="w-5 ml-3 animate-spin"
              />
            ) : null}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
