import React from 'react';
import { useForm } from 'react-hook-form';

const PartForm = () => {
  const defaultValues = {
   partNumber:'',
   manufacturer:'',
   modality:'',
   product:'',
   modal:'',
   image:null
  };
  const { register, handleSubmit,reset ,formState:{isValid,isSubmitting } } = useForm({defaultValues});
const onSubmit = async (data) => {
  try {
      console.log("Form data before sending:", data);

    // ✅ Create a FormData object
    const formData = new FormData();
    formData.append("partNumber", data.partNumber);
    formData.append("manufacturer", data.manufacturer);
    formData.append("modality", data.modality);
    formData.append("product", data.product);
    formData.append("modal", data.modal || "");

    // ✅ Append the image file
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]); // <-- must match multer field name ("image")
    }

    const res = await fetch('http://infinity-yn0b-qet3.onrender.com/add', {
      method: "POST",
      // When sending FormData, don't set Content-Type manually — browser handles it
      body: formData,
    });

    const result = await res.json();
    if (!res.ok) {
      alert(result.message || "Failed to submit part");
      return;
    }

    console.log("Backend Response:", result);
    alert("Part added successfully!");
    reset(defaultValues)
   
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Something went wrong!");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Add New Part</h2>

        {/* Row 1: Part Number + Manufacturer */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Part Number</label>
            <input
              {...register("partNumber")}
              type="text"
              placeholder="Enter part number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Manufacturer</label>
            <input
              {...register("manufacturer")}
              type="text"
              placeholder="Enter manufacturer"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Row 2: Modality + Product */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Modality</label>
            <input
              {...register("modality")}
              type="text"
              placeholder="Enter modality"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Product</label>
            <input
              {...register("product")}
              type="text"
              placeholder="Enter product name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Row 3: Modal + Image */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Modal (optional)</label>
            <input
              {...register("modal")}
              type="text"
              placeholder="Enter modal"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Image URL / Filename</label>
            <input
              {...register("image")}
              type="file"
              placeholder="Enter image URL or filename"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
        disabled={isSubmitting}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Part
        </button>
      </form>
    </div>
  );
};

export default PartForm;
