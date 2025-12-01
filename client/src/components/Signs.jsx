import React, { useState, useEffect, useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";



const Signs = () => {
  const { register, handleSubmit,reset, formState: { isSubmitting } } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
    
      partDescription: "",
    },
  });




  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const res = await fetch("http://infinity-yn0b-qet3.onrender.com/forms", {
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
      <div className="bg-[#0a1f44]/90 h-24"></div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative max-w-2xl mx-auto bg-[#001F3F]  p-8 shadow-md space-y-4 my-5 overflow-hidden"
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



          <textarea {...register("partDescription")} placeholder="Type Description of Equipment & required Services" rows="3" className="bg-white mt-3 border-2 border-[#0046A0] rounded-lg p-3 focus:border-[#1E90FF] outline-none w-full placeholder:text-[#0046A0]" />

          <div className="text-left">
            <button disabled={isSubmitting} type="submit" className="mt-3 ms-2 w-60 bg-[#1E90FF] text-white font-semibold py-3 rounded-lg hover:bg-[#0046A0] transition-all">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signs;
