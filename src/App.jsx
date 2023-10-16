import { useEffect, useRef } from "react";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Card from "./Components/Card";
import CoffeeSection from "./Components/CoffeeSection";
import imagesLoaded from "imagesloaded";
import Header from "./Components/Header";
import Testimony from "./Components/Testimony";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./Components/Footer";

function App() {
  const myRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: myRef.current,
      smooth: true,
      mobile: {
        smooth: false,
      },
      tablet: {
        smooth: false,
      },
      multiplier: 0.6,
      inertia: 0.6, // Add inertia effect. Adjust the value as needed (0.0 - 1.0).
      getDirection: true, // Enable drag behavior for direction detection.
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  const width = window.innerWidth;
  const height = window.innerHeight;
  console.log("width:", width, "height:", height);

  return (
    <main
      className="bg-[#E9E0C3]  overflow-hidden"
      ref={myRef}
      data-scroll-container
    >
      <section data-scroll-section>
        <Header />
      </section>
      <section data-scroll-section>
        <CoffeeSection />
      </section>
      <section data-scroll-section>
        <About />
      </section>
      <section data-scroll-section>
        <Testimony />
      </section>
      <section data-scroll-section>
        <Blog />
      </section>
      <section data-scroll-section>
        <Footer />
      </section>
    </main>
  );
}

export default App;
