import Head from 'next/head';
import PostForm from './components/PostForm';
import PostsList from './components/PostList';
import { useState } from 'react';

export default function Home() {
	const [posts, setPosts] = useState([]);

	const addPost = (post) => {
		setPosts([...posts, { ...post, votes: 0 }]);
	};

	const upVote = (post) => {
		const updatedPosts = posts.map((p) => {
			if (p.text === post.text) {
				return { ...post, votes: post.votes + 1 };
			}
			return p;
		});
		setPosts(updatedPosts);
	};

	return (
		<>
			<main>
				<div className='row'>
					<div className='col-md-6 offset-md-3'>
						<div className='page-header'>
							<h1>Project Reddit</h1>
						</div>

						<div className='posts'>
							<PostsList upVote={upVote} posts={posts} />
						</div>
						<PostForm addPost={addPost} />
					</div>
				</div>
			</main>
		</>
	);
}
