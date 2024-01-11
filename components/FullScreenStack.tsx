'use client';
import { chakra, VStack } from '@chakra-ui/react';

const FullScreenStack = chakra(VStack, {
	baseStyle: {
		maxWidth: '1440px',
		width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		alignItems: 'flex-start',
		// 210px and 350px are the heights of the navbar in mobile and desktop
		minHeight: ['calc(100vh - 210px)', 'calc(100vh - 210px)', 'calc(100vh - 210px)', 'calc(100vh - 350px)'],
	},
});

export default FullScreenStack;
