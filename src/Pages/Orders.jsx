import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen1 } from "../features/deleteaccountmodal/deleteaccountslice";
import threedots from "../images/icons/threedots.svg";

const Orders = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.account);
  console.log("user", user);
  const products = [
    {
      orderNo: "Tkx489762510",
      col1: "Record",
      col2: "Record",
      status: "Pending",
    },
    {
      orderNo: "Tkx489762510",
      col1: "Record",
      col2: "Record",
      status: "Pending",
    },
    {
      orderNo: "Tkx489762510",
      col1: "Record",
      col2: "Record",
      status: "Received",
    },
    {
      orderNo: "Tkx489762510",
      col1: "Record",
      col2: "Record",
      status: "Pending",
    },
    {
      orderNo: "Tkx489762510",
      col1: "Record",
      col2: "Record",
      status: "Received",
    },
    {
      orderNo: "Tkx489762510",
      col1: "Record",
      col2: "Record",
      status: "Received",
    },
  ];
  return (
    <div className="border-t  ">
      <h1 className="text-[#000] font-semibold font-manrope text-[25px] leading-[32.78px]  flex items-center  border-b px-4 min-h-[67px]">
        Orders
      </h1>
      <div className="w-full px-4 mt-10">
        <table className="w-full  text-left table-auto border-collapse ">
          <thead>
            <tr className="bg-[#EFF1F7] font-manrope">
              <th className="py-2 flex  px-4  font-manrope text-[14px] font-bold gap-x-3">
                {" "}
                <input type="checkbox" />
                Products
              </th>
              <th className="px-4 py-2 font-manrope text-[14px] font-bold ">Order No</th>
              <th className="px-4 py-2 font-manrope text-[14px] font-bold ">Col Name 1</th>
              <th className="px-4 py-2 font-manrope text-[14px] font-bold ">Col Name 2</th>
              <th className="px-4 py-2 font-manrope text-[14px] font-bold text-center  ">Status</th>
              <th className="px-4 py-2 font-manrope text-[14px] font-bold text-center ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className=" py-2  px-4 flex gap-x-3 items-center ">
                  <input type="checkbox" />
                  <div className="bg-[#D9D9D9] h-[36px] rounded-[3px] w-[36px]"></div>
                  <p className=" font-manrope">Table Head</p>
                </td>
                <td className="px-4 py-2 font-manrope ">{product.orderNo}</td>
                <td className="px-4 py-2 font-manrope ">{product.col1}</td>
                <td className="px-4 py-2 font-manrope ">{product.col2}</td>
                <td>
                  <p
                    className={`px-4 text-[12px]  font-medium rounded-md py-2 w-full mx-auto  max-w-[69px] font-manrope flex items-center justify-center ${
                      product.status === "Received"
                        ? "text-[#0010C5] bg-[#B3B5FF]"
                        : product.status === "Pending"
                        ? "bg-[#FFB3B3] text-[#C50000]"
                        : product.status === "Status"
                        ? "text-[#B3FFBD] bg-[#B3FFBD]"
                        : ""
                    }`}
                  >
                    {product.status}
                  </p>
                </td>
                <td className=" py-2 font-manrope px-4">
                  <img src={threedots} alt="" className="mx-auto"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
