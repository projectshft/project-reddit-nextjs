'use client';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PostsProvider } from './contexts/postsContext';

export default function App({ Component, pageProps }) {
	return (
		<PostsProvider>
			<Component {...pageProps} />
		</PostsProvider>
	);
}
