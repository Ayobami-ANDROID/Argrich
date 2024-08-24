import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import img from "../../images/potted_plant.svg";
gsap.registerPlugin(ScrollTrigger);
const Farming = () => {

useGSAP(() => {
  gsap.from('#farming2',{
    opacity:0,
    y:100,
    stagger:0.1,
    scrollTrigger:{
      trigger:'#farming-container',
      start:'top 75%',
      end:'bottom 75%',
      // markers:true,
      toggleActions: "play pause reverse pause",

    },
    ease:'power1.in'
  })
},[])
  return (
    <div>
      <div className="max-w-[847px] mx-auto flex flex-col items-center justify-center gap-4 mt-20" id="farming-container">
        <div className="bg-[#E9FFD5] rounded-full h-16 w-16 flex items-center justify-center">
          <img src={img} alt="" />
        </div>
        <p className="font-manrope font-bold text-[32px] text-[#1A420E] mt-2 " >
          We're committed to sustainable farming.{" "}
        </p>
        <p className="text-[#6C6C6C] text-center font-medium text-[20px]" id="farming2">
          Our operations adhere to the strictest international standards to
          ensure that our products are not only of the highest quality but also
          produced in harmony with nature. We believe in nurturing the land
          while providing exceptional products.{" "}
        </p>
      </div>
    </div>
  );
};

export default Farming;
