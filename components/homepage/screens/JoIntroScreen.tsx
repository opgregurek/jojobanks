'use client';
import { Box, Flex, ScaleFade, Text } from '@chakra-ui/react';
import FullScreenStack from '@/components/FullScreenStack';
import CloudinaryImage from '@/components/CloudinaryImage';
import { InView } from 'react-intersection-observer';

export default function JoIntroScreen() {
	return (
		<InView rootMargin="-30%" triggerOnce>
			{({ inView, ref }) => (
				<FullScreenStack gap={[6, 6, 6, 10]} ref={ref}>
					<ScaleFade in={inView} transition={{ enter: { duration: 0.7 } }}>
						<Text fontSize={['40px', '40px', '40px', '48px']} maxW="820px">
							<Text fontWeight={600} as="span">
								— Josephine Nguyen
							</Text>{' '}
							is a Freelance Product UX/UI Designer based in
							<Text color="text.blue" as="span">
								{' '}
								Tokyo, Japan.
							</Text>
						</Text>
					</ScaleFade>

					<ScaleFade in={inView} transition={{ enter: { duration: 0.7, delay: 0.5 } }}>
						<Text
							fontSize={['24px', '24px', '24px', '32px']}
							fontWeight={300}
							color="text.lightGrey"
							maxW="820px"
						>
							Through empathy and observing the natural stimulus around her, she designs digital
							experiences for individuals that seek to serve a specific need.
						</Text>
					</ScaleFade>

					<ScaleFade in={inView} transition={{ enter: { duration: 0.7, delay: 0.75 } }}>
						<Flex flexDirection={['column', 'column', 'row', 'row']} gap={6} maxWidth="100%">
							<Box>
								<CloudinaryImage
									cloudinaryImageName="homepage/orange-rose"
									alt="Orange covered in rose petals"
									pixelWidth={432}
									imageProps={{ maxWidth: '100%' }}
								/>
							</Box>
							<Box>
								<CloudinaryImage
									cloudinaryImageName="homepage/silver-van"
									alt="Abandoned chrome van in the forest"
									pixelWidth={965}
									imageProps={{ maxWidth: '100%' }}
								/>
							</Box>
						</Flex>
					</ScaleFade>
				</FullScreenStack>
			)}
		</InView>
	);
}
