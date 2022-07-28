import React, { useState } from 'react';
import Image from 'next/image';
import { Flex, Button, Box, Text } from '@chakra-ui/react';

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false);
	return (
		<>
			<Flex
				width="100vw"
				alignItems="center"
				justifyContent="space-between"
				px={['10%', '10%', '6%', '11.5%']}
				py={['4', '4', '0']}
				zIndex="10"
				cursor="pointer"
				position={['relative', 'relative', 'static']}
				top={['0', '0', null]}
				bgColor="white"
			>
				<Image
					src={'/assets/logo.svg'}
					alt="Easybank"
					width="125"
					height="20"
				/>
				<Flex
					flexDirection={['column', 'column', 'row']}
					fontSize="0.9rem"
					color="gray"
				>
					<Box
						display={['block', 'block', 'none']}
						onClick={() => setNavOpen((prev) => !prev)}
					>
						{!navOpen && (
							<Image
								aria-label="toggle_icon"
								src={'/assets/icon-hamburger.svg'}
								alt="hamburger"
								width="24"
								height="18"
							/>
						)}
						{navOpen && (
							<Image
								aria-label="close_toggle_icon"
								src={'/assets/icon-close.svg'}
								alt="hamburger-close"
								width="18"
								height="18"
							/>
						)}
					</Box>
					<Flex
						borderRadius={['8px', '8px', '0']}
						py={['2', '2', '0']}
						opacity={[navOpen ? '1' : '0', navOpen ? '1' : '0', '1']}
						transform={[
							navOpen === true
								? ['translateX(0)', 'translateX(0)', null]
								: ['translateX(-50%)', 'translateX(-50%)', null],
							navOpen === true
								? ['translateX(0)', 'translateX(0)', null]
								: 'translateX(-50%)',
							'translateX(0)',
						]}
						transition={['all 0.25s ease-out', 'all 0.25s ease-out', null]}
						flexDirection={['column', 'column', 'row']}
						position={['absolute', 'absolute', 'static']}
						textAlign="center"
						zIndex="5"
						fontSize={['1.1rem', '1.1rem', '1rem', '1.1rem']}
						boxShadow={[
							navOpen
								? '0px 54px 97px 44px rgba(0,0,0,0.75)'
								: '0px 54px 97px 44px rgba(0,0,0,0.75)',
							navOpen
								? '0px 54px 97px 44px rgba(0,0,0,0.75)'
								: '0px 54px 97px 44px rgba(0,0,0,0.75)',
							'none',
						]}
						top={['80px', '80px', null]}
						left={['7%', '7%', null]}
						right={['7%', '7%', null]}
						bgColor="white"
					>
						<Text
							cursor="pointer"
							mx="1.5"
							borderBottom="3.6px solid white"
							py={['8px', '8px', '19px']}
							_hover={{
								color: '#333',
								borderBottomColor: ['white', 'white', 'LimeGreen'],
							}}
						>
							Home
						</Text>
						<Text
							mx="2"
							borderBottom="3.6px solid white"
							py={['8px', '8px', '19px']}
							_hover={{
								color: '#333',
								borderBottomColor: ['white', 'white', 'LimeGreen'],
							}}
						>
							About
						</Text>
						<Text
							mx="2"
							py={['8px', '8px', '19px']}
							borderBottom="3.6px solid white"
							_hover={{
								color: '#333',
								borderBottomColor: ['white', 'white', 'LimeGreen'],
							}}
						>
							Contact
						</Text>
						<Text
							mx="2"
							py={['8px', '8px', '19px']}
							borderBottom="3.6px solid white"
							_hover={{
								color: '#333',
								borderBottomColor: ['white', 'white', 'LimeGreen'],
							}}
						>
							Blog
						</Text>
						<Text
							mx="2"
							py={['8px', '8px', '19px']}
							borderBottom="3.6px solid white"
							_hover={{
								color: '#333',
								borderBottomColor: ['white', 'white', 'LimeGreen'],
							}}
						>
							Careers
						</Text>
					</Flex>
				</Flex>
				<Button
					fontWeight="bold"
					fontSize={['0.78rem', '0.8rem', '1rem']}
					px="5"
					display={['none', 'none', 'block']}
					variant="solid"
					color="white"
					bgGradient="linear(to-r,LimeGreen,BrightCyan)"
					borderRadius="100vw"
					_hover={{ filter: 'auto', opacity: '0.65' }}
				>
					Request Invite
				</Button>
			</Flex>
		</>
	);
};

export default Navbar;
