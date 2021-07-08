import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/post";
import Title from "../components/Title";
import PostCard from "../components/PostCard";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <div className="my-10">
      <Title title="Recent" type="title" />
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};



export default PostsList;
