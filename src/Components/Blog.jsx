import React from "react";
import icon from "../images/bulit-icon.png";
import blog1 from "../images/blog-img1.png";
import blog2 from "../images/blog-img2.png";

function Blog() {
  return (
    // <div className="h-screen w-full">
    //   <section className="flex flex-col  h-screen  items-center justify-evenly ">
    //     <div className="flex flex-col items-center">
    //       <h2 className="text-4xl text-center text-black font-bold">
    //         OUR COFFEE OFFER
    //       </h2>
    //       <img src={icon} className="w-[50px] h-5" />
    //     </div>
    //   </section>
    // </div>
    <div className="h-screen w-full">
      <section className="flex flex-col h-auto lg:h-screen w-full items-center justify-evenly">
        <div className="flex flex-col items-center mb-[30px] lg:mb-0">
          <h2 className="text-4xl text-center text-black font-bold">
            Our Blog
          </h2>
          <img src={icon} className="w-[50px] h-5" />
        </div>
        <div className="flex gap-7">
          <section
            className="bg-white w-[40vw]"
            style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)" }}
          >
            <img src={blog1} className="w-[40vw]" />
            <h2>PREP TECHNIQUES COFFEE</h2>
            <p>
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              moredistracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a more
            </p>
          </section>
          <section
            className="bg-white w-[40vw]"
            style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)" }}
          >
            {" "}
            <img src={blog2} className="w-[40vw]" />
            <h2>PREP TECHNIQUES COFFEE</h2>
            <p>
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              moredistracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a more
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Blog;
