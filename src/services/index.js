import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const fetchPost = (postId) => axios.get(`${url}/${postId}`);
export const createPost = (newPostData) => axios.post(url, newPostData);
