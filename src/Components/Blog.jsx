import React, { useState } from "react";
import icon from "../images/bulit-icon.png";
import blog1 from "../images/blog-img1.png";
import blog2 from "../images/blog-img2.png";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";

function Blog() {
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

  const cardani = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  const cardani2 = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div ref={element} className=" h-[120vh] lg:h-auto  w-full mb-[100px]">
      <section className="flex flex-col h-auto lg:h-screen w-full items-center ">
        <motion.div
          variants={text}
          animate={controls}
          transition={{
            duration: 0.3,
          }}
          className="flex flex-col items-center mb-[30px] lg:mb-0"
        >
          <h2 className="text-4xl text-center text-black font-bold">
            Our Blog
          </h2>
          <img src={icon} className="w-[50px] h-5" />
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-7 hover01">
          <motion.section
            variants={cardani}
            animate={controls}
            transition={{
              duration: 0.4,
            }}
            className="bg-white w-[90vw] lg:w-[40vw]"
            style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)" }}
          >
            <div className="relative overflow-hidden w-[90vw] lg:w-[40vw]">
              <img
                src="https://ik.imagekit.io/fluxy/CoffeeFolder/blog-img1.png?tr=w-800"
                className="w-[90vw] lg:w-[40vw]"
              />
            </div>
            <h2 className="text-2xl font-bold ml-5 mb-5 mt-5">
              PREP TECHNIQUES COFFEE
            </h2>
            <p className="ml-5 mb-10">
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              moredistracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a more
            </p>
          </motion.section>
          <motion.section
            variants={cardani2}
            animate={controls}
            transition={{
              duration: 0.4,
            }}
            className="bg-white w-[90vw] lg:w-[40vw]"
            style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)" }}
          >
            <div className="relative overflow-hidden w-[90vw] lg:w-[40vw]">
              <img
                src="https://ik.imagekit.io/fluxy/CoffeeFolder/blog-img2.png?tr=w-800"
                className="w-[90vw] lg:w-[40vw]"
              />
            </div>
            <h2 className="text-2xl font-bold ml-5 mb-5 mt-5">
              PREP TECHNIQUES COFFEE
            </h2>
            <p className="ml-5 mb-10">
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              moredistracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a more
            </p>
          </motion.section>
        </div>
      </section>
    </div>
  );
}

export default Blog;
