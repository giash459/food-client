import React, { use } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import { Link } from 'react-router';

const FeaturedFoods = ({ featuredFoodsPromise }) => {
    const foods = use(featuredFoodsPromise);
    // console.log(foods);
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-5 lg:my-10'>Good Food, Anytime, Anywhere</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <div className="mt-8 text-center">
                <Link to="/availableFoods">
                <button className="mt-4 bg-blue-400 px-6 py-3 text-sm rounded-lg font-semibold text-white shadow hover:bg-blue-800">
                    Show All
                </button>
            </Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;