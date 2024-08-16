import React,{useEffect,useState} from 'react'
import img1 from "../images/egg.png";

const GetProduct = () => {
    const [count,setCount] = useState(1)
    return (
        <div className='px-20 py-10 bg-[#F5F5F5] '>
            <div className='flex  grid-cols-2 gap-4 justify-center '>
                <div className='flex flex-col w-[50%]'>
                    <div className='w-full bg-[#D9D9D9] h-[50vh] rounded-[10px] overflow-hidden '>
                        <img src={img1} className='h-full w-full' />
                    </div>
                    <div className='grid grid-cols-4 gap-2 mt-4'>
                        <div className='rounded-[10px] overflow-hidden' >
                            <img src={img1} className='h-full' />
                        </div>
                        <div className='rounded-[10px] overflow-hidden' >
                            <img src={img1} className='h-full' />
                        </div>
                        <div className='rounded-[10px] overflow-hidden' >
                            <img src={img1} className='h-full' />
                        </div>
                        <div className='rounded-[10px] overflow-hidden' >
                            <img src={img1} className='h-full' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col flex-1 w-full'>
                    <div className='mb-16'>
                    <h1 className='text-[30px] mb-3 font-[500]'>Eggs Crate</h1>
                    <p className='text-[15px] mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <h1 className='text-[25px] mb-4 foont-[500]'> $19.20</h1>
                    </div>
                    

                    <div>
                    <p className='mb-4 font-[500]'>Quantity</p>
                    <div className='mb-4' >
                        <div className='flex justify-between w-[30%] p-2 bg-[#fff] rounded-[30px] text-[20px]'>
                            <button className={`${count===1 ? 'opacity-50 cursor-not-allowed':'cursor-pointer'} text-[20px] text-[#006C0B]`} disabled={count === 1} onClick={() => setCount(count-1)}>-</button>
                            <p className='text-[20px] text-[#006C0B]'>{count}</p>
                        <button className='text-[20px] text-[#006C0B]'onClick={() => setCount(count + 1)}>+</button>
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