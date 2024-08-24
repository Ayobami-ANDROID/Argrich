import React from "react"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Address = () => {
    useGSAP(() => {
        gsap.from("#test", {
          y: "100%",
          opacity: 0,
        
          scrollTrigger: {
            trigger: "#test",
            start: "top 90%",
            end: "bottom 70%",
            markers: true,
            toggleActions: "play pause reverse pause",
          },
          ease: "sine.in",
        });
      }, []);
  return (
    <div>
      <div
        className="flex flex-col mt-10 mb-10 gap-y-7 
  "
        id="box"
      >
        {" "}
        <p
          className="text-center text-[#0F4400] font-semibold font-manrope text-[34px] "
          id="test"
        >
          Our farm is a thriving five-hectare oasis <br /> located in Kuje,
          Abuja.
        </p>
        <button className="mx-auto px-[20px] py-[12px] shadow-[0px_2px_12.8px_0px_rgba(0,0,0,0.25)] bg-[#0F4400] rounded-lg text-white font-manrope  font-semibold text-base">
          Direction
        </button>
      </div>
    </div>
  );
};

export default Address;
