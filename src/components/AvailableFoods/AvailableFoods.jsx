import React, { use } from 'react';
import FoodCard from '../FoodCard/FoodCard';

const foodsPromise = fetch('http://localhost:5000/foods').then(res => res.json());


const AvailableFoods = () => {
    const foods = use(foodsPromise);
    // console.log(foods);
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-5 lg:my-10'>All Foods Are here</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;