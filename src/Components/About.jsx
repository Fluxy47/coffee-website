import React from "react";
import icon from "../images/bulit-icon.png";
import aboutimg from "../images/about-img.png";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";

function About() {
  const [element, controls] = useScroll();

  const text = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
    },
  };
  const text1 = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
    },
  };
  const imgani = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    show: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div ref={element} className="h-screen w-full mb-7">
      <section className="flex flex-col  h-auto lg:h-screen w-full items-center justify-evenly ">
        <motion.div
          variants={text}
          animate={controls}
          transition={{
            duration: 0.3,
          }}
          className="flex flex-col items-center mb-[50px] lg:mb-0"
        >
          <h2 className="text-4xl text-center text-black font-bold">
            ABOUT OUR SHOP
          </h2>
          <img src={icon} className="w-[50px] h-5" />
        </motion.div>
        <div className="flex flex-col-reverse lg:flex-row w-full lg:h-[70vh]">
          <motion.section
            variants={text1}
            animate={controls}
            transition={{
              duration: 0.5,
            }}
            className=" w-full lg:w-[40vmax] lg:h-[30vmax]  bg-white lg:relative left-[15%] top-10 z-[2]"
            style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)" }}
          >
            <div className="flex flex-col h-full justify-evenly bg-gradient-to-bl from-[#140B06]  via-[#A56E3B] to-[#140B06]">
              <h2 className="ml-2 text-3xl">Coffee distribution </h2>
              <p className="mx-3 lg:text-lg">
                has a more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editorhas
                a more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editor
              </p>

              <button className="bg-gradient-to-r from-[#C79363]  to-[#140B06] w-[200px] text-white font-bold py-2 px-4 mx-auto rounded-full">
                Button
              </button>
            </div>
          </motion.section>
          <motion.img
            variants={imgani}
            animate={controls}
            transition={{
              duration: 0.5,
            }}
            src={aboutimg}
            className="w-full lg:w-auto object-contain "
          />
        </div>
      </section>
    </div>
  );
}

export default About;
