import React from 'react';
import { useLocation } from 'react-router-dom';
import Editor from "rich-markdown-editor";
import PageLayout from "../layout/PageLayout";
import Header from "../layout/Header";
import { useParams } from "react-router";

const ViewPost = () => {
	const { postId } = useParams();
	console.log(postId);

	return (
		<>
			<Header/>
			<PageLayout>
				<div className="py-12 h-screen">
					<div className="py-8">
						<div className="p-4">
							<h1 className="text-5xl">qw</h1>
						</div>
						<div className="p-2">
							<h1 className="text-5xl">qwe</h1>
						</div>
						<div className="p-2">
							<Editor
								readOnly
								placeholder="Start typing here..."
								defaultValue="qwe"
							/>
						</div>
					</div>
					
				</div>
			</PageLayout>
		</>
	)
}

  

export default ViewPost;
