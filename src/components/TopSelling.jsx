import React, { useEffect } from "react";
import TopSellingItems from "./TopSellingItems";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import Skeleton from "react-loading-skeleton";
const TopSelling = () => {
  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((state) => state.product);
  const getProductsItems = async () => {
    try {
      await dispatch(getProducts()).unwrap();
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getProductsItems();
  }, []);

  return (
    <div className="my-8">
      <div className="flex items-center justify-between">
        {" "}
        <h1 className="my-4 font-[600] text-[28px]">Top Selling Items</h1>
        <h3 className="text-[#318000] text-[20px] font-medium cursor-pointer hover:underline  ">
          See All
        </h3>
      </div>

      <div className="flex overflow-x-scroll overflow-hidden no-scrollbar p-4  w-full gap-2 ">
        {" "}
        {isLoading &&
          Array(10).map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white flex flex-col gap-2 p-2 min-w-[200px] rounded-xl shadow-[0px_1px_7.2px_-2px_rgba(0,_0,_0,_0.25)] "
              >
                <Skeleton className="h-40" />
                <Skeleton count={1} className="h-10" />
              </div>
            );
          })}
        {products.map((item, index) => {
          <TopSellingItems key={index} />;
        })}
      </div>
    </div>
  );
};

export default TopSelling;

// return
