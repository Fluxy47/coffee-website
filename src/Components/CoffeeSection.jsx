import React from "react";
import icon from "../images/bulit-icon.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../images/img-1.png";
import img2 from "../images/img-2.png";
import img3 from "../images/img-3.png";
import img4 from "../images/img-4.png";
import Card from "./Card";

function CoffeeSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const items = [
    { img: img1, title: "Types of coffee" },
    { img: img2, title: "Bean Varieties" },
    { img: img3, title: "coffee and pastery" },
    { img: img4, title: "cofffee to go" },
  ];

  return (
    // <section className="flex flex-col w-[100vw] overflow-hidden h-screen  items-center justify-evenly ">
    //   <div className="flex flex-col items-center">
    //     <h2 className="text-4xl text-center text-black font-bold">
    //       OUR COFFEE OFFER
    //     </h2>
    //     <img src={icon} className="w-[50px] h-5" />
    //   </div>
    //   <div className="w-full">
    //     <Carousel className=" mx-10" infinite={true} responsive={responsive}>
    //       {items.map((item, idx) => (
    //         <Card key={idx} item={item} />
    //       ))}
    //     </Carousel>
    //   </div>
    // </section>
    <div className="h-auto w-full">
      <section className="flex flex-col h-auto lg:h-screen w-full items-center justify-evenly">
        <div className="flex flex-col items-center mb-[30px] lg:mb-0">
          <h2 className="text-4xl text-center text-black font-bold">
            OUR COFFEE OFFER
          </h2>
          <img src={icon} className="w-[50px] h-5" />
        </div>
        <div className="w-full hidden lg:inline">
          <Carousel className="ml-11" infinite={true} responsive={responsive}>
            {items.map((item, idx) => (
              <Card key={idx} item={item} />
            ))}
          </Carousel>
        </div>

        <div className="flex-col lg:hidden h-auto ">
          {items.map((item, idx) => (
            <Card key={idx} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default CoffeeSection;
