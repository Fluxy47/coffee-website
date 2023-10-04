import React from "react";
import icon from "../images/bulit-icon.png";
import aboutimg from "../images/about-img.png";

function About() {
  return (
    // <div className="flex flex-col h-screen w-full justify-evenly overflow-hidden">
    //   <div className="flex flex-col items-center ">
    //     <h2 className="text-4xl text-center text-black font-bold">
    //       ABOUT OUR SHOP
    //     </h2>
    //     <img src={icon} className="w-[50px] h-5" />
    //   </div>
    //   <div className="flex w-full h-[80vh]">
    //     <section
    //       className="w-[90vmin] h-[60vmin] bg-white relative left-[10%] top-10 z-[2]"
    //       style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)" }}
    //     >
    //       <div className="flex flex-col h-full justify-evenly">
    //         <h2>Coffee distribution </h2>
    //         <p>
    //           has a more-or-less normal distribution of letters, as opposed to
    //           using 'Content here, content here', making it look like readable
    //           English. Many desktop publishing packages and web page editorhas a
    //           more-or-less normal distribution of letters, as opposed to using
    //           'Content here, content here', making it look like readable
    //           English. Many desktop publishing packages and web page editor
    //         </p>

    //         <button>Read more</button>
    //       </div>
    //     </section>
    //     <img src={aboutimg} className="relative right-[10%]" />
    //   </div>
    // </div>
    <div className="h-screen w-full ">
      <section className="flex flex-col  h-auto lg:h-screen w-full items-center justify-evenly ">
        <div className="flex flex-col items-center mb-[30px] lg:mb-0">
          <h2 className="text-4xl text-center text-black font-bold">
            ABOUT OUR SHOP
          </h2>
          <img src={icon} className="w-[50px] h-5" />
        </div>
        <div className="border-4 border-black flex w-full h-[70vh]">
          <section
            className="w-[70vmin] h-[50vmin] bg-white relative left-[10%] top-10 z-[2]"
            style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)" }}
          >
            <div className="flex flex-col h-full justify-evenly">
              <h2>Coffee distribution </h2>
              <p>
                has a more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editorhas
                a more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editor
              </p>

              <button>Read more</button>
            </div>
          </section>
          <img src={aboutimg} className="hidden lg:inline" />
        </div>
      </section>
    </div>
  );
}

export default About;
