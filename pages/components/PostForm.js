import React, { useState } from 'react';
import { usePosts } from '../contexts/postsContext';
function PostForm() {
	const { addPost } = usePosts();
	const [user, setUser] = useState('');
	const [text, setText] = useState('');

	const handleClick = () => {
		const post = { user, text };
		addPost(post);
		setUser('');
		setText('');
	};

	return (
		<form className='post-form'>
			<h3>Add a New Post</h3>

			<div className='form-group'>
				<input
					type='text'
					className='form-control'
					placeholder='Post Text'
					value={text}
					onChange={(event) => setText(event.target.value)}
				/>

				<br />

				<input
					type='text'
					className='form-control'
					placeholder='Your Name'
					value={user}
					onChange={(event) => setUser(event.target.value)}
				/>
			</div>

			<button
				onClick={handleClick}
				type='button'
				className='btn btn-primary add-post'
			>
				Post
			</button>
		</form>
	);
}

export default PostForm;
