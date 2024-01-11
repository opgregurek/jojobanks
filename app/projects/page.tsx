'use client';
import { Box } from '@chakra-ui/react';
import ProjectsNavigation from '@/components/projects/ProjectsNavigation';

export default function Projects() {
	return (
		<Box w="100%" maxWidth="1440px" marginLeft="auto" marginRight="auto">
			<ProjectsNavigation />
		</Box>
	);
}
