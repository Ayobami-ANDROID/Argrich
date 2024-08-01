import React from "react";
import Item from "./Item";

const TodayDeals = () => {
  return (
    <div className="my-8">
      <div className="flex items-center justify-between">
        {" "}
        <h1 className="my-4 font-[600] text-[28px]">Today's Deal</h1>
        <h3 className="text-[#318000] text-[20px] font-medium cursor-pointer hover:underline  ">
          See All
        </h3>
      </div>

   <div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2   gap-4">   {
        [1,2,3,4,8,91,201,2].map((item, index) => {
          return (
            <Item key={index}/>
          )
        })
      }</div>
    </div>
  );
};

export default TodayDeals;
