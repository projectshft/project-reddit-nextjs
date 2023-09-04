import React from 'react';
import Post from './Post';

const PostsList = ({ posts, upVote }) => {
	const postItems = posts.map((post, index) => (
		<Post upVote={upVote} key={index} post={post} />
	));

	return <ul className='col-md-4 list-group'>{postItems}</ul>;
};

export default PostsList;
