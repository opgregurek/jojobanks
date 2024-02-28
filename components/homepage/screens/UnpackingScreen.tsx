'use client';
import { InView } from 'react-intersection-observer';
import FullScreenStack from '@/components/FullScreenStack';
import { Box, ScaleFade } from '@chakra-ui/react';
import CloudinaryImage from '@/components/CloudinaryImage';
import fiveMinuteCache from '@/utils/fiveMinuteCache';
import cloudinaryVideo from '@/utils/cloudinaryVideo';

export default function UnpackingScreen() {
	return (
		<InView rootMargin="-40%" triggerOnce>
			{({ inView, ref }) => (
				<Box ref={ref} borderTop="1px solid" borderTopColor="background.dark" width="100vw" paddingTop={16}>
					<FullScreenStack
						minHeight="unset"
						width={['calc(100% - 48px)', 'calc(100% - 48px)', 'calc(100% - 48px)', 'calc(100% - 128px)']}
					>
						<ScaleFade in={inView} transition={{ enter: { duration: 0.7 } }}>
							<CloudinaryImage
								cloudinaryImageName="homepage/unpacking-browser"
								alt="Unpacking Browswer"
								pixelWidth={1200}
								imageProps={{
									width: '100%',
								}}
							/>
							<video autoPlay muted loop playsInline preload="none">
								<source
									src={fiveMinuteCache(cloudinaryVideo('homepage/orange-strip'))}
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
						</ScaleFade>
					</FullScreenStack>
				</Box>
			)}
		</InView>
	);
}
