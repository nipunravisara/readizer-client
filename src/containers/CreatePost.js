import React, {useState} from 'react';
import {Editor, EditorState} from 'draft-js'

const CreatePost = () => {

	function myBlockStyleFn(contentBlock) {
		const type = contentBlock.getType();
		if (type === 'blockquote') {
		  return 'superFancyBlockquote';
		}
	  }

	const [editorState, setEditorState] = useState(()=> EditorState.createEmpty())
	return (
	  <div>
		<Editor editorState={editorState} onChange={setEditorState}  blockStyleFn={myBlockStyleFn}/>
	  </div>
	)
}

  

export default CreatePost;
