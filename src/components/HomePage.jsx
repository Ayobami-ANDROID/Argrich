import React from "react";
import Carousel from "./Caurosel";
import Categories from "./Categories";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {" "}
      <Carousel />
      <div className="px-10">
        <Categories/>
      </div>
    </div>
  );
};

export default HomePage;
