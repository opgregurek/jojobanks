'use client';
import { InView } from 'react-intersection-observer';
import FullScreenStack from '@/components/FullScreenStack';
import { Box, ScaleFade, Text, VStack } from '@chakra-ui/react';
import ProjectsNavigation from '@/components/projects/ProjectsNavigation';
import ViewAllProjectsButton from '@/components/projects/ViewAllProjectsButton';

export default function FeaturedProjectsScreen() {
	return (
		<InView rootMargin="-30%" triggerOnce>
			{({ inView, ref }) => (
				<Box
					ref={ref}
					borderTop="1px solid"
					borderBottom="1px solid"
					borderTopColor="background.dark"
					borderBottomColor="background.dark"
					width="100vw"
					paddingTop={16}
					paddingBottom={20}
				>
					<FullScreenStack
						minHeight="unset"
						width={['calc(100% - 48px)', 'calc(100% - 48px)', 'calc(100% - 48px)', 'calc(100% - 128px)']}
					>
						<ScaleFade in={inView} transition={{ enter: { duration: 0.5 } }}>
							<VStack alignItems="flex-start" gap={10}>
								<VStack alignItems="flex-start" gap={4}>
									<Text color="text.blue" fontSize="14px">
										FEATURED PROJECTS
									</Text>
									<ProjectsNavigation useFeatured excludeLabels templateColumns="auto" gap={2} />
								</VStack>
								<ViewAllProjectsButton />
							</VStack>
						</ScaleFade>
					</FullScreenStack>
				</Box>
			)}
		</InView>
	);
}
