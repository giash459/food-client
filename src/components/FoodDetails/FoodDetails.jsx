import React, { use, useRef } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const FoodDetails = () => {
    const food = useLoaderData();
    const { user } = use(AuthContext);
    const foodModalRef = useRef(null);
    console.log(food);

    const handleFoodModalOpen = () => {
        foodModalRef.current.showModal();
    }

    const handleFoodSubmit = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email);

    }

    return (
        <div className='w-[380px] md:w-[600px] lg:w-[800px] mx-auto'>
            <div className="card bg-base-100  shadow-sm p-5">
                <figure>
                    <img
                        className='rounded-lg'
                        src="https://i.ibb.co/7txX2cd4/bike7.jpg"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="text-3xl font-bold mt-4">{food.foodName}</h2>
                    <p className="text-gray-700 py-2">
                        <strong>Description:</strong> {food.description}
                    </p>
                    <p className="text-gray-700 py-1">
                        <strong>Quantity:</strong> {food.foodQuantity}
                    </p>

                    <p className="text-gray-700 py-1">
                        <strong>Pickup Location:</strong> {food.pickupLocation}
                    </p>

                    <p className="text-gray-700 py-1">
                        <strong>Expire Date:</strong> {food.expireDate}
                    </p>

                    <p className="text-gray-700 py-1">
                        <strong>Additional Notes:</strong> {food.additionalNotes}
                    </p>

                    <hr className="my-4" />

                    <h2 className="text-xl font-semibold mb-2">Donator Info</h2>

                    <p className="text-gray-700">
                        <strong>Name:</strong> {food.donatorName}
                    </p>
                    <p className="text-gray-700">
                        <strong>Email:</strong> {food.donatorEmail}
                    </p>

                    <div className="card-actions">
                        <button
                            onClick={handleFoodModalOpen}
                            className="mt-4 bg-blue-400 px-6 py-3 text-sm rounded-lg font-semibold text-white shadow hover:bg-blue-800"
                        >
                            Request Food
                        </button>
                    </div>

                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                    <dialog ref={foodModalRef} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <form onSubmit={handleFoodSubmit}>
                                <fieldset className="fieldset">
                                    {/* name */}
                                    <label className="label">Name</label>
                                    <input type="text" readOnly defaultValue={user?.displayName} className="input" name="name" />
                                    {/* email */}
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" readOnly defaultValue={user?.email} />

                                    <button className="mt-4 bg-blue-400 px-6 py-3 text-sm rounded-lg font-semibold text-white shadow hover:bg-blue-800">Chose your food</button>

                                </fieldset>
                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="mt-4 bg-blue-400 px-6 py-3 text-sm rounded-lg font-semibold text-white shadow hover:bg-blue-800">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;