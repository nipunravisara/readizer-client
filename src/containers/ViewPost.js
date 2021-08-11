import React, {useEffect, useState} from 'react';
import PageLayout from "../layout/PageLayout";
import Header from "../layout/Header";
import { useParams } from "react-router";
import { fetchPost } from '../services';
import MDEditor from '@uiw/react-md-editor';

const ViewPost = () => {
	const [post, setPost] = useState();
	const { postId } = useParams();

	useEffect(() => {
		fetchPost(postId).then((response) => setPost(response.data));
	  }, [postId]);

	return (
		<>
			<Header/>
			<PageLayout>
				<div className="py-12 h-screen">
					<div className="py-8">
						<div className="p-2">
							<h1 className="text-5xl font-primary">{post?.title}</h1>
						</div>
						<div className="p-2">
							<h1 className="text-lg text-green-400 font-semibold font-primary">{post?.tags.join(", ")}</h1>
						</div>
						<div className="p-2">
							<MDEditor.Markdown source={post?.body} />
						</div>
					</div>
					
				</div>
			</PageLayout>
		</>
	)
}

export default ViewPost;
