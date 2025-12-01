import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Allmod = () => {
 
 const [showPopup, setShowPopup] = useState(false);
  const [zoom, setZoom] = useState(1);

  const toggleZoom = () => {
    if (zoom === 1) setZoom(2);      // normal → zoom in
    else if (zoom === 2) setZoom(3); // zoom in → max zoom
    else setZoom(1);                  // max zoom → reset
  };

  const handleImageClick = () => {
    if (window.innerWidth < 768) {
      window.open(`http://infinity-yn0b-qet3.onrender.com${part.image}`, "_blank");
    } else {
      if (!showPopup) setShowPopup(true); // open popup
      else toggleZoom();                  // zoom toggle
    }
  };



  const navigate = useNavigate();
  const location = useLocation();
  const part = location.state?.part;

  if (!part) return <p className="text-center mt-10">No part data available.</p>;

  return (
    <>
      <div className="bg-gray-300 h-24"></div>
      <div className="w-screen mb-10 pb-10 mt-12">
        <div className="h-auto flex flex-col lg:flex-row gap-4 w-screen">
          <div className="w-[50%] flex  mb-1">
            <div  onClick={handleImageClick} className="w-[200%] lg:w-[120%] mt-10 ml-12 h-[100px] lg:h-[400px] overflow-hidden">
              <img
                className=" w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                src={`http://infinity-yn0b-qet3.onrender.com${part.image}`} // assuming part.image is like "/uploads/filename.jpg"
                alt={part.product || "Part image"}
              />
              

            </div>
             {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-[9999]"
          onClick={() => {
            setZoom(1);
            setShowPopup(false);
          }}
        >
          <button
            className="absolute top-4 left-4  text-white px-3 py-1 rounded-md  z-[10000]"
            onClick={() => {
              setZoom(1);
              setShowPopup(false);
            }}
          >
            ✕
          </button>

          <img
            src={`http://infinity-yn0b-qet3.onrender.com${part.image}`}
            alt={part.product || "Part image"}
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl transition-transform duration-300 cursor-pointer"
            style={{ transform: `scale(${zoom})` }}
            onClick={(e) => e.stopPropagation() || toggleZoom()} // click zoom toggle
          />
        </div>
      )}
          </div>

          <div className="font-bold flex flex-col pt-20 mr-2 lg:mr-20 ml-6 lg:ml-4">
            
           
             <div className="flex justify-left gap-2 p-1">
              <h5 className="!font-bold text-2xl">Item:</h5>
              <h5 className="!font-normal text-lg lg:text-xl  text-gray-400">{part.product}</h5>
            </div>

 <div className="flex justify-left gap-2 p-1">
              <h5 className="!font-bold text-2xl">Manufacturer:</h5>
              <h5 className="!font-normal text-lg lg:text-xl text-gray-400">{part.manufacturer}</h5>
            </div>

 <div className="flex justify-left gap-2 p-1">
              <h5 className="!font-bold text-2xl">Equipment Category:</h5>
              <h5 className="!font-normal text-lg lg:text-xl  text-gray-400">{part.modality}</h5>
            </div>


            <div className="flex justify-left gap-2 p-1">
              <h5 className="!font-bold text-2xl">Part no:</h5>
              <h5 className="!font-normal text-sm  text-gray-400">{part.partNumber}</h5>
            </div>

           

           
            {part.modal && (
              <div className="flex justify-left gap-2 p-1">
                <h5 className="!font-bold text-2xl">Modal:</h5>
                <h5 className="!font-normal text-lg lg:text-xl text-gray-400">{part.modal}</h5>
              </div>
            )}

            <div className="flex justify-left mt-10">
              <button
                onClick={() => navigate("/sign")}
                className="relative inline-flex items-center justify-center font-semibold group w-full sm:w-auto"
              >
                <span className="absolute left-0 w-40 sm:w-10 h-10 border-2 p-4 border-[#39FF14] rounded-full flex items-center justify-center overflow-hidden transition-all duration-700 ease-in-out sm:group-hover:w-[180px]">
                  <span className="hidden lg:block absolute text-[#39FF14] text-xl transition-opacity duration-700 ease-in-out group-hover:opacity-0">
                    &gt;
                  </span>
                  <span className="block sm:hidden text-black text-sm font-semibold">Get A Quote</span>
                </span>
                <span className="hidden sm:inline-block relative text-lg text-black pl-16 pr-4 transition-all duration-700 ease-in-out">
                  Get a Quote
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

   

    </>
  );
};

export default Allmod;
