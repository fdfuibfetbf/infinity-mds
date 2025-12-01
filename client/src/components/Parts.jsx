import React, { useState,useMemo ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from "lucide-react";
import CreatableSelect from 'react-select/creatable';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Parts = ({h1,p1,img,h2,p,style}) => {

  const navigate=useNavigate()
    const [selectedManufacturer, setSelectedManufacturer] = useState(null);
  const [selectedModality, setSelectedModality] = useState(null);
  const [part, setParts] = useState([]); // fetched data

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // you can change this to 6, 9, etc.


 useEffect(() => {
    const fetchParts = async () => {
      try {
        const res = await fetch("http://infinity-yn0b-qet3.onrender.com/");
        const data = await res.json();
        setParts(data);
        console.log("Fetched Parts:", data);
      } catch (err) {
        console.error("Error fetching parts:", err);
      }
    };
    fetchParts();
  }, []);
    
  


const parsedData = useMemo(() =>
  part.map(item => ({
    ...item,
    manufacturer: item.manufacturer?.trim() || '',
    modality: item.modality?.trim() || '',
    p: item.product || 'Unnamed Product',
    img: item.image || '/placeholder.jpg',
  })), [part]);
 


  // --- Unique manufacturer list ---
  const manufacturers = [...new Set(parsedData.map(i => i.manufacturer))]
    .map(m => ({ value: m, label: m }));

  // --- Filter modalities for selected manufacturer ---
  const modalities = selectedManufacturer
    ? [...new Set(parsedData
        .filter(i => i.manufacturer === selectedManufacturer.value)
        .map(i => i.modality))]
        .map(m => ({ value: m, label: m }))
    : [];

  // --- Filter items based on current selections ---
 const filteredItems = parsedData.filter(item =>
  (!selectedManufacturer || item.manufacturer === selectedManufacturer.value) &&
  (!selectedModality || item.modality === selectedModality.value)
);








 // --- Pagination should use filtered items ---
const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);


  // 🔹 Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // optional: scroll to top
  };


  return (

    <>
      
   
 <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // keeps globe fully visible
        backgroundPosition: "center",
      }}
       className="bg-gray-100 mt-5  relative w-screen sm:w-[20%] md:w-[100%] lg:w-[100%] h-96 sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[600px] 2xl:h-[780px]"
    >

      {/* Animated Texts */}
      <div className="absolute inset-0 w-full h-full  bg-gradient-to-br from-[#0a1f44]/90 via-[#3b4c66]/70 to-[#d1d5db]/30 z-10 flex flex-col items-left justify-center">
        <motion.h1
         initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="text-white text-center sm:!text-sm lg:!text-6xl font-bold px-5 mt-5"
        >
          {h1}
        </motion.h1>

        <motion.p
           initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
  className="mt-4 text-white text-center px-12 sm:px-20 lg:px-12 lg:text-xl font-normal"
        >
          {p1}
        </motion.p>
      </div>

      
    </div>



<div className='flex ml-20 mt-8 mb-0 items-center space-x-2'>
  <Link
    to="/equip"
    className="text-2xl font-semibold text-[#001F3F] hover:text-[#39FF14] transition-all duration-300 transform hover:scale-102"
    style={{ textDecoration: 'none' }}
  >
    <h3>{h2} </h3>
  </Link>
  <p style={style} className='text-xl mt-3 text-gray-500'>{p}</p>
</div>

<div className='sm:flex sm:felx-col lg:flex  w-screen h-auto mt-12 mb-10'>

    <div className='ml-3 lg:w-[25%] bg-white h-auto shadow-lg'>

 <div className="flex flex-wrap justify-center gap-2 my-6">

       
{/* Manufacturer Select */}
<div className="w-64">
  <CreatableSelect
    placeholder="Select Manufacturer..."
    options={manufacturers}
    value={selectedManufacturer}
    onChange={(option) => {
      setSelectedManufacturer(option);
      setSelectedModality(null); // reset modality when manufacturer changes
    }}
    isClearable
    isSearchable={false}
    isValidNewOption={() => false}
    formatCreateLabel={() => null}
    styles={{
      control: (base, state) => ({
        ...base,
        border: `2px solid ${state.isFocused ? '#1E90FF' : '#0046A0'}`, // blue border
        boxShadow: state.isFocused
          ? '0 0 4px rgba(30,144,255,0.4)' // soft glow when focused
          : 'none',
        backgroundColor: 'white',
        color: '#0046A0',
        borderRadius: '12px',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: '#1E90FF',
        },
      }),
      input: (base) => ({ ...base, color: '#0046A0' }),
      placeholder: (base) => ({
        ...base,
        color: '#4A76C9',
         fontWeight: 'bold', // <-- make options bold
  fontSize: '1rem',
      }),
      singleValue: (base) => ({ ...base, color: '#0046A0' }),
      menu: (base) => ({
        ...base,
        background: 'white',
        borderRadius: 0,
        marginTop: 2,
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }),
      option: (base, state) => ({
        ...base,
        textAlign: 'left',
        padding: '12px 14px',
        background: state.isFocused
          ? '#001F3F'
          : 'transparent',
        color: state.isFocused ? 'white' : '#0046A0',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
         fontWeight: 'bold', // <-- make options bold
  fontSize: '1rem', 
        '&:last-child': { borderBottom: 'none' },
        '&:active': {
          background: 'linear-gradient(to right, #009ACD, #0077AA)',
          color: 'white',
        },
      }),
    clearIndicator: (base) => ({
  ...base,
  color: '#1E90FF', // solid blue always
   '&:hover': { color: '#0077AA' },
}),
dropdownIndicator: (base) => ({
  ...base,
  color: '#1E90FF',
    '&:hover': { color: '#0077AA' },
}),


    }}
  />
</div>


{/* Modality Select */}
<div className="w-64 mt-1">
  <CreatableSelect
    placeholder="Select Modality..."
    options={modalities}
    value={selectedModality}
    onChange={setSelectedModality}
    isDisabled={!selectedManufacturer} // disabled until manufacturer selected
    isClearable
    isSearchable={false}
    isValidNewOption={() => false}
    formatCreateLabel={() => null}
    styles={{
      control: (base, state) => ({
        ...base,
        border: `2px solid ${state.isFocused ? '#1E90FF' : '#0046A0'}`, // blue border
        boxShadow: state.isFocused
          ? '0 0 4px rgba(30,144,255,0.4)' // soft glow when focused
          : 'none',
        backgroundColor: 'white',
        color: '#0046A0',
        borderRadius: '12px',
        transition: 'all 0.3s ease',
      
        cursor: !selectedManufacturer ? 'not-allowed' : 'pointer',
        opacity: !selectedManufacturer ? 0.6 : 1,
        '&:hover': {
          borderColor: '#1E90FF',
        },
      }),
      input: (base) => ({ ...base, color: '#0046A0' }),
      placeholder: (base) => ({
        ...base,
        color: '#4A76C9',
        fontWeight: 'bold', // <-- make options bold
  fontSize: '1rem',
      }),
      singleValue: (base) => ({ ...base, color: '#0046A0' }),
      menu: (base) => ({
        ...base,
        background: 'white',
        borderRadius: 0,
        marginTop: 2,
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }),
      option: (base, state) => ({
        ...base,
        textAlign: 'left',
        padding: '12px 14px',
        background: state.isFocused
          ? '#001F3F'
          : 'transparent',
        color: state.isFocused ? 'white' : '#0046A0',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
            fontWeight: 'bold', // <-- make options bold
  fontSize: '1rem',
        '&:last-child': { borderBottom: 'none' },
        '&:active': {
          background: 'linear-gradient(to right, #009ACD, #0077AA)',
          color: 'white',
        },
      }),
      clearIndicator: (base) => ({
        ...base,
        color: '#1E90FF', // solid blue always
        '&:hover': { color: '#0077AA' },
      }),
      dropdownIndicator: (base) => ({
        ...base,
        color: '#1E90FF', // solid blue arrow
        '&:hover': { color: '#0077AA' },
      }),
    }}
  />
</div>


  </div>

     

     
    </div>
    

    <div className='lg:w-[90%]'>
 {/* --- CARDS --- */}
      <div className='flex flex-wrap justify-center gap-4 '>
        {currentItems.map((v, idx) => (
           
          <div
            key={idx}
            className="overflow-hidden w-80 h-80 shadow-lg rounded-sm transform transition duration-300 hover:-translate-y-0.5 hover:scale-102"
          >
            
            <div    onClick={() => navigate("/allmod", { state: { part: v } })}
        className="cursor-pointer">
<img className="w-100 pt-2 h-55 object-contain bg-white" src={`http://infinity-yn0b-qet3.onrender.com${v.image}`}
 alt={v.p} />

           <h6 className="font-bold px-4 mt-2 text-[#001F3F]">
 
   {v.partNumber ? `${v.partNumber}` : ''} 
  {v.manufacturer ? ` - ${v.manufacturer}` : ''} 
  {v.modality ? ` - ${v.modality}` : ''} 
{v.product ? ` - ${v.product}` : ''} 
</h6>

            </div>
          </div>
        ))}

        {/* No results */}
        {filteredItems.length === 0 && (
          <p className="text-gray-600 font-semibold mt-5">
            No items found.
          </p>
        )}
      </div>

  


<div className='flex gap-3 justify-center mt-10'>
  {/* Prev button */}
  <button
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
    className='focus:outline-none px-2 py-2 text-white bg-[#39FF14]/100 rounded disabled:opacity-50 hover:scale-105 transition-transform'
  >
   <ChevronLeft size={28} />
  </button>

  {/* Current page indicator */}
  <span className='px-4 py-2 bg-gray-200 rounded text-gray-800 font-semibold'>
    {currentPage} / {totalPages}
  </span>

  {/* Next button */}
  <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    className='focus:outline-none px-2 py-2 text-white bg-[#39FF14]/100 rounded disabled:opacity-50 hover:scale-105 transition-transform'
  >
      <ChevronRight size={28} />
  </button>
</div>


    </div>

</div>

</>

  )
}

export default Parts
