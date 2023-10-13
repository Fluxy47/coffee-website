import React from "react";
import cup from "../images/cup.png";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";

const text = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

function Header() {
  const [element, controls] = useScroll();
  return (
    <div ref={element} className=" h-screen w-full">
      <div className="bg-[#C79363] hidden lg:inline absolute right-0 h-screen w-[40vw]" />
      <div className="bg-gradient-to-bl from-[#140B06] lg:hidden to-[#C79363]  absolute z-[2] right-0 h-screen w-full" />
      <motion.img
        initial={{ opacity: 0 }}
        variants={text}
        animate={controls}
        transition={{
          duration: 0.7,
        }}
        src="https://ik.imagekit.io/fluxy/CoffeeFolder/cup.png?tr=w-1600"
        className="absolute bottom-[-15%] right-[4%] 2xl:right-[5%] 2xl:bottom-[-12%] z-[4] hidden lg:inline 2xl:w-[2000px] pointer-events-none"
      />
      <div className="absolute z-[50] top-0 left-0 flex w-full ml-[-20px] lg:ml-0  mt-5">
        <svg
          className="ml-7 cursor-pointer"
          height={40}
          id="Layer_2"
          viewBox="0 0 156.28 52.47"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs />
          <g id="OBJECTS">
            <path
              className="cls-5"
              d="M9.78 2.6c1.12 8.23 4.63 33.28 5.94 35.78h47.03l5.27-35.75c.2-1.39-.87-2.63-2.27-2.63H12.06C10.67 0 9.6 1.22 9.79 2.6z"
            />
            <path
              className="cls-5"
              d="M1.03 38.38h74.79c.82 0 1.31.91.86 1.59-2.24 3.38-7.73 10.99-11.88 10.99H13.45c-1.4 0-2.76-.37-3.98-1.06C6.32 48.09.5 44.16 0 39.53c-.07-.62.4-1.16 1.02-1.16zM61.75 34.45c-3.18 0-6.37-.33-9.19-.78l.55-3.53c9.84 1.55 17.3.63 21-2.57 2.09-1.81 3.08-4.34 3.04-7.76-.03-2.7-.89-4.71-2.63-6.12-4.8-3.91-14.49-2.07-14.59-2.06l-.69-3.5c.46-.09 11.42-2.18 17.52 2.78 2.58 2.1 3.91 5.08 3.95 8.86.05 4.47-1.39 8-4.28 10.5-3.66 3.17-9.19 4.17-14.7 4.17z"
            />
            <path d="M15.72 38.38h47.03l.58-3.96-47.61 3.96z" />
            <path
              d="M18.15 28.48a1.58 1.58 0 01-1.82-1.28l-2.45-14.26a1.58 1.58 0 011.28-1.82c.85-.15 1.67.43 1.82 1.28l2.45 14.26c.15.85-.43 1.67-1.28 1.82z"
              fill="#fff"
              opacity=".1"
            />
          </g>
          <text
            id="TEXTS"
            fill="#161009"
            fontFamily="Poppins-SemiBold,'Poppins SemiBold'"
            fontSize="25.67"
            transform="translate(87.22 23.03)"
          >
            <tspan x="0" y="0">
              C
            </tspan>
            <tspan x="14.61" y="0">
              o
            </tspan>
            <tspan x="28.7" y="0">
              ff
            </tspan>
            <tspan x="43.34" y="0">
              ee
            </tspan>
            <tspan x="0" y="23.02">
              Shop
            </tspan>
          </text>
        </svg>
        <div className="lg:flex hidden absolute right-0 lg:right-10 gap-6 m-auto">
          <h2 className="text-lg cursor-pointer font-bold">Menu</h2>
          <h2 className="text-lg cursor-pointer font-bold">About us</h2>
          <h2 className="text-lg cursor-pointer font-bold">Reviews</h2>
          <h2 className="text-lg cursor-pointer font-bold">Blogs</h2>
        </div>
      </div>
      <section className="relative top-[30%] mx-1 lg:ml-10 flex flex-col w-full lg:w-[35vw] z-[3]">
        <h1 className="text-5xl md:text-7xl lg:text-5xl 2xl:text-7xl font-raleway ml-1 italic">
          Best Coffee
        </h1>

        <h1 className=" text-4xl md:text-7xl  text-center lg:text-5xl 2xl:text-7xl mb-4 text-ellipsis  whitespace-nowrap">
          <span className="text-[#C79363]">Make</span> your day{" "}
          <span className="text-[#C79363]">great</span>
          <br />
          with our{""}
          <span className="text-[#C79363] ml-3">coffee</span>
        </h1>
        <p className="mb-6 md:text-2xl mx-3 lg:text-base 2xl:text-lg">
          now use Lorem Ipsum as their default model text, and a search for
          'lorem ipsum' will uncover many web sites still in their infancynow
          use Lorem Ipsum as their default model text,
        </p>
        <button className="bg-gradient-to-r from-[#C79363]  to-[#140B06] hover:bg-blue-700 w-[300px] h-[50px] lg:w-[300px] lg:h-[50px] md:w-[400px] md:h-[70px] 2xl:w-[400px] 2xl:h-[60px]  text-white font-bold py-2 px-4 mx-auto rounded-full z-50">
          Button
        </button>
      </section>
    </div>
  );
}

export default Header;
