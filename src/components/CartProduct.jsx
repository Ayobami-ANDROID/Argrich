import React from "react";
import { useSelector } from "react-redux";
import minus from "../images/minus.svg";
import plus from "../images/plus.svg";
import deleteimg from "../images/delete.svg";

const CartProduct = ({ product }) => {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div>
      <div className="flex flex-col lg:flex-row  justify-between gap-x-10 w-full mt-8 lg:mt-4 ">
        <div className="flex gap-x-3 w-full flex-col lg:flex-row">
          <div className="bg-[#D9D9D9] rounded-[5px] h-[136px] w-full lg:h-auto  lg:w-[136px] "></div>
          <div className="flex flex-col gap-2 text-start w-full">
            <p className="font-semibold text-2xl">Product Title</p>
            <p className="text-[#878787] font-normal text-base w-full">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of
            </p>
            <div className="rounded-[40px] px-4 h-[48px] w-[136px] self-end lg:self-auto my-4 lg:my-0 flex items-center justify-between gap-x-2  border-[#F0F2F5]  border bg-[#F9FAFB]">
              <img src={minus} alt="" className="cursor-pointer" />
              <span className="text-[#006C0B]  font-semibold text-[20px]">
                {product?.quantity}
              </span>
              <img src={plus} alt="" className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className=" flex w-full lg:w-fit justify-between  lg:flex-col flex-1">
          <p className="text-2xl font-semibold">₦200</p>
          <p className="s">
            <img src={deleteimg} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
