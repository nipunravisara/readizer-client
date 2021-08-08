import React from "react";
import moment from "moment";


const PostCard = ({ post }) => {
  return (
      <div className="hover:bg-gray-50 rounded-lg my-10 py-4 px-7">
        <h3 className="text-3xl font-semibold py-2">{post.title}</h3>
        <span className="text-base text-gray-500">{post.author}</span>
        <span className="text-base text-gray-500 mx-1">-</span>
        <span className="text-base text-gray-500">{moment(post.createdAt).format('LL')}</span>
        <p className="text-base py-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostruquis nostru quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostruquis nostru quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
  );
};

export default PostCard;
