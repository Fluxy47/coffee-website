import About from "./Components/About";
import Blog from "./Components/Blog";
import Card from "./Components/Card";
import CoffeeSection from "./Components/CoffeeSection";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Testimony from "./Components/Testimony";

function App() {
  return (
    <>
      {/* <CoffeeSection />
      <About />
      <Testimony />
      <Blog /> */}
      <Header />
      <CoffeeSection />
      <About />
      <Testimony />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
