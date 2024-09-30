import React, { useEffect,useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import icon1 from "../images/chevron-right.svg";
import { useDispatch, useSelector } from "react-redux";
import minus from "../images/minus.svg";
import plus from "../images/plus.svg";
import deleteimg from "../images/delete.svg";
import CheckoutItem from "../components/CheckoutItem";
import { getCart } from "../features/cart/cartSlice";
import PaystackPop from '@paystack/inline-js'
import { createOrder } from "../features/product/productSlice";

const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.cart);
    const [payNow, setPayNow] = useState(false);
    const [payOnDelivery, setPayOnDelivery] = useState(false);
    const { isLoading, } = useSelector((state) => state.product);
    console.log(cart);
    useEffect(() => {
        const cartProduct = async () => {
            try {
                const values = await dispatch(getCart()).unwrap();
                

                console.log("values", "sdsd");
            } catch (error) { }
        };

        cartProduct();
    }, []);

    if(cart.length === 0 ){
        toast.error("Nothing added to Cart")
        navigate("/homepage/cart")
    }

    const totalPrice = cart.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
    }, 0);


    const handlePayNowChange = async () => {
        const body = {
            payment_method: "pay_now"
        }
        setPayNow(true);
        setPayOnDelivery(false);
       
    };

    const handlePayOnDeliveryChange = () => {
        setPayOnDelivery(true);
        setPayNow(false);
    };

    const handleSubmit = async () =>{
        if(payNow === true){
            const body = {
                payment_method: "pay_now"
            }

           const result= await dispatch(createOrder(body)).unwrap()
           console.log(result)
            const popup = new PaystackPop()
            popup.resumeTransaction(result.access_code)
        }
        else if(payOnDelivery === true){
            const body = {
                payment_method: "on_delivery"
            }
            await dispatch(createOrder(body)).unwrap()
            
        }
        else{
          toast.error('Select a payment method')
        }
    }

    return (
        <div className="px-10 bg-[#F5F5F5]  pt-10 pb-20 flex-1">
            <div className="flex gap-x-4">
                <button
                    onClick={() => navigate("/homepage/")}
                    className="text-[#101928] font-medium text-xs "
                >
                    Home
                </button>
                <img src={icon1} alt="" className="object-contain" />
                <p className="text-[#005C2D] font-semibold text-xs cursor-pointer">
                    Checkoout
                </p>
            </div>

            <div className="lg:grid grid-cols-3 gap-6 mt-6">
                <div className="col-span-2 flex-c0l">
                    <div className="w-full">
                        <div className=" px-4 lg:max-w-full  border-[#E4E7EC] bg-white  border-[0.8px] py-4 pb-8 md:max-w-[747px] rounded-xl">
                            <div className="flex gap-x-4 items-center  mb-4">
                                <p className=" text-[#101928] text-2xl font-semibold">My Order</p>
                                <div className=" h-6 w-6 flex items-start justify-center bg-[#005C2D] rounded-full text-white">
                                    {cart.length}
                                </div>
                            </div>
                            <div className="divide-y-[0.8px] divide-[#C6C6C6] gap-y-4 flex flex-col">
                                {" "}
                                {cart.map((product, index) => (
                                    <CheckoutItem key={index} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-6">
                        <div className=" px-4 lg:max-w-full  border-[#E4E7EC] bg-white  border-[0.8px] py-4 md:max-w-[747px] rounded-xl">
                            <div className="flex items-center justify-between ">
                                {" "}
                                <p className="text-[24px] font-semibold">Subtotal:</p>
                                <p className="text-[#2A4F1A] text-[24px] font-semibold"> ₦{totalPrice.toLocaleString()}</p>
                            </div>
                            <div className="bg-[#C6C6C6] w-full h-[0.8px] "></div>

                        </div>
                    </div>
                    {/* <div className="flex justify-between mt-8">
                        <div></div>
                        <Link className="bg-[#005C2D] text-white py-2 px-8 mr-2  rounded-[20px]">
                            Checkout
                        </Link>
                    </div> */}
                </div>
                <div className="bg-[#fff] py-8 px-4 rounded-[12px] border-[1px] border-[rgba(228,231,236,1)]">
                    <div className="border-b-[1px] border-[#E4E7EC] pb-4">
                        <h1 className="text-[#101928] font-[600] text-[24px] font-manrope ">Payment Information</h1>
                    </div>
                    <form className="py-4 border-[#E4E7EC] border-b-[1px]">
                        <h4 className="text-[#101928] text-[16px] my-4 font-[600] font-manrope">Pay with</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex">
                                
                            <input 
                                type="radio" 
                                className="mr-4 h-5 w-5"
                                checked={payNow}
                                onChange={handlePayNowChange}
                                style={{ accentColor: 'rgba(0, 138, 47, 1)' }}
                            />
                                <p className="font-[600] text-[16px] font-manrope">Pay Now</p>
                            </div>
                            <div className="flex">
                            <input 
                                type="radio" 
                                className="mr-4 h-5 w-5"
                                checked={payOnDelivery}
                                onChange={handlePayOnDeliveryChange}
                                style={{ accentColor: 'rgba(0, 138, 47, 1)' }}
                            />
                                <p className="font-[600] text-[16px] font-manrope">Pay On Delivery</p>
                            </div>
                        </div>

                    </form>

                    <div className="flex flex-col gap-4 my-4 ">
                        <div className="flex justify-between ">
                            <p>Sub Total</p>
                            <h1> ₦{totalPrice.toLocaleString()}</h1>
                        </div>
                        <div className="flex justify-between ">
                            <p>Sub Total</p>
                            <h1> ₦{2000}</h1>
                        </div>
                    </div>
                   <div className="flex flex-col items-center">
                   <button onClick={handleSubmit} className="bg-[rgba(42,79,26,1)]  w-[260px] rounded-[30px] mt-4  text-[rgba(255,255,255,1)] py-[16px] px-[24px]"> Proceed</button>
                   </div>
                   
                </div>
            </div>



        </div>
    )
}

export default Checkout