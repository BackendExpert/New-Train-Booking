import React from 'react'
import { BsPerson, BsTrainFreightFront } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='backdrop-blur-md bg-black/30 py-4 px-8 text-white'>
        <div className="flex justify-between">
            <div className="flex">
                <BsTrainFreightFront className='h-6 w-auto'/>
                <div className="text-xl pl-4">Train Booking</div>
            </div>
            <div className="flex cursor-pointer">
                <BsPerson className='h-6 w-auto'/>
                <div className="text-xl pl-2 md:block hidden">Login</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar