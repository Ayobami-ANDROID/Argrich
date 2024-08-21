import React from 'react'
import Logo from "../../images/Argrich Logo Full 00.png";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='rounded-[20px] flex items-center overflow-hidden p-2 mt-4 bg-[#fff] shadow-lg justify-between'>
            <div><img src={Logo} className='mr-6'></img></div>
            <div>
                <a className='mr-2'> About</a>
                <a className='mr-2'>Product Categories</a>
                <a className='mr-6'> Online Store</a>
            </div>


            <Link className='rounded-[20px] px-8 py-2 bg-[#0F4400] text-[#FFF4DB] shadow-lg'>Login</Link>
        </div>
    )
}

export default Header