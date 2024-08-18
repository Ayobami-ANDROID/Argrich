import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import icon1 from "../images/chevron-right.svg";
import { useDispatch, useSelector } from "react-redux";
import minus from "../images/minus.svg";
import plus from "../images/plus.svg";
import deleteimg from "../images/delete.svg";
import CartProduct from "../components/CartProduct";
import { getCart } from "../features/cart/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);
  useEffect(() => {
    const cartProduct = async () => {
      try {
        const values = await dispatch(getCart()).unwrap();

        console.log("values", "sdsd");
      } catch (error) {}
    };

    cartProduct();
  }, []);

  return (
    <div className="px-10 bg-[#F5F5F5]  pt-10 pb-20 flex-1">
      <div className="flex gap-x-4">
        <button
          onClick={() => navigate("/")}
          className="text-[#101928] font-medium text-xs "
        >
          Home
        </button>
        <img src={icon1} alt="" className="object-contain" />
        <p className="text-[#005C2D] font-semibold text-xs cursor-pointer">
          My Cart
        </p>
      </div>
      <div className="w-full mt-6">
        <div className=" px-4 w-full  border-[#E4E7EC] bg-white  border-[0.8px] py-4 pb-8 max-w-[747px] rounded-xl">
          <div className="flex gap-x-4 items-center  mb-4">
            <p className=" text-[#101928] text-2xl font-semibold">My Cart</p>
            <div className=" h-6 w-6 flex items-start justify-center bg-[#005C2D] rounded-full text-white">
              {cart.length}
            </div>
          </div>
          <div className="divide-y-[0.8px] divide-[#C6C6C6] gap-y-4 flex flex-col">
            {" "}
            {cart.map((product, index) => (
              <CartProduct key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mt-6">
        <div className=" px-4 w-full  border-[#E4E7EC] bg-white  border-[0.8px] py-4  max-w-[747px] rounded-xl">
          <div className="flex items-center justify-between ">
            {" "}
            <p className="text-[24px] font-semibold">Subtotal:</p>
            <p className="text-[#2A4F1A] text-[24px] font-semibold"> ₦524.00</p>
          </div>
          <div className="bg-[#C6C6C6] w-full h-[0.8px] "></div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
