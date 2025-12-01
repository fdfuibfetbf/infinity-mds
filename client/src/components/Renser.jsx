import React from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
const Renser = () => {
    const navigate=useNavigate()
  return (
    <div>
       <div style={{ backgroundImage:"url('/images/img.jpg')",
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%',
        backgroundPosition:'center'

      }}
      className="bg-gray-100 mt-5 relative w-screen sm:w-[20%] md:w-[100%] lg:w-[100%] h-96 sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[640px] 2xl:h-[780px] ">
  <div className="absolute w-full h-full inset-0 bg-gradient-to-br from-[#0a1f44]/90 via-[#3b4c66]/70 to-[#d1d5db]/30 z-10 flex flex-col items-left justify-center">
   <motion.h1
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="text-white text-center sm:!text-sm lg:!text-6xl font-bold px-5 mt-5"
>
  Medical Imaging Equipment Services
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
  className="mt-4 text-white text-center px-12 sm:px-20 lg:px-12 lg:text-xl font-normal"
>
  Our team ensures end-to-end support for your imaging equipment at every stage of its lifecycle
</motion.p>
    


  </div>

    </div>
    <p className='mt-5 px-6 lg:px-64 pb-4 text-lg  text-justify '>
        We provide comprehensive services for a wide range of Medical Imaging Equipment, MRI, CT Scan, X-ray systems etc. Our team of experts is highly skilled in delivering complete maintenance, repair, and technical support solutions for all types of imaging equipment.
</p>

<div className="pl-6  mt-5 mb-5 pb-5 bg-gray-200">
 <h1 className='!font-bold pt-12'>Our Comprehensive Services</h1>


 <div className="flex flex-col lg:flex-row">
    
   
    {/* Adjusted List Container to w-full (full width) */}
    <div className="w-full mt-5"> 
      <ul className="space-y-4 ml-0 lg:ml-42">
        
        {/* List Item 1 */}
        <li className="flex text-left text-gray-700 text-lg">
          <span className="text-green-500 font-bold mr-5 text-2xl mt-[-2px]">✅</span>
          <p>
            Site planning and coordination
          </p>
        </li>

        {/* List Item 2 */}
        <li className="flex text-left text-gray-700 text-lg">
          <span className="text-green-500 font-bold mr-3 text-2xl mt-[-2px]">✅</span>
          <p>
            Preventive maintenance programs designed to minimize unexpected breakdowns
          </p>
        </li>

        {/* List Item 3 */}
        <li className="flex items-start text-gray-700 text-lg">
          <span className="text-green-500 font-bold mr-3 text-2xl mt-[-2px]">✅</span>
          <p>
          Comprehensive repair services of equipment and parts
          </p>
        </li>

        {/* List Item 4 */}
        <li className="flex items-start text-gray-700 text-lg">
          <span className="text-green-500 font-bold mr-3 text-2xl mt-[-2px]">✅</span>
          <p>
           Replacement parts available for all medical imaging systems
          </p>
        </li>

        {/* List Item 5 */}
        <li className="flex items-start text-gray-700 text-lg">
          <span className="text-green-500 font-bold mr-3 text-2xl mt-[-2px]">✅</span>
          <p>
          Expert coil testing, repair, and replacement solutions
          </p>
        </li>

        {/* List Item 6 */}
        <li className="flex items-start text-gray-700 text-lg">
          <span className="text-green-500 font-bold mr-3 text-2xl mt-[-2px]">✅</span>
          <p>
           Professional assistance with system relocation and installation
          </p>
        </li>
      </ul>

      <div className="flex justify-left ms-5 lg:pl-38 mt-10">
  <button
    onClick={() => {
      // Replace with your navigation logic
      navigate("/signs")
      console.log("Button clicked");
    }}
    className="relative inline-flex items-center justify-center font-semibold group w-full sm:w-auto"
  >
    {/* Expanding circle */}
    <span
      className="absolute left-0 w-40 sm:w-10 h-10 border-2 p-4 border-[#39FF14] rounded-full flex items-center justify-center 
                 overflow-hidden transition-all duration-700 ease-in-out sm:group-hover:w-[280px]"
    >
      {/* '>' fades out on hover (only on lg) */}
      <span className="hidden lg:block absolute text-[#39FF14] text-xl transition-opacity duration-700 ease-in-out group-hover:opacity-0">
        &gt;
      </span>

      {/* Text inside circle for small screens */}
      <span className="block sm:hidden text-black text-sm font-semibold">
         Request a Service Quote
      </span>
    </span>

    {/* Text outside circle for large screens */}
    <span className="hidden sm:inline-block relative text-lg text-black pl-16 pr-4  transition-all duration-700 ease-in-out">
      Request a Service Quote
    </span>
  </button>
</div>

    </div>

    
    
  
    {/* Image container removed */}
    
  </div>
</div>




<div className="w-full max-w-2xl mt-5 pt-12 mx-auto pb-8 mb-5">
  <video
   
    className="rounded-xl shadow-2xl w-full   border-black border-5" 
    src="/video/vid1.mp4"
    controls
    

    muted 
    loop
 
  >
   
  </video>
</div>

    </div>
  )
}

export default Renser
