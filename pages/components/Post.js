import React from 'react';
import { usePosts } from '../contexts/postsContext';

const Post = ({ post, index }) => {
	const { upvotePost } = usePosts();

	return (
		<li>
			<span>
				{post.user} - {post.text}
			</span>
			<span>Upvotes: {post.upvotes}</span>
			<button onClick={() => upvotePost(index)}>Upvote</button>
		</li>
	);
};

export default Post;
