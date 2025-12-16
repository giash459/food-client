import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedFoods from '../FeaturedFoods/FeaturedFoods';
import { OurMission } from '../OurMission/OurMission';
import HowItWorks from '../HowItWorks/HowItWorks';

const featuredFoodsPromise = fetch('http://localhost:5000/featured-foods').then(res => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedFoods featuredFoodsPromise={featuredFoodsPromise}></FeaturedFoods>
      <HowItWorks></HowItWorks>
      <OurMission></OurMission>
    </div>
  );
};

export default Home;