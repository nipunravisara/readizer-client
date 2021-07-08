import React from 'react';
import { useLocation } from 'react-router-dom';
import Editor from "rich-markdown-editor";
import PageLayout from "../layout/PageLayout";
import Header from "../layout/Header";

const ViewPost = () => {
	const location = useLocation();
	const post = location.post
	console.log(11, post);
	return (
		<>
			<Header/>
			<PageLayout>
				<div className="py-12 h-screen">
					<div className="py-8">
						<div className="p-2">
							<h1 className="text-5xl">{post.title}</h1>
						</div>
						<div className="p-2">
							<Editor
								readOnly
								placeholder="Start typing here..."
								defaultValue={post.content}
							/>
						</div>
					</div>
					
				</div>
			</PageLayout>
		</>
	)
}

  

export default ViewPost;
