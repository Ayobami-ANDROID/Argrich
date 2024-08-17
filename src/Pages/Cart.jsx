import React from "react";
import { useNavigate } from "react-router-dom";
import icon1 from "../images/chevron-right.svg";
import { useSelector } from "react-redux";
const Cart = () => {
  const navigate = useNavigate();
  const {cart}=useSelector((state)=>state.cart)

  return (
    <div className="px-10">
      <div className="flex gap-x-4">
        <button
          onClick={() => navigate(-1)}
          className="text-[#101928] font-medium text-xs "
        >
          Home
        </button>
        <img src={icon1} alt="" className="object-contain" />
        <p className="text-[#005C2D] font-semibold text-xs cursor-pointer">
          My Cart
        </p>
      </div>
      <div className="w-full">
        <div className="w-full border-[#E4E7EC] bg-white  border-[0.8px] py-4">
          <div className="flex">
            <p className="">My Cart</p>
            <div className="flex bg-[#005C2D] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
