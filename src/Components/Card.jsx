import React from "react";

function Card({ item }) {
  const { img, title } = item;
  return (
    <div className="bg-white w-[80vw] lg:w-[24vw] mb-7 lg:mb-0">
      <div className="flex flex-col ">
        <img src={img} className="w-[80vw] lg:w-[22vw]  mb-[20px]" />
        <h2 className="text-black uppercase text-2xl text-center mb-[5px]">
          {title}
        </h2>
        <p className="text-black text-center mb-[5px]">
          looking at its layout. The point of
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
  s;
}

export default Card;
