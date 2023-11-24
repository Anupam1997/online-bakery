import React from "react";
import Header from "../Header";
import BanerSection from "../Banner";
import About from "../About";
import Products from "../Products";
import Gallery from "../Gallery";
import GetInTouch from "../GetInTouch";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <BanerSection />
      <About />
      <Products />
      <Gallery />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default Home;
