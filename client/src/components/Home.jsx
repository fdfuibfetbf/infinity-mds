import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import { motion } from "framer-motion";





const Home = () => {
  const[image,setimage]=useState(0)
    const card=[
        {img:'/images/parts.jpg',h:'Parts',link:'/allpro',btn:'Shop Parts'},
        
        {img:'/images/ren.png',h:'Services',link:'/ser',btn:'Get Rental Services'},
    ]

    const images=[
         {link:'#',img:'/images/c1.PNG'},
        {link:'#',img:'/images/c3.PNG'},
 {link:'#',img:'/images/c2.jpeg'},
     
{link:'#',img:'/images/c4.jpeg'},
  {link:'#',img:'/images/c5.PNG'},
   {link:'#',img:'/images/c6.PNG'},
    {link:'#',img:'/images/c7.PNG'},
   {link:'#',img:'/images/c8.jpeg'},
    {link:'#',img:'/images/c9.PNG'},
    
    ]

    const img=[
      {img:'/images/ctscan.jpeg'},
        {img:'/images/h1.jpeg'},
          {img:'/images/home3.jpeg'},
    ]

     useEffect(() => {
    const interval = setInterval(() => {
      setimage((prev) => (prev + 1) % img.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);



    
  return (
  <>
  
 <div className="flex flex-col pt-23 min-h-screen w-full">
      {/* Hero + Cards Section */}
      <div className="flex-grow  ">
        <div className="relative w-screen h-96 sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[560px] 2xl:h-[780px]">
          {/* Slideshow */}
          <div className="border border-black absolute w-full h-full overflow-hidden">
            {img.map((v, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                  index === image ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={v.img}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlay */}
         <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f44]/90 via-[#3b4c66]/70 to-[#d1d5db]/30
 z-10 flex flex-col items-center justify-center sm:pb-10 pb-10 lg:pt-10">

            <motion.h1
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-white text-center  md:!text-6xl sm:!font-normal lg:font-bold"
      >
        Your Medical Imaging Equipment Partner
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="text-white text-center px-20 lg:text-2xl mt-4"
      >
       We offer end-to-end support for the purchase and services of Medical Imaging Equipment  Parts
      </motion.p>
          </div>
        </div>

        {/* Cards */}
        <div className="relative bottom-14 z-10 h-auto flex flex-col sm:flex-row gap-4 px-4 sm:px-8 md:px-22 justify-center">
          {card.map((v) => (
            <div
              key={v._id}
              className="w-auto sm:w-[80%] md:w-[45%] lg:w-[30%] bg-white pb-5 shadow-lg rounded-sm flex flex-col items-center text-center"
            >
              <img
                className="mx-auto h-20 w-32 object-contain mt-4
                 transition-transform duration-300 ease-in-out 
             hover:scale-105 hover:cursor-pointer"
                src={v.img}
                alt={v.p}
              />
              <h2 className="w-70 font-bold text-gray-700 pt-6">{v.h}</h2>
          <div className="mr-38 lg:mr-0">   
<Link
  to={v.link}
  style={{ textDecoration: "none" }}
  className="relative inline-flex items-center justify-center font-semibold group mt-4 w-full sm:w-auto"
>
  {/* Expanding circle */}
  <span
    className="ml-3 absolute left-0 w-40 sm:w-10 h-10 border-2 p-4 border-[#39FF14] rounded-full flex items-center justify-center 
               overflow-hidden transition-all duration-700 ease-in-out sm:group-hover:w-[213px]"
  >
    {/* '>' fades out on hover (only on lg) */}
    <span className="hidden lg:block absolute text-[#39FF14] text-xl transition-opacity duration-700 ease-in-out group-hover:opacity-0">
      &gt;
    </span>

    {/* Text inside circle for small screens */}
    <span className="block sm:hidden text-black text-sm font-semibold">
      {v.btn}
    </span>
  </span>

  {/* Text outside circle for large screens */}
  <span className="hidden sm:inline-block relative ml-3 text-lg text-black  pl-14 pr-10 transition-all duration-700 ease-in-out">
    {v.btn}
  </span>
</Link>
</div>



            </div>
          ))}
        </div>

        {/* Other components */}
        <Card card={images} />
    
      </div>

      {/* Footer always at bottom */}
   
    </div>



 

  

    



</>
  )
}

export default Home
