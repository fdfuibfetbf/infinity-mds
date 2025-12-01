import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (

  <div className='flex flex-col gap-0 pt-12  bg-[#1C5980]'>

    <div className=' sm:flex sm:flex-col lg:flex lg:flex-row justify-between border-b-2 py-5 border-white px-5 mx-10'>
    

      <div className='lg:mr-30'>
        <ul>
          
          
        <Link style={{textDecoration:'none'}} className='text-white text-left text-lg font-bold'><li>Email : info@infinitymedical.co</li></Link>
          <Link style={{textDecoration:'none'}} className='text-white text-left text-lg font-bold '><li >Address : Plot: 39-4, HH Sheikh Saud Bin Saqar Al Qassimi, Al Muteena, Dubai, UAE </li></Link>
        </ul>
      </div>



    </div>

  {/*  <div className='flex flex-col items-center md:flex-row md:justify-between px-5'>
   

      <div className='flex gap-4 justify-center md:justify-end lg:mr-50 sm:mt-5 md:mt-0 py-3'>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
           className="inline-block transform transition duration-300 hover:-translate-y-0.5 hover:scale-102">
          <FaFacebookF className="text-2xl text-blue-400" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
           className="inline-block transform transition duration-300 hover:-translate-y-0.5 hover:scale-102">
          <FaInstagram className="text-3xl text-yellow-300" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
           className="inline-block transform transition duration-300 hover:-translate-y-0.5 hover:scale-102">
          <FaYoutube className="text-3xl text-red-500" />
        </a>
      </div>
    </div>*/}

    <div className='flex flex-col'>
    
      <p className='text-left ml-28 pt-5 text-white'>© 2025copyright infinity global powered by Koncept Software Solution</p>
    </div>

  </div>


  )
}

export default Footer
