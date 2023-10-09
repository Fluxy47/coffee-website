import React from "react";
import { motion } from "framer-motion";

function Card({ item }) {
  const { img, title } = item;
  return (
    <div className=" border-none w-[80vw] lg:w-[24vw] mb-7 lg:mb-0 hover01">
      <section className="flex flex-col ">
        <div className="relative overflow-hidden w-[80vw] lg:w-[22vw]">
          <img src={img} className="w-[80vw] lg:w-[22vw]  mb-[20px]" />
        </div>
        <h2 className="text-black uppercase text-2xl text-center mb-[5px]">
          {title}
        </h2>
        <p className="text-black text-center mb-[5px]">
          looking at its layout. The point of
        </p>
        <button>Read More</button>
      </section>
    </div>
  );
}

export default Card;
