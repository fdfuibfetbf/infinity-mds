import React from 'react'
import { useForm, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const Rental = () => {
    const defaultValues = {
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    rentalService: null,
    partDescription: "",
  };

  const { register, handleSubmit, control, setValue, watch,reset,formState:{isValid,isSubmitting}  } =useForm({mode:'onChange',defaultValues})

  const customStyles = {
  control: (base, state) => ({
    ...base,

    
    border: `2px solid ${state.isFocused ? "#1E90FF" : "#0046A0"}`,
    boxShadow: state.isFocused ? "0 0 4px rgba(30,144,255,0.4)" : "none",
    backgroundColor: "white",
    color: "#0046A0",
    borderRadius: "12px",
    transition: "all 0.3s ease",
    "&:hover": { borderColor: "#1E90FF" },
  }),
  input: (base) => ({ ...base, color: "#0046A0" }),
  placeholder: (base) => ({
    ...base,
    color: "#0046A0",
     padding:'20px'
  }),
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
  clearIndicator: (base) => ({
    ...base,
    color: "#1E90FF",
    "&:hover": { color: "#0077AA" },
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#1E90FF",
    "&:hover": { color: "#0077AA" },
  }),
};


   const onSubmit = async (data) => {
     const rentalData = {
    ...data,
    rentalService: data.rentalService?.value || "", // 👈 only keep the text
  };

    console.log('data',data)
    console.log('rentalData',rentalData)
    try {
      const res = await fetch('http://infinity-yn0b-qet3.onrender.com/rental', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rentalData),
      });
      const result = await res.json();

      if (res.ok) {
           alert(result.message);
        reset(defaultValues); 
       // setValue("rentalService", null)
       
      } else {
 
        alert(result.message );
      }
    } catch (error) {
      alert("Server error — please try again later.");
    }
  };

  
        
  return (
    <>
  <div className=' bg-gradient-to-br from-[#0a1f44]/90 via-[#3b4c66]/70 to-[#d1d5db]/30 h-24'>

     </div>
    <div>
       <form
      onSubmit={handleSubmit(onSubmit)}
       className="relative max-w-2xl mx-auto bg-[#001F3F] p-8 shadow-md space-y-4 my-5 overflow-hidden"
    >
       
      {/* Input Fields */}
        <div className="relative z-10 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          {...register("firstName")}
          placeholder="First Name"
           className="bg-white border-2 border-[#0046A0] rounded-lg p-3 focus:border-[#1E90FF] outline-none placeholder:text-[#0046A0]"
        />
        <input
          {...register("lastName")}
          placeholder="Last Name"
            className="bg-white border-2 border-[#0046A0] rounded-lg p-3 focus:border-[#1E90FF] outline-none placeholder:text-[#0046A0]"
        />
      </div>

<div className="grid grid-cols-2 gap-4">
      <input
        {...register("companyName")}
        placeholder="Company Name"
         className="bg-white border-2 border-[#0046A0] rounded-lg p-3 focus:border-[#1E90FF] outline-none placeholder:text-[#0046A0]"
      />

      <input
        {...register("email")}
        type="email"
        placeholder="Email"
          className="bg-white border-2 border-[#0046A0] rounded-lg p-3 focus:border-[#1E90FF] outline-none placeholder:text-[#0046A0]"
      />
</div>
     
   <div className="grid grid-cols-2 gap-4">
        <input
          {...register("phoneNumber")}
          placeholder="Phone Number"
            className="bg-white border-2 border-[#0046A0] rounded-lg p-3 focus:border-[#1E90FF] outline-none placeholder:text-[#0046A0]"
        />

      <div>
  <Controller
    name="rentalService"
    control={control}
    render={({ field }) => (
      <CreatableSelect
        {...field}
        placeholder="Select Rental Tools"
        options={[
          { value: "Multivendor Magnet Power Supply", label: "Multivendor Magnet Power Supply" },
          { value: "Coldhead Replacement Kit", label: "Coldhead Replacement Kit" },
           { value: "RTI kV/mA Meters", label: "RTI kV/mA Meters" },
          { value: "MRI-Compatible Tools", label: "MRI-Compatible Tools" },
          { value: "Helium Filling Kits", label: "Helium Filling Kits" },
        ]}
        styles={customStyles}
        isClearable
      />
    )}
  />
</div>
</div>


      <textarea
        {...register("partDescription")}
        placeholder="Message"
        rows="3"
        className="bg-white mt-3 border-2 border-[#0046A0] rounded-lg p-3 focus:border-[#1E90FF] outline-none w-full placeholder:text-[#0046A0]"
      />

      {/* Manufacturer & Modality Selects */}
 


    <div className="text-left">
  <button
    disabled={isSubmitting}
    type="submit"
    className="mt-3 ms-2 w-60 bg-[#1E90FF] text-white font-semibold py-3 rounded-lg hover:bg-[#0046A0] transition-all"
  >
    Submit
  </button>
</div>

      </div>
    </form>
    </div>
      </>
  )
}

export default Rental
