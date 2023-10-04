import React from "react";
import clientbg from "../images/client-bg.png";
import icon from "../images/bulit-icon.png";
import client1 from "../images/client-img1.png";
import client2 from "../images/client-img2.png";
import client3 from "../images/client-img3.png";

function Testimony() {
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
    <div className=" h-auto lg:h-[120vh] w-full ">
      <img src={clientbg} className="relative hidden lg:inline" />
      <div className=" relative lg:top-[-100vh] flex flex-col items-center mb-[30px] lg:mb-10">
        <h2 className="text-4xl text-center text-black font-bold">
          What customer says about us
        </h2>
        <img src={icon} className="w-[50px] h-5" />
      </div>
      <section className="relative lg:top-[-100vh]  lg:left-[10%] flex flex-col h-auto lg:h-[90vh] w-full lg:w-[65vw]  items-center">
        <section className="flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row">
            <img src={client1} className="h-[150px] w-[150px] " />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold ml-6 mb-2">Joy Moark</h2>
              <p className="ml-6 text-lg">
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancynow use Lorem Ipsum as their default model text,
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <img src={client2} className="h-[150px] w-[150px] " />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold ml-6 mb-2">Joy Moark</h2>
              <p className="ml-6 text-lg">
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancynow use Lorem Ipsum as their default model text,
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <img src={client3} className="h-[150px] w-[150px]" />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold ml-6 mb-2">Joy Moark</h2>
              <p className="ml-6 text-lg">
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancynow use Lorem Ipsum as their default model text,
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Testimony;
