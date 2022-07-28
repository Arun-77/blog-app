import { extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';

const overrides = {
	...chakraTheme,
	styles: {
		global: {
			body: {
				fontSize: '18px',
				margin: '0',
				padding: '0',
				overflowX: 'hidden',
			},
		},
	},
	colors: {
		...chakraTheme.colors,
		DarkBlue: '#2d314d',
		LimeGreen: '#31d35c',
		BrightCyan: '#2bb7da',
		GrayishBlue: '#9698a6',
		LightGrayishBlue: '#f3f4f6',
		VeryLightGray: '#fafafa',
	},
	fonts: {
		body: `'Public Sans',sans-serif`,
		heading: `'Public Sans',sans-serif`,
	},

	fontWeights: {
		light: 300,
		medium: 400,
		bold: 700,
	},
};

const customTheme = extendTheme(overrides);

export default customTheme;
