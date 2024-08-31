import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getSearchProduct } from '../features/product/productSlice';
import Skeleton from "react-loading-skeleton";
import { useParams, useNavigate, Link } from "react-router-dom";
import Item from '../components/Item';
import icon1 from "../images/chevron-right.svg";
import searchImage from "../images/search window.png"


const GetProductBySearch = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoading, products } = useSelector((state) => state.product);
    let { searchQuery } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                await dispatch(getSearchProduct({ name: searchQuery, search: '' })).unwrap();
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProduct();
    }, [dispatch, searchQuery]);

    return (
        <div className='px-10 py-4 min-h-screen'>

            <div className="flex gap-x-4">
                <button
                    onClick={() => navigate("/")}
                    className="text-[#101928] font-medium text-xs "
                >
                    Home
                </button>
                <img src={icon1} alt="" className="object-contain" />
                <p className="text-[#005C2D] font-semibold text-xs cursor-pointer">
                    {searchQuery}
                </p>
            </div>
            <div className="my-8">
                <div className="flex items-center justify-between">
                    {" "}
                    <h1 className="my-4 font-[600] text-[28px]">{searchQuery}</h1>
                    {/* <h3 className="text-[#318000] text-[20px] font-medium cursor-pointer hover:underline  ">
          See All
        </h3> */}
                </div>

                <div >
                    {isLoading === true ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4    gap-2 gap-y-10"> {
                            Array(52)
                                .fill(0)
                                .map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="bg-white flex flex-col gap-2  p-2 max-w-[280px] rounded-xl shadow-[0px_1px_7.2px_-2px_rgba(0,_0,_0,_0.25)] "
                                        >
                                            <Skeleton className="h-40" />
                                            <Skeleton count={1} className="h-10" />
                                        </div>
                                    );
                                })}
                        </div>
                    ) : (
                        <>
                            {products.length === 0 ? (
                                <div className='flex flex-col items-center justify-center'>
                                    <div className='flex flex-col items-center justify-center '>
                                        <img src={searchImage}></img>
                                        <h1 className='font-[600] mb-4'>There are no results for " {searchQuery} "</h1>
                                        <ul className='flex flex-col items-center'>
                                            <li>- Check your spelling for typing errors</li>
                                            <li>- Try searching with short and simple keywords</li>
                                            <li>- Try searching more general terms(related to Agriculture) - you can then filter the search results</li>
                                        </ul>
                                        <Link to="/" className='bg-[#005C2D] text-[#FFFFFF] font-manrope rounded-[5px] px-8 py-4 mt-4'>Go To HomePage</Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4    gap-2 gap-y-10" >
                                    {products.map((item, index) => {
                                        return (
                                            <Item
                                                key={index}
                                                name={item.name}
                                                price={item.price}
                                                image={item.image}
                                                id={item.id}
                                            />
                                        );
                                    })}
                                </div>
                            )}
                        </>
                    )



                    }




                </div>
            </div>
        </div>

    )
}

export default GetProductBySearch