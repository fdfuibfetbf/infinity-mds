import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [equipOpen, setEquipOpen] = useState(false);
  const [isEquipOpen, setIsEquipOpen] = useState(false);
 const [serviceOpen, setServiceOpen] = useState(false)
  const [isSerOpen, setIsSerOpen] = useState(false);

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex flex-row justify-between  items-center
        px-4 sm:px-6 md:px-10 lg:px-16 
        h-20 sm:h-24 bg-white shadow-md border-b-2 border-b-[#1E90FF]`}
      >
        <Link to="/">
          <div className="flex items-center">
            <img
              className="w-32 lg:w-48 h-18 md:h-28 lg:h-42 ml-4"
              src="/images/logo.png"
              alt="Logo"
            />
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-10"
        >
          <span
            className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-black my-[6px] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>

        {/* Desktop Menu */}
        <ul className="  mr-6 mt-3 hidden lg:flex lg:flex-row w-auto gap-6 p-2">
             <Link to="/about">
            <li className="font-bold text-xl text-black border-b-2 border-transparent cursor-pointer transition-all duration-300 inline-block hover:!text-[#1E90FF] hover:border-[#1E90FF]">
              About us
            </li>
          </Link>
          <li
            className="relative group "
            onMouseEnter={() => setIsEquipOpen(true)}
            onMouseLeave={() => setIsEquipOpen(false)}
          >
            <button className="font-bold !text-lg text-black border-b-2 border-transparent cursor-pointer transition-all duration-300 inline-block hover:!text-[#1E90FF] hover:border-[#1E90FF]">
              Equipment ▾
            </button>

            <ul
              className={`p-0  absolute left-0 top-full z-10 bg-white w-[250px] shadow-lg transition-all duration-300 ${
                isEquipOpen ? "block" : "hidden"
              }`}
            >
              {[
                { to: "/mripro", label: "MRI" },
                { to: "/ctpro", label: "CT Scan" },
                { to: "/xrypro", label: "Digital X-Ray" },
                { to: "/crpro", label: "CR System" },
                { to: "/ultrapro", label: "Ultrasound" },
                { to: "/mampro", label: "Mammography" },
                { to: "/fluopro", label: "Fluoroscopy" },
                { to: "/gampro", label: "Gamma Camera" },
                { to: "/angpro", label: "Angiography" },
              ].map(({ to, label }) => (
                <Link key={to} to={to} onClick={() => setIsEquipOpen(false)}>
                  <li className="inline-block !text-lg font-bold text-left text-black px-3 py-2 hover:!text-white hover:bg-[#001F3F] transition-all duration-300 cursor-pointer w-full">
                    {label}
                  </li>
                </Link>
              ))}
            </ul>
          </li>

  <Link to="/allpro">
            <li className="font-bold text-xl text-black border-b-2 border-transparent cursor-pointer transition-all duration-300 inline-block hover:!text-[#1E90FF] hover:border-[#1E90FF]">
              Parts
            </li>
          </Link>
         
         
           <li
            className="relative group "
            onMouseEnter={() => setIsSerOpen(true)}
            onMouseLeave={() => setIsSerOpen(false)}
          >
            <button className="mb-0 font-bold !text-xl text-black border-b-2 border-transparent cursor-pointer transition-all duration-300 inline-block hover:!text-[#1E90FF] hover:border-[#1E90FF]">
              Services ▾
            </button>

            <ul
              className={`p-0 absolute left-0 top-full z-10 bg-white w-[250px] shadow-lg transition-all duration-300 ${
                isSerOpen ? "block" : "hidden"
              }`}
            >
              {[
                { to: "/ser", label: "Rental Tools" },
                { to: "/renser", label: "Services" },
                
              ].map(({ to, label }) => (
                <Link key={to} to={to} onClick={() => setIsSerOpen(false)}>
                  <li className="inline-block text-lg font-bold text-left text-black px-3 py-2 hover:!text-white hover:bg-[#001F3F] transition-all duration-300 cursor-pointer w-full">
                    {label}
                  </li>
                </Link>
              ))}
            </ul>
          </li>

        
       
          <Link to="/sign">
            <li className="font-bold text-xl text-black border-b-2 border-transparent cursor-pointer transition-all duration-300 inline-block hover:!text-[#1E90FF] hover:border-[#1E90FF]">
              Contact us
            </li>
          </Link>
 <Link to="/admlog">
            <li className="font-bold text-xl text-black border-b-2 border-transparent cursor-pointer transition-all duration-300 inline-block hover:!text-[#1E90FF] hover:border-[#1E90FF]">
              Login
            </li>
          </Link>
           
        </ul>

        {/* Mobile Menu */}
   {menuOpen && (
  <div className="fixed top-0 right-0 w-full h-screen bg-gradient-to-r from-[#00BFFF] via-[#1E90FF] to-[#104E8B] z-50 transition-transform duration-300 transform translate-x-0 overflow-y-auto">
    
    {/* Close Button Container */}
    <div className="flex justify-end items-center px-6 pt-4">
      <button
        onClick={() => {
          setMenuOpen(false);
          setEquipOpen(false);
          // Assuming you'd need to close the service dropdown as well
          setServiceOpen(false); 
        }}
        className="text-3xl font-bold text-white"
      >
        ×
      </button>
    </div>

    {/* Navigation List */}
    <ul className="flex flex-col items-start gap-2 px-6 pt-6">
      
      {/* Equipment Dropdown Toggle */}
      <li
        onClick={() => setEquipOpen(!equipOpen)}
        className="text-white text-xl font-bold py-2  cursor-pointer w-32"
      >
        Equipment {equipOpen ? "▴" : "▾"}
      </li>

      {/* Equipment Sub-Menu */}
      {equipOpen && (
        <ul className="pl-6 w-full">
          {[
            { to: "/mripro", label: "MRI" },
            { to: "/ctpro", label: "CT Scan" },
            { to: "/xrypro", label: "Digital X-Ray" },
            { to: "/crpro", label: "CR System" },
            { to: "/ultrapro", label: "Ultrasound" },
            { to: "/mampro", label: "Mammography" },
            { to: "/fluopro", label: "Fluoroscopy" },
            { to: "/gampro", label: "Gamma Camera" },
            { to: "/angpro", label: "Angiography" },
         
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              style={{ textDecoration: "none" }}
            >
              <li className="text-white py-2 text-left text-lg hover:bg-white/10 transition-colors rounded">{label}</li>
            </Link>
          ))}
        </ul>
      )}
      
      {/* --- NEW SERVICES DROPDOWN START --- */}

      {/* Services Dropdown Toggle (Assuming 'serviceOpen' state) */}
      <li
        onClick={() => setServiceOpen(!serviceOpen)}
        className="text-white text-xl font-bold py-2 cursor-pointer w-28"
      >
        Services {serviceOpen ? "▴" : "▾"}
      </li>

      {/* Services Sub-Menu */}
      {serviceOpen && (
        <ul className="pl-6 w-full">
          {[
            { to: "/ser", label: "Rental Services" }, // Placeholder path
            { to: "/renser", label: "Services" },        // Placeholder path
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              style={{ textDecoration: "none" }}
            >
              <li className="text-white py-2 text-left text-lg hover:bg-white/10 transition-colors rounded">{label}</li>
            </Link>
          ))}
        </ul>
      )}

      {/* --- NEW SERVICES DROPDOWN END --- */}


      {/* Main Navigation Items */}
      {[
        { to: "/allpro", label: "Parts" },
        { to: "/about", label: "About us" },
        { to: "/sign", label: "Contact us" },
      ].map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          onClick={() => setMenuOpen(false)}
          style={{ textDecoration: "none" }}
        >
          <li className="inline-block text-xl text-left px-2 py-2 text-white cursor-pointer w-full font-bold">
            {label}
          </li>
        </Link>
      ))}
    </ul>
  </div>
)}
      </nav>
    </div>
  );
};

export default Navbar;
