import React from "react";
import clientbg from "../images/client-bg.png";
import icon from "../images/bulit-icon.png";
import client1 from "../images/client-img1.png";
import client2 from "../images/client-img2.png";
import client3 from "../images/client-img3.png";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";

function Testimony() {
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

  const childVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    // <div className="h-screen w-full ">
    //   <img src={clientbg} className="absolute" />
    //   <section className="relative flex flex-col border-4 border-[yellow]">
    //     <div className="flex flex-col items-center">
    //       <h2 className="text-4xl text-center text-black font-bold">
    //         OUR COFFEE OFFER
    //       </h2>
    //       <img src={icon} className="w-[50px] h-5" />
    //     </div>
    //   </section>
    // </div>
    <div ref={element} className=" h-auto lg:h-[120vh] w-full ">
      <img src={clientbg} className="fixed hidden lg:inline" />
      <motion.div
        variants={text}
        animate={controls}
        transition={{
          duration: 0.3,
        }}
        className=" relative  flex flex-col items-center mb-[30px]  lg:mb-10"
      >
        <h2 className="text-4xl text-center text-black font-bold">
          What customer says about us
        </h2>
        <img src={icon} className="w-[50px] h-5" />
      </motion.div>
      <section className="relative lg:left-[10%] flex flex-col h-auto lg:h-[90vh] w-full lg:w-[65vw]  items-center">
        <section className="flex flex-col gap-5 2xl:gap-7">
          <motion.div
            variants={childVariants}
            animate={controls}
            transition={{
              duration: 0.3,
            }}
            className="flex flex-col lg:flex-row"
          >
            <img src={client1} className="h-[150px] w-[150px] 2xl:h-[200px] 2xl:w-[200px] " />
            <div className="flex flex-col">
              <h2 className="text-2xl 2xl:text-3xl font-bold ml-6 mb-2">Joy Moark</h2>
              <p className="ml-6 text-lg ">
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancynow use Lorem Ipsum as their default model text,
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={childVariants}
            animate={controls}
            transition={{
              duration: 0.3,
              delay: 0.2,
            }}
            className="flex flex-col lg:flex-row"
          >
            <img src={client2} className="h-[150px] w-[150px] 2xl:h-[200px] 2xl:w-[200px] " />
            <div className="flex flex-col">
              <h2 className="text-2xl 2xl:text-3xl font-bold ml-6 mb-2">Joy Moark</h2>
              <p className="ml-6 text-lg">
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancynow use Lorem Ipsum as their default model text,
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={childVariants}
            animate={controls}
            transition={{
              duration: 0.3,
              delay: 0.4,
            }}
            className="flex flex-col lg:flex-row"
          >
            <img src={client3} className="h-[150px] w-[150px] 2xl:h-[200px] 2xl:w-[200px] " />
            <div className="flex flex-col">
              <h2 className="text-2xl 2xl:text-3xl font-bold ml-6 mb-2">Joy Moark</h2>
              <p className="ml-6 text-lg">
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancynow use Lorem Ipsum as their default model text,
              </p>
            </div>
          </motion.div>
        </section>
      </section>
    </div>
  );
}

export default Testimony;
