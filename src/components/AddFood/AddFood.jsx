import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleAddFood = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value; // string only
        const foodQuantity = form.foodQuantity.value;
        const pickupLocation = form.pickupLocation.value;
        const expireDate = form.expireDate.value;
        const notes = form.notes.value;

        const newFood = {
            foodName,
            foodImage,
            foodQuantity,
            pickupLocation,
            expireDate,
            notes,
            food_status: "Available",
            donator: {
                name: user?.displayName,
                email: user?.email,
                image: user?.photoURL,
            }
        };

        const res = await fetch("http://localhost:3000/foods", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newFood),
        });

        const data = await res.json();

        if (data.success) {
            toast.success("Food Added Successfully!");
            form.reset();

            setTimeout(() => {
                navigate("/");
            }, 1000);
        } else {
            toast.error("Failed to add food!");
        }

        setLoading(false);
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-3xl font-bold text-center mb-5">Add New Food</h2>

            <form onSubmit={handleAddFood} className="space-y-4">

                {/* Food Name */}
                <div>
                    <label className="font-medium">Food Name</label>
                    <input
                        type="text"
                        name="foodName"
                        className="w-full border p-2 rounded"
                        placeholder="Enter food name"
                        required
                    />
                </div>

                {/* Food Image URL */}
                <div>
                    <label className="font-medium">Food Image URL</label>
                    <input
                        type="text"
                        name="foodImage"
                        className="w-full border p-2 rounded"
                        placeholder="Paste image URL"
                        required
                    />
                </div>

                {/* Food Quantity */}
                <div>
                    <label className="font-medium">Food Quantity</label>
                    <input
                        type="text"
                        name="foodQuantity"
                        className="w-full border p-2 rounded"
                        placeholder="Ex: Serves 2 people"
                        required
                    />
                </div>

                {/* Pickup Location */}
                <div>
                    <label className="font-medium">Pickup Location</label>
                    <input
                        type="text"
                        name="pickupLocation"
                        className="w-full border p-2 rounded"
                        placeholder="Enter pickup location"
                        required
                    />
                </div>

                {/* Expire Date */}
                <div>
                    <label className="font-medium">Expire Date</label>
                    <input
                        type="date"
                        name="expireDate"
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>

                {/* Notes */}
                <div>
                    <label className="font-medium">Additional Notes</label>
                    <textarea
                        name="notes"
                        rows="3"
                        className="w-full border p-2 rounded"
                        placeholder="Write notes..."
                    ></textarea>
                </div>

                {/* Donator Info */}
                <div className="p-3 bg-gray-100 rounded-lg border">
                    <p className="font-medium mb-1">Donator Info</p>
                    <p><strong>Name:</strong> {user?.displayName}</p>
                    <p><strong>Email:</strong> {user?.email}</p>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700"
                >
                    {loading ? "Saving..." : "Add Food"}
                </button>
            </form>

            <ToastContainer />
        </div>
    );
};

export default AddFood;


