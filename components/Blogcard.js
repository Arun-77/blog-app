import React from 'react';
import Link from 'next/link';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

const Blogcard = ({ articles }) => {
	return articles.data.map((article) => (
		<Box
			key={article.id}
			width={['80%', '60%', '25%', '280px']}
			mr={[null, null, '8']}
			flexShrink="0"
			flexWrap="wrap"
			top="250px"
		>
			<Box
				borderTopLeftRadius="7px"
				borderTopRightRadius="7px"
				overflow="hidden"
			>
				<Image
					src={`${article.featured_image}`}
					alt={article.title}
					objectFit="cover"
					width="380px"
					height="195px"
				/>
			</Box>

			<Box px={['4', '3', '4']} pb={['6', '6']} pt="0">
				<Text as="p" fontSize={['0.8rem', '1rem']} color="#666" py="2.5">
					By {article.author}
				</Text>
				<Link
					href={{
						pathname: '/blog/[slug]',
						query: { slug: article.slug },
					}}
					passHref
				>
					<Text
						color="#777"
						paddingBottom="3"
						fontWeight="medium"
						cursor="pointer"
						as="p"
						_hover={{ color: 'LimeGreen' }}
						fontSize={['1.15rem', '1.18rem', '1.2rem', '1.39rem']}
					>
						{article.title}
					</Text>
				</Link>
				<Text
					as="p"
					fontSize={['1rem', '1rem', '1rem', '1.2rem']}
					noOfLines={4}
				>
					{article.excerpt}
				</Text>
			</Box>
		</Box>
	));
};

export default Blogcard;
