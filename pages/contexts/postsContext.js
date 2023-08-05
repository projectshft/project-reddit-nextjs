import { createContext, useContext, useState } from 'react';

const PostsContext = createContext();

export const usePosts = () => useContext(PostsContext);

export const PostsProvider = ({ children }) => {
	const [posts, setPosts] = useState([
		{
			user: 'Aaron',
			text: 'Hello',
			upvotes: 5,
		},
		{
			user: 'Bob',
			text: 'Hey',
			upvotes: 3,
		},
	]);

	const addPost = (post) => {
		setPosts([...posts, { ...post, upvotes: 0 }]);
	};

	const upvotePost = (index) => {
		const newPosts = [...posts];
		newPosts[index].upvotes++;
		setPosts(newPosts);
	};

	return (
		<PostsContext.Provider value={{ posts, addPost, upvotePost }}>
			{children}
		</PostsContext.Provider>
	);
};
