'use client';
import { Box, HStack, ScaleFade, Text, VStack } from '@chakra-ui/react';
import FullScreenStack from '@/components/FullScreenStack';
import CloudinaryImage from '@/components/CloudinaryImage';
import { InView } from 'react-intersection-observer';
import { Link } from '@chakra-ui/next-js';

export default function JoProcessesScreen() {
	return (
		<InView rootMargin="-40%" triggerOnce>
			{({ inView, ref }) => (
				<Box ref={ref} borderTop="1px solid" borderTopColor="background.dark" width="100vw" paddingTop={16}>
					<FullScreenStack
						minHeight="unset"
						width={['calc(100% - 48px)', 'calc(100% - 48px)', 'calc(100% - 48px)', 'calc(100% - 128px)']}
						gap={[6, 6, 6, 10]}
					>
						<ScaleFade in={inView} transition={{ enter: { duration: 0.7 } }}>
							<VStack gap={[20]} alignItems="flex-start">
								<VStack gap={2} alignItems="flex-start">
									<Text fontStyle="italic" color="text.lightGrey">
										PROCESSES —
									</Text>
									<HStack gap={2}>
										<Box display={['none', 'none', 'unset']}>
											<CloudinaryImage
												cloudinaryImageName="homepage/workshops"
												alt="Workshops"
												pixelWidth={96}
												pixelHeight={61}
											/>
										</Box>
										<Text fontSize={['32px', '32px', '32px', '40px', '56px']}>
											FACILITATING WORKSHOPS
										</Text>
										<Text
											display={['none', 'none', 'unset']}
											fontStyle="italic"
											fontFamily="Source Serif Pro"
											fontSize={['32px', '32px', '32px', '40px', '56px']}
										>
											,
										</Text>
									</HStack>
									<HStack gap={2}>
										<Text
											fontStyle="italic"
											fontFamily="Source Serif Pro"
											fontSize={['40px', '40px', '40px', '48px', '68px']}
										>
											Applying design thinking
										</Text>
										<Box display={['none', 'none', 'unset']}>
											<CloudinaryImage
												cloudinaryImageName="homepage/thinking"
												alt="Thinking"
												pixelWidth={89}
												pixelHeight={61}
											/>
										</Box>
										<Text
											display={['none', 'none', 'unset']}
											fontStyle="italic"
											fontFamily="Source Serif Pro"
											fontSize={['32px', '32px', '32px', '40px', '56px']}
										>
											,
										</Text>
									</HStack>
									<HStack gap={2}>
										<Box display={['none', 'none', 'unset']}>
											<CloudinaryImage
												cloudinaryImageName="homepage/conceptualising"
												alt="Conceptualising"
												pixelWidth={150}
												pixelHeight={65}
											/>
										</Box>
										<Text fontSize={['32px', '32px', '32px', '40px', '56px']}>
											CONCEPTUALISING SOLUTIONS
										</Text>
										<Text
											display={['none', 'none', 'unset']}
											fontStyle="italic"
											fontFamily="Source Serif Pro"
											fontSize={['32px', '32px', '32px', '40px', '56px']}
										>
											,
										</Text>
									</HStack>
									<HStack gap={2}>
										<Box display={['none', 'none', 'unset']}>
											<CloudinaryImage
												cloudinaryImageName="homepage/scoping"
												alt="Scoping"
												pixelWidth={96}
												pixelHeight={61}
											/>
										</Box>
										<Text
											fontStyle="italic"
											fontFamily="Source Serif Pro"
											fontSize={['40px', '40px', '40px', '48px', '68px']}
										>
											Scoping Requirements
										</Text>
										<Box display={['none', 'none', 'unset']}>
											<CloudinaryImage
												cloudinaryImageName="homepage/scoping-2"
												alt="Scoping 2"
												pixelWidth={89}
												pixelHeight={61}
											/>
										</Box>
										<Text
											display={['none', 'none', 'unset']}
											fontStyle="italic"
											fontFamily="Source Serif Pro"
											fontSize={['32px', '32px', '32px', '40px', '56px']}
										>
											&
										</Text>
									</HStack>
									<HStack gap={2}>
										<Text fontSize={['32px', '32px', '32px', '40px', '56px']}>
											BUILDING ROADMAPS
										</Text>
										<Box display={['none', 'none', 'unset']}>
											<CloudinaryImage
												cloudinaryImageName="homepage/roadmaps"
												alt="Scoping"
												pixelWidth={96}
												pixelHeight={61}
											/>
										</Box>
									</HStack>
								</VStack>
								<Link
									href="/tool-kit"
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
								>
									View tool-kit
								</Link>
							</VStack>
						</ScaleFade>
					</FullScreenStack>
				</Box>
			)}
		</InView>
	);
}
