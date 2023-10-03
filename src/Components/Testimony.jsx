import React from "react";
import clientbg from "../images/client-bg.png";
import icon from "../images/bulit-icon.png";
import client1 from "../images/client-img1.png";

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
    <div className="h-screen w-full">
      <img src={clientbg} className="relative" />
      <section className="relative top-[-100vh] left-[10%] flex flex-col h-[90vh] w-[70vw] border-4 border-black items-center">
        <div className="flex flex-col items-center mb-[30px] lg:mb-0">
          <h2 className="text-4xl text-center text-black font-bold">
            What customer says about us
          </h2>
          <img src={icon} className="w-[50px] h-5" />
        </div>
        <section className="flex flex-col">
          <div className="flex">
            <img src={client1} />
            <div className="flex flex-col">
              <h2>Joy Moark</h2>
              <p>
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
