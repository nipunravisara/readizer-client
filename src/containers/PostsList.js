import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/post";
import Title from "../components/Title";
import PostCard from "../components/PostCard";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // e.preventDefault();
    dispatch(
      createPost({
        title: "new",
        content: "text",
        author: "ravi",
        tags: ["a", "b"],
        images: "a",
      })
    );
  };

  const postss = [1, 2, 3, 4, 5];

  return (
    <div className="my-10">
      <section class="py-8 px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="md:w-1/2 p-8  rounded transition duration-500 hover:bg-backgroundHover">
            <PostCard post={1} />
          </div>
          <div class="md:w-1/2 p-8 rounded transition duration-500 hover:bg-backgroundHover">
            <PostCard post={1} />
          </div>
        </div>

        <div class="flex flex-wrap -mx-4">
          <div class="md:w-1/3 p-8 rounded transition duration-500 hover:bg-backgroundHover">
            <PostCard post={1} />
          </div>
          <div class="md:w-2/3 p-8 rounded transition duration-500 hover:bg-backgroundHover">
            <PostCard post={1} />
          </div>
        </div>

        <div class="flex flex-wrap -mx-4">
          <div class="md:w-2/3 p-8 rounded transition duration-500 hover:bg-backgroundHover">
            <PostCard post={1} />
          </div>
          <div class="md:w-1/3 p-8 rounded transition duration-500 hover:bg-backgroundHover">
            <PostCard post={1} />
          </div>
        </div>
      </section>
    </div>
    // <div className="my-10">
    //   <Title title="Recent" type="title" />
    //   {postss.map((post) => (
    //     <PostCard post={post} />
    //   ))}
    //   <button onClick={() => handleSubmit()}>press</button>
    // </div>
  );
};

export default PostsList;
