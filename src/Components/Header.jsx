import React from "react";

function Header() {
  return (
    <div className="bg-white h-screen w-full">
      <div className="bg-[#C79363] absolute right-0 h-screen w-[40vw]" />
      <div className="absolute top-0 left-0 flex w-full h-[20vh]">
        <h1>hi</h1>
      </div>
      <section className="relative top-[20%] ml-10 flex flex-col border-2 border-black w-[35vw]">
        <h1 className="text-5xl">Best Coffee</h1>

        <h1 className="text-5xl">Make your day great with our coffee</h1>
        <p></p>
        <button className="bg-[#110803]">Order Now</button>
      </section>
    </div>
  );
}

export default Header;
