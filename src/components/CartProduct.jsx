import React,{useState} from "react";
import { useSelector } from "react-redux";
import minus from "../images/minus.svg";
import plus from "../images/plus.svg";
import deleteimg from "../images/delete.svg";

const CartProduct = ({ product }) => {
  const { cart } = useSelector((state) => state.cart);
  const [count, setCount] = useState(product?.quantity);

  console.log(cart);
  return (
    <div>
      <div className="flex flex-col lg:flex-row  justify-between gap-x-10 w-full mt-8 lg:mt-4 ">
        <div className="flex gap-x-3 w-full flex-col lg:flex-row">
          <div className="bg-[#D9D9D9] rounded-[5px] h-[136px] w-full lg:h-auto  lg:w-[136px]  overflow-hidden">
            <img className="w-full h-full" src={product.product.image}></img>
          </div>
          <div className="flex flex-col gap-2 text-start w-full">
            <p className="font-semibold text-2xl">{product.product.name}</p>
            <p className="text-[#878787] font-normal text-base w-full">
           {product.product.description}
            </p>
            <div className="rounded-[40px] px-4 h-[48px] w-[136px] self-end lg:self-auto my-4 lg:my-0 flex items-center justify-between gap-x-2  border-[#F0F2F5]  border bg-[#F9FAFB]">
            <button
                  className={`${count === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                    } text-[20px] text-[#006C0B]`}
                  disabled={count === 1}
                  onClick={() => setCount(count - 1)}
                >
                  -
                </button>
              <span className="text-[#006C0B]  font-semibold text-[20px]">
                {count}
              </span>
              <button
                  className="text-[20px] text-[#006C0B]"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
            </div>
          </div>
        </div>
        <div className=" flex lg:w-fit justify-between lg:flex-col lg:items-end lg:h-[136px] flex-1">
          <p className="text-2xl font-semibold">₦{product.product.price}</p>
          <p className="s lg:self-end">
            <img src={deleteimg} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
