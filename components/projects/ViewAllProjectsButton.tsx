'use client';
import { Link, LinkProps } from '@chakra-ui/next-js';

export interface ViewAllProjectsButtonProps extends Omit<LinkProps, 'href'> {}

export default function ViewAllProjectsButton(props: ViewAllProjectsButtonProps) {
	return (
		<Link
			href="/projects"
			fontSize={['14px', '14px', '14px', '16px']}
			fontWeight="400"
			border="1px"
			borderRadius="24px"
			variant="outline"
			textTransform="uppercase"
			px={4}
			py={2}
			_hover={{
				bg: 'gray.100',
			}}
			marginTop={[4, 4, 8, 16]}
			color="text.dark"
			borderColor="background.dark"
			{...props}
		>
			View all projects
		</Link>
	);
}
