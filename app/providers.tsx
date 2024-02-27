'use client';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/source-serif-pro/400-italic.css'; // Specify weight and style
import '@fontsource/ibm-plex-mono/400.css';

const theme = extendTheme({
	colors: {
		text: {
			white: '#F0EEED',
			blue: '#072165',
			dark: '#262626',
			lightGrey: '#A5A5A5',
			forestGreen: '#0A4209',
			fireBrick: '#d3090d',
			dimGrey: '#6d6d6d',
		},
		background: {
			dark: '#262626',
			blue: '#072165',
			pink: '#FF54CF',
			lightGrey: '#A5A5A5',
		},
	},
	breakpoints: {
		base: '0em', // 0px
		sm: '20', // ~320px
		md: '48em', // ~768px
		lg: '62em', // ~992px
		xl: '80em', // ~1280px
		'2xl': '125em', // ~2000px
	},
	fonts: {
		heading: 'Inter, sans-serif',
		body: 'Inter, sans-serif',
		footer: 'IBM Plex Mono, sans-serif',
	},
	components: {
		Text: {
			baseStyle: () => ({
				color: 'text.dark',
			}),
		},
		Link: {
			baseStyle: () => ({
				color: 'text.dark',
			}),
		},
	},
});

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<CacheProvider>
			<ChakraProvider theme={theme}>{children}</ChakraProvider>
		</CacheProvider>
	);
}
