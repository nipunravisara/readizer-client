import React from "react";

const PostCard = ({ title, type }) => {
  return (
    <>
      <img
        className="w-max"
        alt="Qries"
        src="https://www.qries.com/images/banner_logo.png"
      />
      <h3 className="font-title text-2xl font-semibold py-2">
        Lorem ipsum dolor sit
      </h3>
      <span className="text-base text-gray-500">John Doe</span>
      <span className="text-base text-gray-500 mx-1">-</span>
      <span className="text-base text-gray-500">Sep 21, 2021</span>
      <p className="text-base text-justify py-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostruquis nostru quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
      </p>
    </>
  );
};

export default PostCard;
