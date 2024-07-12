import React from "react";
import Footer from "../components/Footer";
import img1 from "../images/cauro1.png";
import Carousel from "../components/Caurosel";
import Advert from "../components/Advert";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div>
      <Advert />
      <Header />
      <Carousel />
      <div className="h-32"></div>
      <Footer />
    </div>
  );
};

export default HomePage;
