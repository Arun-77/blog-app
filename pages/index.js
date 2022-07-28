import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ArticlesList from '../components/ArticlesList';
import axios from 'axios';

export default function Home({ articles }) {
	return (
		<>
			<Head>
				<title>EasyBank</title>
			</Head>
			<Navbar />
			<Hero />
			<ArticlesList articles={articles} />
		</>
	);
}

export async function getStaticProps() {
	const response = await axios.get(
		'https://tif-react-assignment-api.herokuapp.com/blog/get-all'
	);
	const data = await response.data;

	return {
		props: {
			articles: data,
		},
	};
}
