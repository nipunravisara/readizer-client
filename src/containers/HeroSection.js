import React from "react";

const HeroSection = () => {
  return (
    <div className="h-screen lg:h-auto lg:py-48 lg:py-72 flex flex-col justify-center items-center bg-hero-texture bg-no-repeat bg-cover ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="text-5xl lg:text-7xl font-primary text-left mb-4 font-bold text-gray-900 mt-12">
              Readizer is a<br/> collection of<br/> journies
            </div>
            <h1 className="text-md lg:text-lg font-primary text-left mb-4 text-gray-900">
              Discover and write your journy today.
            </h1>
          </div>
          <div className="bg-black">9</div>
        </div>
    </div>
  );
};

export default HeroSection;
