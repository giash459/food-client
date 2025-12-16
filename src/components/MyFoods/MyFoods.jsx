import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const MyFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal এবং form state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFood, setCurrentFood] = useState({
    _id: "",
    name: "",
    category: "",
    quantity: "",
  });

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:5000/foods?donatorEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user]);

  const openModal = (food) => {
    setCurrentFood(food);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentFood({ ...currentFood, [name]: value });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/foods/${currentFood._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentFood),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Updated!", "Food item has been updated.", "success");
        setFoods(
          foods.map((food) =>
            food._id === currentFood._id ? { ...currentFood } : food
          )
        );
        handleCloseModal();
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/foods/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your food has been deleted.", "success");
            setFoods(foods.filter((food) => food._id !== id));
          })
          .catch((err) => console.error(err));
      }
    });
  };

  if (loading) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-5 text-center">My Foods</h2>
      {foods.length === 0 ? (
        <p className="text-center text-gray-500">No foods added yet.</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Category</th>
              <th className="py-2 px-4 border">Quantity</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr key={food._id} className="text-center">
                <td className="py-2 px-4 border">{food.name}</td>
                <td className="py-2 px-4 border">{food.category}</td>
                <td className="py-2 px-4 border">{food.quantity}</td>
                <td className="py-2 px-4 border space-x-2">
                  <button
                    onClick={() => openModal(food)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-96 p-6 relative">
            <h3 className="text-xl font-bold mb-4">Update Food</h3>
            <form onSubmit={handleUpdateSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                value={currentFood.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                name="category"
                value={currentFood.category}
                onChange={handleChange}
                placeholder="Category"
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="number"
                name="quantity"
                value={currentFood.quantity}
                onChange={handleChange}
                placeholder="Quantity"
                className="w-full border px-3 py-2 rounded"
                required
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyFoods;
