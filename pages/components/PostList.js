import React from 'react';
import Post from './Post';

const PostsList = ({ posts }) => {
	const postItems = posts.map((post, index) => (
		<Post key={index} post={post} />
	));

	return <ul className='col-md-4 list-group'>{postItems}</ul>;
};

export default PostsList;
