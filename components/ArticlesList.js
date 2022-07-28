import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import BlogCard from './Blogcard';

const ArticlesList = ({ articles }) => {
	return (
		<Box paddingLeft={['0', '0', '6.5%', '11%']} mt="10" paddingBottom="5">
			<Heading
				as="h2"
				fontWeight="medium"
				fontSize={['1.9rem', '1.9rem', '2rem']}
				mb={['6', '6', '9']}
				textAlign={['center', 'center', 'left']}
			>
				Latest Articles
			</Heading>
			<Flex
				flexDirection={['column', 'column', 'row']}
				justifyContent={['space-around', 'center', 'flex-start']}
				alignItems={['center', 'center', null]}
				flexWrap="wrap"
				minHeight="500px"
				px={['0', '8', '0']}
			>
				<BlogCard articles={articles} />
			</Flex>
		</Box>
	);
};

export default ArticlesList;
