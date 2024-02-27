'use client';
import { InView } from 'react-intersection-observer';
import FullScreenStack from '@/components/FullScreenStack';
import { Box, ScaleFade } from '@chakra-ui/react';
import CloudinaryImage from '@/components/CloudinaryImage';

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
							<video controls autoPlay muted loop playsInline preload="none">
								<source
									src="https://res.cloudinary.com/dwet4ad3d/video/upload/v1709051362/homepage/orange-strip.mov"
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
