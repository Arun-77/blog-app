import React from 'react';
import Image from 'next/image';
import { Flex, Box, Text, Heading, Button } from '@chakra-ui/react';

const Hero = () => {
	return (
		<Flex
			flexDirection={['column-reverse', 'column-reverse', 'row']}
			justify={[null, null, 'space-between']}
			paddingleft={[null, null, '6%', '11.5%']}
			height={['600px', '620px', '550px', '640px']}
		>
			<Flex
				flexDirection="column"
				justify="center"
				textAlign={['center', 'center', 'left']}
				p={['4', '5', null]}
				paddingLeft={[null, null, '6%', '11.5%']}
				width={[null, null, '60%']}
				alignItems={['center', 'center', 'flex-start']}
			>
				<Heading
					as="h1"
					marginTop="2"
					fontWeight="medium"
					fontSize={['2.25rem', '2.35rem', '2.7rem', '3rem', '4.3rem']}
				>
					Next generation digital banking
				</Heading>
				<Text
					as="p"
					color="#a6a9b1"
					my={['3', '3', '3.5']}
					fontWeight="medium"
					fontSize={['0.999rem', '1.05rem', '1.1rem', '1.5rem']}
				>
					Take your financial life online.Your Easybank account will be a
					one-stop-shop for spending, saving, budgeting, investing and much
					more.
				</Text>
				<Button
					px="6"
					py="5"
					my={['2.5', '2.5', '3']}
					fontWeight="bold"
					fontSize={['0.78rem', '0.8rem', '1rem']}
					variant="solid"
					color="white"
					bgGradient="linear(to-r,LimeGreen,BrightCyan)"
					borderRadius="100vw"
					_hover={{ filter: 'auto', opacity: '0.65' }}
				>
					Request Invite
				</Button>
			</Flex>
			<Box position="relative" overflow="hidden">
				<Box
					display={['block', 'block', 'none']}
					position="relative"
					width="400"
					height="400"
				>
					<Image
						src="/assets/bg-intro-mobile.svg"
						alt="mobileBg"
						layout="fill"
						position="absolute"
						bottom="0"
						priority
					/>
				</Box>
				<Box
					display={['none', 'none', 'block']}
					position="relative"
					width="850"
					height="920"
					transform={'translate(50px,-215px)'}
				>
					<Image
						src="/assets/bg-intro-desktop.svg"
						alt="desktopBg"
						layout="fill"
						position="absolute"
						bottom="0"
						priority
					/>
				</Box>

				<Box
					transform={[
						'translateY(-535px)',
						'translateY(-420px)',
						'translate(110px,-950px)',
						'translate(110px,-1010px)',
					]}
					overflowX="hidden"
				>
					<Image
						position="absolute"
						src="/assets/image-mockups.png"
						alt="mobileImage"
						width="900"
						height="1100"
						zindex="2"
					/>
				</Box>
			</Box>
		</Flex>
	);
};

export default Hero;
