import React, { useState, useEffect, useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { motion } from "framer-motion";

const customStyles = {
  control: (base, state) => ({
    ...base,
    border: `2px solid ${state.isFocused ? "#1E90FF" : "#0046A0"}`,
    boxShadow: state.isFocused ? "0 0 4px rgba(30,144,255,0.4)" : "none",
    backgroundColor: "white",
    color: "#0046A0",
    borderRadius: "12px",
    transition: "all 0.3s ease",
    fontSize: "14px",  
    "&:hover": { boraderColor: "#1E90FF" },
  }),
  input: (base) => ({ ...base, color: "#0046A0" ,fontSize: "14px"}),
  placeholder: (base) => ({ ...base, color: "#4A76C9", fontStyle: "san-serif" }),
  singleValue: (base) => ({ ...base, color: "#0046A0" }),
  menu: (base) => ({
    ...base,
    background: "white",
    borderRadius: 0,
    marginTop: 2,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  }),
  option: (base, state) => ({
    ...base,
    textAlign: "left",
    padding: "12px 14px",
    background: state.isFocused ? "#001F3F" : "transparent", 
    color: state.isFocused ? "white" : "#0046A0",
    cursor: "pointer",
    transition: "all 0.3s ease",
  }),
  clearIndicator: (base) => ({ ...base, color: "#1E90FF", "&:hover": { color: "#0077AA" } }),
  dropdownIndicator: (base) => ({ ...base, color: "#1E90FF", "&:hover": { color: "#0077AA" } }),
};


const Sign = () => {
  const { register, handleSubmit, control, setValue, reset, formState: { isSubmitting } } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      part: null,
      modality: null,
      manufacturer: null,
      partDescription: "",
    },
  });

  const [parts, setParts] = useState([]);

  // Fetch parts from backend
  useEffect(() => {
    fetch("http://infinity-yn0b-qet3.onrender.com/") // replace with your route
      .then(res => res.json())
      .then(data => setParts(data))
      .catch(err => console.error(err));
  }, []);

  // Map backend data to p format
  const parsedData = useMemo(() => {
    return parts.map(item => ({
      ...item,
      p: `${item.partNumber} - ${item.manufacturer} - ${item.modality} - ${item.product}`,
    }));
  }, [parts]);

  const manufacturers = useMemo(() => {
    return [...new Set(parsedData.map(i => i.manufacturer).filter(Boolean))].map(
      m => ({ value: m, label: m })
    );
  }, [parsedData]);

  const modalities = useMemo(() => {
    return [...new Set(parsedData.map(i => i.modality).filter(Boolean))].map(
      m => ({ value: m, label: m })
    );
  }, [parsedData]);

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const res = await fetch("http://infinity-yn0b.onrender.com/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (res.ok) {
        alert(result.message);
        reset({
          firstName: "",
          lastName: "",
          companyName: "",
          email: "",
          phoneNumber: "",
          part: null,
          modality: null,
          manufacturer: null,
          partDescription: "",
        });
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (error) {
      alert("Server error — please try again later.");
    }
  };

  return (
    <>
     <div style={{ backgroundImage: `url('/images/con12.jpeg')`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'100% 100%',
            backgroundPosition:'center'
    
          }}
          className="bg-gray-100 mt-5 relative w-screen sm:w-[20%] md:w-[100%] lg:w-[100%] h-96 sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[600px] 2xl:h-[780px]">
      <div className="absolute inset-0   bg-gradient-to-br from-[#0a1f44]/90 via-[#3b4c66]/70 to-[#d1d5db]/30 z-10 flex flex-col items-left justify-center w-full h-full">
       <motion.h1
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-white text-left sm:!text-sm lg:!text-6xl font-bold px-5 !mb-64"
    >
    Contact us directly
    </motion.h1>
    
   
        
    
    
      </div>
    
        </div>

        
          <p className='mt-5   px-6 lg:px-64 pb-4 text-lg text-justify '>
            Complete the form below to reach out to us with your medical imaging needs. For urgent part requests, please contact us at info@infinitymedical.co for the quick assistance.
</p>
    
     

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative max-w-2xl mx-auto bg-[#001F3F]  p-8  shadow-md space-y-4 my-5 overflow-hidden"
      >
        <div className="relative z-10 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input {...register("firstName")} placeholder="First Name" className="bg-white border-2 border-[#0046A0] rounded-lg p-3 focus:border-[#1E90FF] outline-none placeholder:text-[#0046A0]" />
            <input {...register("lastName")} placeholder="Last Name" className="bg-white border-2 border-[#0046A0] rounded-lg p-3 focus:border-[#1E90FF] outline-none placeholder:text-[#0046A0]" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input {...register("companyName")} placeholder="Company Name" className="bg-white border-2 border-[#0046A0] rounded-lg p-3 focus:border-[#1E90FF] outline-none placeholder:text-[#0046A0]" />
            <input {...register("email")} type="email" placeholder="Email" className="bg-white border-2 border-[#0046A0] rounded-lg p-3 focus:border-[#1E90FF] outline-none placeholder:text-[#0046A0]" />
          </div>

          <input {...register("phoneNumber")} placeholder="Phone Number" className="bg-white border-2 border-[#0046A0] rounded-lg p-3 w-64 focus:border-[#1E90FF] outline-none placeholder:text-[#0046A0]" />

          <div className="flex flex-wrap justify-center gap-1 my-6">
            {/* Part Selector */}
            <div className="w-48">
              <Controller
                name="part"
                control={control}
                render={({ field }) => {
                  const selectedOption = parsedData.find(item => item.p === field.value);
                  return (
                    <CreatableSelect
                      {...field}
                      placeholder="Select Items..."
                      options={parsedData.map(item => ({ value: item.p, label: item.p }))}
                      styles={customStyles}
                      isClearable
                      value={selectedOption ? { value: selectedOption.p, label: selectedOption.p } : null}
                      onChange={option => {
                        field.onChange(option?.value || null);
                        const selected = parsedData.find(i => i.p === option?.value);
                        setValue("modality", selected?.modality || null);
                        setValue("manufacturer", selected?.manufacturer || null);
                      }}
                    />
                  );
                }}
              />
            </div>

            {/* Modality */}
            <div className="w-48">
              <Controller
                name="modality"
                control={control}
                render={({ field }) => (
                  <CreatableSelect
                    {...field}
                    placeholder="Equipment Category"
                    options={modalities}
                    styles={customStyles}
                    
                    isDisabled
                    value={modalities.find(m => m.value === field.value) || null}
                  />
                )}
              />
            </div>

            {/* Manufacturer */}
            <div className="w-48">
              <Controller
                name="manufacturer"
                control={control}
                render={({ field }) => (
                  <CreatableSelect
                    {...field}
                    placeholder="Manufacturer"
                    options={manufacturers}
                    styles={customStyles}
                    isDisabled
                    value={manufacturers.find(m => m.value === field.value) || null}
                  />
                )}
              />
            </div>
          </div>

          <textarea {...register("partDescription")} placeholder="Message" rows="3" className="bg-white mt-3 border-2 border-[#0046A0] rounded-lg p-3 focus:border-[#1E90FF] outline-none w-full placeholder:text-[#0046A0]" />

          <div className="text-left">
            <button disabled={isSubmitting} type="submit" className="mt-3 ms-2 w-60 bg-[#1E90FF] text-white font-semibold py-3 rounded-lg hover:bg-[#0046A0] transition-all">
              Submit
            </button>
          </div>
        </div>
      </form>

      <div >
        <h1 className="my-5 ">Our Location</h1>
       <iframe
    title="Google Map"
    src="https://maps.google.com/maps?q=25.273910,55.322837&z=17&output=embed"
    className='mb-5 mx-auto w-[360px] lg:w-[1200px] '
    height="330"
  
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


    </>
  );
};

export default Sign;
