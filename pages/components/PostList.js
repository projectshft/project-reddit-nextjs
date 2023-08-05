'use client';
import { usePosts } from '../contexts/postsContext';
import Post from './Post';

const PostsList = () => {
	const { posts = [] } = usePosts();

	return (
		<ul className='col-md-4 list-group'>
			{posts.map((post, index) => (
				<Post key={index} post={post} index={index} />
			))}
		</ul>
	);
};

export default PostsList;
