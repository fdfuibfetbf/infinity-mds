import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Edit, Trash } from "lucide-react";
const Parttable = () => {
      const [parts, setParts] = useState([]);
 const [editingPart, setEditingPart] = useState(null); // store part data
  const [formData, setFormData] = useState(false)

  // ✅ This is the missing function (handles inputs + file)

    // ✅ Submit update
  
  
        const fetchParts = async () => {
    try {
      const res = await fetch('http://infinity-yn0b-qet3.onrender.com/');
      const data = await res.json();
      setParts(data);
    } catch (error) {
      console.error("Error fetching parts:", error);
    }
  };

  const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this part?")) return;

  try {
    const response = await fetch(`http://infinity-yn0b-qet3.onrender.com/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    if (response.ok) {
      alert("Part deleted successfully ✅");
      // Remove the deleted part from the UI without reloading
      setParts((prevParts) => prevParts.filter((part) => part._id !== id));
    } else {
      alert(data.message || "Failed to delete part ❌");
    }
  } catch (error) {
    console.error("Error deleting part:", error);
    alert("Server error while deleting part ❌");
  }
};

const handleUpdate = async (e) => {
  e.preventDefault();

  // ✅ Prepare the form data
  const form = e.target;
  const formData = new FormData(form);

  try {
    const res = await fetch(`http://infinity-yn0b-qet3.onrender.com/${editingPart._id}`, {
      method: "PUT",
      body: formData, // sending formData to support file upload
    });

    const data = await res.json();

    if (res.ok) {
      // ✅ Update the UI
     setParts((prevParts) =>
  prevParts.map((part) =>
    part._id === editingPart._id ? data.part : part
  )
);

      

      alert("✅ Part updated successfully!");
      setFormData(false); // close form
      setEditingPart(null);
      form.reset();
    } else {
      alert("❌ Failed to update part: " + data.message);
    }
  } catch (err) {
    console.error("Update error:", err);
    alert("❌ An error occurred while updating the part.");
  }
};

const handleEdit = (part) => {
  setEditingPart(part); // set the selected part data
  setFormData(true);    // show the form
};



  useEffect(() => {
    fetchParts();
  }, []);


  return (
    <div>
       {/* ✅ Parts Table */}
      <div className="w-full ms-4 pt-32 max-w-7xl   p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
          All Parts
        </h2>
      <Link to="/partform">
  <button className="mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition duration-300">
    + Add Product
  </button>
</Link>

        <div className="overflow-x-auto max-h-[300px] overflow-y-auto mb-5">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="sticky top-0 z-20">
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-3 py-2">Image</th>
                <th className="border border-gray-300 px-1 py-2">Part #</th>
                <th className="border border-gray-300 px-3 py-2">Manufacturer</th>
                <th className="border border-gray-300 px-3 py-2">Modality</th>
                <th className="border border-gray-300 px-3 py-2">Product</th>
                <th className="border border-gray-300 px-3 py-2">Modal</th>
                <th className="border border-gray-300 px-3 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {parts.length > 0 ? (
                parts.map((part) => (
                  <tr key={part._id} className="text-center hover:bg-gray-100">
                    <td className="border border-gray-300 px-3 py-2">
                      {part.image ? (
                        <img
                          src={`http://infinity-yn0b-qet3.onrender.com${part.image}`}
                          alt={part.partNumber}
                          className="w-16 h-16 object-cover mx-auto rounded"
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">{part.partNumber}</td>
                    <td className="border border-gray-300 px-3 py-2">{part.manufacturer}</td>
                    <td className="border border-gray-300 px-3 py-2">{part.modality}</td>
                    <td className="border border-gray-300 px-3 py-2">{part.product}</td>
                    <td className="border border-gray-300 px-3 py-2">{part.modal || "-"}</td>
                     <td className="border border-gray-300 px-3 py-2 flex items-center justify-center gap-3">
            <button
              onClick={() => handleEdit(part)}
              className="text-blue-600 hover:text-[#00BFFF] transition"
            >
              <Edit size={18} />
            </button>
            <button
              onClick={() => handleDelete(part._id)}
              className="text-red-600 hover:text-red-800 transition"
            >
              <Trash size={18} />
            </button>
          </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    No parts added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

{formData && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
    <div className="bg-white rounded-xl shadow-lg p-6 w-96">
      <h2 className="text-lg font-bold text-center text-blue-700 mb-4">
        Edit Part
      </h2>

      <form onSubmit={handleUpdate} className="space-y-3">
        <input
          type="text"
          name="partNumber"
          placeholder="Part Number"
          defaultValue={editingPart?.partNumber}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="manufacturer"
          placeholder="Manufacturer"
          defaultValue={editingPart?.manufacturer}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="modality"
          placeholder="Modality"
          defaultValue={editingPart?.modality}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="product"
          placeholder="Product"
          defaultValue={editingPart?.product}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="modal"
          placeholder="Modal"
          defaultValue={editingPart?.modal}
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="file"
          name="image"
          className="w-full border px-3 py-2 rounded"
        />

        {/* ✅ Action Buttons */}
        <div className="flex gap-2 mt-4">
          <button
            type="button"
            onClick={() => setFormData(false)}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
)}

          
        </div>
      </div>
  
    </div>
  )
}

export default Parttable
