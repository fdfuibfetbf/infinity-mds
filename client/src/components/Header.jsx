import React from 'react'
import { Link } from 'react-router-dom'
import Card from './card'
import Cardlist from './Cardlist'
import Footer from './Footer'




const Header = () => {
    const card=[
        {img:'/images/l1.webp',h:'PARTS', p:'Over 40,000 parts ready to ship across all modalities ',link:'#',btn:'Shop Parts'},
        {img:'/images/l2.webp',h:'Equipment', p:'Browse 300+ used and refurbished systems ',link:'#',btn:'Browse System'},
        {img:'/images/l3.webp',h:'Service', p:'Find the right service plan for your facility',link:'#',btn:'Get Services'},
    ]

    const images=[
        {link:'#',img:'/images/l4.webp'},
 {link:'#',img:'/images/l5.webp'},
         {link:'#',img:'/images/l6.webp'},
 {link:'#',img:'/images/l7.webp'},
  {link:'#',img:'/images/l8.webp'},
   {link:'#',img:'/images/l9.webp'},
    
    ]

    const cardlist=[
        {p:'A medical imaging technique that captures and stores raw image data in discrete blocks, allowing for detailed reconstruction and analysis of specific regions.',p1:'Amy G',p2:'Corporate Directing Director'},
        {p:'A method of capturing images in segmented blocks to enhance processing efficiency and allow targeted analysis.',p1:'Amy G',p2:'Corporate Directing Director'},
        {p:'Unprocessed or minimally processed information directly acquired from imaging sensors or scanners, used for precise image reconstruction and analysis.',p1:'Amy G',p2:'Corporate Directing Director'},
    ]

    
  return (
  <>
<div className="relative w-screen h-[600px] ">
  <video
    autoPlay
    loop
    muted
    playsInline
    className=" absolute top-0 left-0 w-full  h-full object-cover"
  >
    <source src="/videos/vid.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0  bg-[#001F3F]/70 z-10 flex flex-col items-center justify-center sm:pb-10 pb-10 lg:pt-10">
    <h1 className="text-white  md:!text-7xl sm:!font-normal lg:font-bold  px-5 sm:px-10  ">Your Medical Imaging Equipment Partner</h1>
    <p  className="text-white px-6 lg:text-4xl lg:font-bold ">We help you buy, sell, and service imaging equipment.</p>
  </div>


    

<div  className=' relative top-120 z-10 h-auto flex flex-col sm:flex-row gap-4 px-4 sm:px-8 md:px-22 justify-center mb-6 '>
        {
            card.map((v)=>(
                <div key={v._id} className='w-full  sm:w-[80%] md:w-[45%] lg:w-[30%] bg-white h-[20%] sm:mt-40 lg:mt-12  pb-5 shadow-lg rounded-sm flex flex-col items-center text-center'>
                    <img className='mx-auto h-49 w-auto object-contain mt-4' src={v.img} alt={v.p} />
                    <h2 className='font-bold text-gray-700 pt-6'>{v.h}</h2>
                    <p className='px-6 text-gray-800 text-base sm:text-lg h-12 text-center'>{v.p}</p> 
                    <Link  to={v.link}>
                    <button className='text-white hover:text-[#001F3F] bg-[#39FF14]/100 hover:bg-[#39FF14]/80 font-semibold rounded-md transition-all duration-300  p-3 h-12 w-36 mt-4'>{v.btn}</button>
                    </Link>
                    </div>
            ))
        }
    </div>

    

    <div className='w-screen h-100 '>


    </div>
<Card card={images}  />
<Cardlist card={cardlist}  />
<Footer  />
  </div>



 

  

    



</>
  )
}

export default Header
