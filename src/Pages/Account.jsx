import React from 'react'
import Advert from '../components/Advert'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/AccountComponent/Sidebar'
import RightSide from '../components/AccountComponent/RightSide'

const Account = () => {
  return (
    <div className='flex flex-col  '>
        <Advert/>
        <Header/>
        <div className='flex h-full'>
            <div >
                <Sidebar/>
            </div>
            <div className='w-full'>
                <RightSide/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Account