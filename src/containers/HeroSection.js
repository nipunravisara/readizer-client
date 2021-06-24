import React from "react";
import HeroIcon from "../assets/svgs/HeroIocn.jsx";
import Button from '../components/Button';

const HeroSection = () => {
  return (
    <div className="h-screen lg:h-auto lg:py-48 lg:py-72 flex flex-col justify-center items-center bg-hero-texture bg-no-repeat bg-cover ">
      <HeroIcon />

      <div className="text-lg lg:text-2xl font-body text-center mb-4 font-bold text-gray-900 mt-12">
        Start Blogging with Readizer
      </div>
      <h1 className="text-5xl lg:text-7xl font-title text-center mb-4 font-extrabold text-gray-900">
        Read. Write. Share.
      </h1>
      <Button title="Create Post" type="primary" />
    </div>
  );
};

export default HeroSection;
