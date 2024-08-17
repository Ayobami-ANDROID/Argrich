import React, { useEffect, useState } from 'react'
import img1 from "../images/egg.png";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { getSingleProduct, productReset } from "../features/product/productSlice";
import { postCart } from '../features/cart/cartSlice';

const GetProduct = () => {
    const dispatch = useDispatch();
    const { isLoading, product } = useSelector((state) => state.product);
    let { id } = useParams()


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                await dispatch(getSingleProduct(id)).unwrap();
            } catch (error) {

            }

        }

        fetchProduct()
    }, [])
    const [count, setCount] = useState(1)

    if (isLoading) {
        return (
            <div className='lg:flex px-20 py-10   gap-4 justify-center '>
                <div className='flex flex-col lg:w-[50%] w-full'>
                    <div className='w-full bg-[#D9D9D9] h-[50vh] rounded-[10px] overflow-hidden '>
                        {/* <img src={img1} className='h-full w-full' /> */}
                        <Skeleton className='h-full w-full' />
                    </div>
                    <div className='grid grid-cols-4 gap-2 mt-4'>
                        <div className='rounded-[10px] overflow-hidden' >
                            {/* <img src={img1} className='h-full' /> */}
                            <Skeleton className='h-full ' />
                        </div>
                        <div className='rounded-[10px] overflow-hidden' >
                            <Skeleton className='h-full ' />
                        </div>
                        <div className='rounded-[10px] overflow-hidden' >
                            <Skeleton className='h-full ' />
                        </div>
                        <div className='rounded-[10px] overflow-hidden' >
                            <Skeleton className='h-full ' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col flex-1 w-full h-full'>

                    <Skeleton className='h-full w-full' />

                </div>
            </div>
        )
    }
    return (
        <div className='px-20 py-10 bg-[#F5F5F5] '>


            <div className='lg:flex   gap-4 justify-center '>


                <div className='flex flex-col lg:w-[50%] w-full'>
                    <div className='w-full bg-[#D9D9D9] lg:h-[50vh] rounded-[10px] overflow-hidden '>
                        <img src={product.image} className='h-full w-full' />
                    </div>
                    <div className='grid grid-cols-4 gap-2 mt-4'>
                        <div className='rounded-[10px] overflow-hidden' >
                            <img src={product.image} className='h-full' />
                        </div>
                        <div className='rounded-[10px] overflow-hidden' >
                            <img src={product.image} className='h-full' />
                        </div>
                        <div className='rounded-[10px] overflow-hidden' >
                            <img src={product.image} className='h-full' />
                        </div>
                        <div className='rounded-[10px] overflow-hidden' >
                            <img src={product.image} className='h-full' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col flex-1 w-full'>
                    <div className='lg:mb-16 mb-8'>
                        <h1 className='text-[30px] mb-3 font-[500] mt-3 lg:mt-0'>{product.name}</h1>
                        <p className='text-[15px] mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <h1 className='text-[25px] mb-4 foont-[500]'> ₦{product.price}</h1>
                    </div>


                    <div>
                        <p className='mb-4 font-[500]'>Quantity</p>
                        <div className='mb-4' >
                            <div className='flex justify-between w-[30%] p-2 bg-[#fff] rounded-[30px] text-[20px]'>
                                <button className={`${count === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} text-[20px] text-[#006C0B]`} disabled={count === 1} onClick={() => setCount(count - 1)}>-</button>
                                <p className='text-[20px] text-[#006C0B]'>{count}</p>
                                <button className='text-[20px] text-[#006C0B]' onClick={() => setCount(count + 1)}>+</button>
                            </div>

                        </div>
                        <div className='flex'>
                            <button className='bg-[#005C2D] text-white py-2 px-8 mr-2  rounded-[20px]'>BUY NOW</button>
                            <button className='border-2 border-[#2A4F1A] rounded-[20px] py-2 px-8 text-[#2A4F1A]'> ADD TO CART</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GetProduct