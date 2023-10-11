import React from "react";

function Footer() {
  return (
    <div className="w-full h-[50vh] bg-footerbg relative ">
      <section className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center  h-full justify-evenly ">
          <h1 className="text-white md:text-5xl ">Address</h1>
          <p className="text-white md:text-lg">
            here, content here', making it look like readable English. Many
            desktop publishing packages and web page editors now use
          </p>
          <div>
            <label htmlFor="contactUs">Contact us:</label>
            <input
              type="text"
              id="contactUs"
              className="md:w-[40vmax] md:h-[50px] rounded-3xl mb-[20px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
