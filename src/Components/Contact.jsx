import React from "react";
import icon from "../images/bulit-icon.png";

function Contact() {
  return (
    <div className="h-screen w-full">
      <section className="flex flex-col h-auto lg:h-screen w-full items-center justify-evenly">
        <div className="flex flex-col items-center mb-[30px] lg:mb-0">
          <h2 className="text-4xl text-center text-black font-bold">
            GET IN TOUCH
          </h2>
          <img src={icon} className="w-[50px] h-5" />
        </div>
        <section className="flex flex-col">
          <input className="bg-[#EFEFEF]" />
          <input className="bg-[#EFEFEF]" />
          <input className="bg-[#EFEFEF] " />
          <input className="bg-[#EFEFEF] " />
          <button>Send</button>
        </section>
      </section>
    </div>
  );
}

export default Contact;
