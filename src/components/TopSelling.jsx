import React from 'react'
import TopSellingItems from './TopSellingItems'

const TopSelling = () => {
  return (
    <div className="my-8">
      <div className="flex items-center justify-between">
        {" "}
        <h1 className="my-4 font-[600] text-[28px]">Top Selling Items</h1>
        <h3 className="text-[#318000] text-[20px] font-medium cursor-pointer hover:underline  ">
          See All
        </h3>
      </div>

   <div className="flex overflow-x-scroll overflow-hidden no-scrollbar p-4 ">   {
        [1,2,3,4,8,91,201,2,39,40,41,45,46].map((item, index) => {
          return (
           <TopSellingItems/>
          )
        })
      }</div>
    </div>
  )
}

export default TopSelling