import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, type, link, onClick }) => {
  return link !== undefined ? (
    <Link to={link}>
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
    </Link>
  ) : (
    <div
      onClick={onClick}
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
  )
};

export default Button;
