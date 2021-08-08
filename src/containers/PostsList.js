import React from "react";
import { useSelector } from "react-redux";
import Title from "../components/Title";
import PostCard from "../components/PostCard";
import { Link } from 'react-router-dom';

const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  console.log(1111, posts);

  return (
    <div className="my-5">
      <Title title="Recent" type="title" />
      {posts.map((post) => (
        <Link to="/post" params={{ postId:post._id }} key={post._id}>
          <PostCard post={post}/>
        </Link>
      ))}
    </div>
  );
};



export default PostsList;
