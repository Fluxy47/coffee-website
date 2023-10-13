import React from "react";

function Footer() {
  return (

    <div className="w-full h-[50vh] bg-footerbg relative ">
      <section className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center  h-full  justify-evenly ">
          <h1 className="text-white text-3xl md:text-5xl ">Address</h1>
          <p className="text-white md:text-lg mx-3">

            here, content here', making it look like readable English. Many
            desktop publishing packages and web page editors now use
          </p>
          <div className="">
            <input
              type="text"
              id="contactUs"
              className=" w-[300px] h-[40px] md:w-[40vmax] md:h-[50px] rounded-3xl mb-[20px]"
              placeholder="Contact Us"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
