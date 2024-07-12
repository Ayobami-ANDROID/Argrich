import React from "react";
import Footer from "../components/Footer";
import img1 from "../images/cauro1.png";
import Carousel from "../components/Caurosel";

const HomePage = () => {
  return (
    <div>
      {/* <div className="w-full h-[20rem] bg-red-500">
        <img src={img1} alt="" className="object-cover  "/>
      </div> */}
      <Carousel />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
