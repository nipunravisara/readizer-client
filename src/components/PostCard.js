import React from "react";
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="border-b-2 border-gray-100 my-10 pb-12">
      <h3 className="text-3xl font-semibold py-2">{post.title}</h3>
      <span className="text-base text-gray-500">{post.author}</span>
      <span className="text-base text-gray-500 mx-1">-</span>
      <span className="text-base text-gray-500">Sep 21, 2021</span>
      <p className="text-base py-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostruquis nostru quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostruquis nostru quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
      <button className="text-lg font-bold">
        <Link to={{
          pathname: "/view-post",
          post: post,
        }} 
        >Read more</Link>
      </button>
    </div>
  );
};

export default PostCard;
