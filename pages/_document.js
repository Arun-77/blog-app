import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class MyDocument extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				<body>
					<ColorModeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
