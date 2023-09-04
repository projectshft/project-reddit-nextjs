import React, { useState } from 'react';

const Post = ({ post, upVote }) => {
	const [isHidden, setIsHidden] = useState(false);

	const toggleShow = () => {
		setIsHidden(!isHidden);
	};

	return (
		<li>
			{isHidden ? null : (
				<span>
					{post.user} - {post.text}
				</span>
			)}
			<div className='pull-right'>
				<button
					className='btn btn-primary btn-sm'
					onClick={() => upVote(post)}
				>
					Upvote
				</button>
				{isHidden ? (
					<button
						onClick={toggleShow}
						className='btn btn-success btn-sm'
					>
						Show
					</button>
				) : (
					<button
						onClick={toggleShow}
						className='btn btn-danger btn-sm'
					>
						Hide
					</button>
				)}
			</div>
			<span>{post.votes}</span>
		</li>
	);
};

export default Post;
