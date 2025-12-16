import React from "react";
import { Link } from "react-router";

const FoodCard = ({ food }) => {
    const { _id, foodName, foodImage, foodQuantity, pickupLocation, expireDate, additionalNotes } = food;

    return (
        <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition">
          
            <img
                src={foodImage}
                alt={foodName}
                className="w-full h-48 object-cover rounded-lg mb-3"
            />

   
            <h2 className="text-xl font-semibold mb-1">{foodName}</h2>

       
            <p className="text-gray-600">
                <strong>Pickup:</strong> {pickupLocation}
            </p>
            
            <p className="text-gray-600">
                <strong>FoodQuantity:</strong> {foodQuantity}
            </p>
            

        
            <p className="text-gray-600">
                <strong>Expires:</strong> {expireDate}
            </p>

            {additionalNotes && (
                <p className="text-gray-700 mt-2 text-sm">
                    <strong>Notes:</strong> {additionalNotes}
                </p>
            )}

            <Link to={`/foodDetails/${_id}`}>
                <button className="mt-4 w-full rounded-lg bg-blue-400 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-blue-800 ">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default FoodCard;
