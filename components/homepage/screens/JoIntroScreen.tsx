'use client';
import { Box, ScaleFade, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import FullScreenStack from '@/components/FullScreenStack';
import { InView } from 'react-intersection-observer';
import fiveMinuteCache from '@/utils/fiveMinuteCache';
import cloudinaryVideo from '@/utils/cloudinaryVideo';

export default function JoIntroScreen() {
	return (
		<InView rootMargin="-30%" triggerOnce>
			{({ inView, ref }) => (
				<Box ref={ref} width="100vw">
					<FullScreenStack
						gap={[6, 6, 6, 10]}
						minHeight="unset"
						width={['calc(100% - 48px)', 'calc(100% - 48px)', 'calc(100% - 48px)', 'calc(100% - 128px)']}
					>
						<ScaleFade in={inView} transition={{ enter: { duration: 0.7 } }}>
							<VStack alignItems="flex-start" gap={0}>
								<Text fontWeight="bold" fontSize="24px">
									JOSEPHINE NGUYEN
								</Text>
								<Text fontStyle="italic" fontSize="20px">
									Freelance Product UX/UI Designer.
								</Text>
							</VStack>
						</ScaleFade>

						<ScaleFade in={inView} transition={{ enter: { duration: 0.7, delay: 0.5 } }}>
							<video autoPlay muted loop playsInline preload="none">
								<source src={fiveMinuteCache(cloudinaryVideo('homepage/heron'))} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</ScaleFade>

						<ScaleFade in={inView} transition={{ enter: { duration: 0.7, delay: 0.75 } }}>
							<VStack alignItems="flex-start" gap={[6, 6, 6, 10]}>
								<Text
									fontSize={['24px', '24px', '40px']}
									maxWidth={['100%', '100%', '100%', '50%']}
									marginRight="auto"
								>
									Observing the natural stimulus around her and using empathy, Josephine designs
									digital experiences that highlight the purpose or need.
								</Text>
								<SimpleGrid columns={[1, 1, 2]} alignItems="flex-start" gap={[10]}>
									<Text fontWeight={300} fontSize={['20px']}>
										This reminds us that there is always a reason or intention behind an action;
										such as unlocking your phone or opening a new browser window.
									</Text>
									<Text fontWeight={300} fontSize={['20px']}>
										Though time is relative, she has 7 years of experience advocating for a
										user-centric focus when crafting digital solutions. <br /> <br />
										She works with people to first unpack the root of problems where software can
										assist, and assists in the visual design second.
									</Text>
								</SimpleGrid>
							</VStack>
						</ScaleFade>
					</FullScreenStack>
				</Box>
			)}
		</InView>
	);
}
