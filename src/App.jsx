import { useEffect, useRef } from "react";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Card from "./Components/Card";
import CoffeeSection from "./Components/CoffeeSection";
import Contact from "./Components/Contact";
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
      multiplier: 0.6,
      inertia: 0.6, // Add inertia effect. Adjust the value as needed (0.0 - 1.0).
      getDirection: true, // Enable drag behavior for direction detection.
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <main ref={myRef} data-scroll-container>
      {/* <CoffeeSection />
      <About />
      <Testimony />
      <Blog /> */}
      <Header />
      <CoffeeSection />
      <About />
      <Testimony />

      <Blog />

      <Footer />
      {/* <Contact />  */}
    </main>
  );
}

export default App;
