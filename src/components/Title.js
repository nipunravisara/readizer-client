import React from "react";

const Title = ({ title, type }) => {
  return (
    <div
      className={`font-${type} sm:text-4xl text-2xl mb-4 font-bold text-gray-900`}
    >
      {title}
    </div>
  );
};

export default Title;
