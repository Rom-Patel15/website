import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
 
function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <Contact />
    </div>
  );
}
 
export default App;