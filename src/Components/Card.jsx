import React from "react";
import { motion } from "framer-motion";

function Card({ item }) {
  const { img, title } = item;
  return (
    <div className=" border-none w-[80vw] lg:w-[24vw] mb-7 lg:mb-0 hover01">
      <section className="flex flex-col ">
        <div className="relative z-[2] overflow-hidden w-[80vw] lg:w-[24vw]">
          <img src={img} className="w-[80vw] lg:w-[24vw] mb-[20px]" />
        </div>
        <h2 className="text-black uppercase text-2xl text-center mb-[5px]">
          {title}
        </h2>
        <p className="text-black text-center mb-[5px]">
          looking at its layout. The point of
        </p>
        <button className="bg-gradient-to-r from-[#C79363]  to-[#140B06] w-[200px] mb-[20px] mt-[10px] text-white font-bold py-2 px-4 mx-auto rounded-full z-50">
          Button
        </button>
      </section>
    </div>
  );
}

export default Card;
