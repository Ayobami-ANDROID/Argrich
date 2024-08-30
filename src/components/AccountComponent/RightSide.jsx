import React from 'react'
import profileImg from '../../images/Ellipse 3.png'

const RightSide = () => {
    return (
        <div className='border-t-2  '>
            <h1 className='text-[#000] font-[500] text-[25px] border-b-2 pl-4'>Account & settings</h1>

            <div className='grid grid-cols-4'>
                <div className='flex flex-col col-span-2 p-8 gap-4'>
                    <h1 className='text-[#000000] font-manrope font-[600] text-[20px]'>Profile Information</h1>
                    <div className='flex  justify-between relative'>
                        <div>
                            <p className='text-[16px] font-[500] font-manrope'>Profile Picture</p>
                        </div>
                        <div className='w-[100px] h-[100px] rounded-full overflow-hidden'>
                            <img src={profileImg} className='w-full h-full' alt="Profile Img"></img>
                            <div className='rounded-full flex absolute bg-white p-1 top-[70%] right-0 shadow-[0_0_10px_-1px_rgba(0,0,0,0.25)]'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3248 4.90729C15.7151 4.51674 16.3482 4.51647 16.7388 4.9067L19.0922 7.25746C19.4831 7.64784 19.4833 8.28116 19.0928 8.67187L9.13501 18.6352C8.99573 18.7745 8.81838 18.8696 8.62524 18.9085L4.20001 19.8002L5.09326 15.3802C5.13221 15.1875 5.22713 15.0105 5.36614 14.8714L15.3248 4.90729Z" stroke="black" stroke-width="1.6" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSide