import React, {useState} from 'react';
import Editor from "rich-markdown-editor";
import PageLayout from "../layout/PageLayout";
import Button from '../components/Button';
import { useDispatch } from "react-redux";
import { actions } from "../store/actions";
import Header from "../layout/Header";

const CreatePost = () => {
	const [title, setTitle] = useState("");
	const [tags, setTags] = useState("");
	const [content, setContent] = useState("");
	
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			actions.createPost({
			title: title,
			content: content,
			author: "nipunravisara",
			tags: tags.split(","),
			images: "images",
		  })
		);
	  };

	return (
		<>
			<Header/>
			<PageLayout>
				<div className="py-12 h-screen flex flex-col justify-between">
					<div>
						<div className="p-2">
							<input  onChange={(e) => setTitle(e.target.value)} placeholder="Title"  type="text" className="relative outline-none rounded py-4 px-3 w-full bg-white text-4xl placeholder-gray-400 focus:outline-none focus:shadow-outline" />
						</div>
						<div className="p-2">
							<input onChange={(e) => setTags(e.target.value)} placeholder="Tags eg: #Tag1, #Tag2"  type="text" className="relative outline-none rounded py-4 px-3 w-full bg-white text-green-500 text-2xl placeholder-gray-400 focus:outline-none focus:shadow-outline" />
						</div>
						<div className="py-8">
							<Editor
								placeholder="Start typing here..."
								defaultValue={content}
								onChange={(value) => setContent(value)}
							/>
						</div>
					</div>
					<div className="flex flex-row justify-end w-full">
						<Button title="Publish" type="primary" onClick={(e) => handleSubmit(e)}/>
						&nbsp;
						<Button title="Cancel" link="/"/>
					</div>
				</div>
			</PageLayout>
		</>
	)
}

  

export default CreatePost;
