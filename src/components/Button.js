import React from "react";

const Button = ({ title, type }) => {
  return (
    <div
      className={`mx-2 px-4 py-2 rounded-md transition-colors duration-300 ${
        type === "primary" ? "hover:bg-green-200" : "hover:bg-gray-200"
      }`}
    >
      <span
        className={`flex flex-row justify-between items-center font-bold ${
          type === "primary" ? "text-green-500" : "text-black"
        }`}
      >
        {title}
      </span>
    </div>
  );
};

export default Button;
