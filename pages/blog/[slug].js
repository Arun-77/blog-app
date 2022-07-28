import { Box, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import Head from 'next/head';
import Navbar from '../../components/Navbar';

function Blog({ blog }) {
	const { data } = blog;

	return (
		<>
			<Head>
				<title>Easybank</title>
			</Head>
			<Navbar />
			<Box
				px={['5', '9', '10%', '14%', '16%']}
				py={['8', '7', '6%', '7.5%']}
				backgroundColor="DarkBlue"
			>
				<Text
					as="h3"
					color="LimeGreen"
					fontSize={['0.9rem', '0.99rem', '1.1rem', '1.2rem']}
				>
					CURRENCY EXCHANGE
				</Text>
				<Heading
					as="h1"
					color="white"
					my={['1', '2', '5']}
					fontWeight="medium"
					fontSize={['1.55rem', '1.8rem', '2.2rem', '2.7rem']}
				>
					{data.title}
				</Heading>
				<Text
					as="p"
					color="VeryLightGray"
					fontSize={['0.9rem', '1rem', '1.2rem', '1.3rem']}
				>
					{data.excerpt}
				</Text>
			</Box>
			<Box>
				<Text
					as="p"
					fontSize={['1rem', '1.15rem', '1.3rem', '1.8rem']}
					mx={['5', '9', '10%', '14%', '16%']}
					mt={['6', '13', '18', '22']}
					mb={['5', '12', '12%', '14%']}
				>
					{data.content}
				</Text>
			</Box>
		</>
	);
}

export default Blog;

export async function getStaticPaths() {
	const response = await axios.get(
		'https://tif-react-assignment-api.herokuapp.com/blog/get-all'
	);
	const data = await response.data;

	const paths = data.data.map(({ slug }) => ({
		params: { slug: `${slug}` },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps(context) {
	const { params } = context;

	const response = await axios.get(
		`https://tif-react-assignment-api.herokuapp.com/blog/get-single?slug=${params.slug}`
	);
	const data = await response.data;
	console.log(data);

	return {
		props: {
			blog: data,
		},
	};
}
