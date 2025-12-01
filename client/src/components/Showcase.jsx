import { useNavigate } from "react-router-dom";

const Showcase = ({content=[]}) => {
  const navigate = useNavigate();

 

  return (
    <div className="w-full flex flex-col gap-2 py-12 px-6 md:px-16 bg-[#f9f9f9] mt-5">
     
      {content.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-5 mt-5 mb-3 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
            style={{
    boxShadow: " 0 0 15px #001F3F"
  }}
              src={item.img}
              alt={item.heading}
              className="w-full md:w-[90%] h-128 md:h-80 object-contain rounded-2xl"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl text-center md:text-3xl font-bold text-[#001A4D]">
              {item.heading}
            </h2>
            <p className="text-gray-700 leading-relaxed mt-3 text-center px-12 md:px-32 lg:px-32">{item.paragraph}</p>
            
                    <div className="flex justify-center mt-10">
                           <button
    onClick={() => {
      // Replace with your navigation logic
      navigate("/rental")
      console.log("Button clicked");
    }}
    className="relative inline-flex items-center justify-center font-semibold group w-full sm:w-auto"
  >
    {/* Expanding circle */}
    <span
      className="absolute left-22 md:left-0 lg:left-0 w-40 sm:w-10 h-10 border-2 p-4 border-[#39FF14] rounded-full flex items-center justify-center 
                 overflow-hidden transition-all duration-700 ease-in-out sm:group-hover:w-[280px]"
    >
      {/* '>' fades out on hover (only on lg) */}
      <span className="hidden lg:block absolute text-[#39FF14] text-xl transition-opacity duration-700 ease-in-out group-hover:opacity-0">
        &gt;
      </span>

      {/* Text inside circle for small screens */}
      <span className="block sm:hidden text-black text-sm font-semibold">
         {item.btn}
      </span>
    </span>

    {/* Text outside circle for large screens */}
    <span className="hidden sm:inline-block relative text-lg text-black pl-16 pr-4  transition-all duration-700 ease-in-out">
      {item.btn}
    </span>
  </button>
  </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Showcase;
