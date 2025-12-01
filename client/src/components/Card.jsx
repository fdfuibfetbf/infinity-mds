import React, { useState,useEffect } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom';
const Card = ({card}) => {
const [index,setIndex]=useState(0)
const [isSmallScreen, setIsSmallScreen] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 640); // Tailwind's sm breakpoint
  };

  handleResize(); // Initial check
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


    const next=()=>{
              setIndex((pre)=>((pre+1)%card.length))
    }

     const pre=()=>{
              setIndex((pre)=>((pre-1+card.length)%card.length))
    }

  const visibleItems = () => {
  let cards = [];
  const count = isSmallScreen ? 1 : 3;
  for (let i = 0; i < count; i++) {
    cards.push(card[(index + i) % card.length]);
  }
  return cards;
};

    
    const visible=visibleItems()

     useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, [index]);

  return (
    <>
     <div className='w-screen flex flex-col items-center justify-center py-16 mb-12 mt-0'>
  <h2 className='font-bold text-xl'>Independent source for:</h2>

  <div className='flex items-center justify-center gap-6 mt-5 '>
    {/* Left arrow */}
    <button onClick={pre} className='p-2 rounded-full bg-gray-200 hover:bg-gray-300'>
      <ChevronLeft size={28} />
    </button>

    {/* Image list */}
    <div className='flex gap-6'>
      {visible.map((v, i) => (
        <Link key={i} to={v.link}>
          <div style={{boxShadow:'0px 0px 10px #39FF14'}} className=' rounded-lg p-2 hover:scale-105 transition-transform duration-300 '>
            <img
              className='w-80 lg:h-40 object-contain'
              src={v.img}
              alt={v.link}
            />
          </div>
        </Link>
      ))}
    </div>

    {/* Right arrow */}
    <button onClick={next} className='p-2 rounded-full bg-gray-200 hover:bg-gray-300'>
      <ChevronRight size={28} />
    </button>
  </div>
</div>

    </>
  )
}

export default Card
