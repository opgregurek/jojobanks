'use client';
import { Box, Image, ImageProps, keyframes } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import useImagePreloader from '@/hooks/useImagePreloader';
import cloudinaryImage from '@/utils/cloudinaryImage';
import fiveMinuteCache from '@/utils/fiveMinuteCache';

export interface HomePageImageProps extends ImageProps {
	imageName: string;
	alt: string;
	circleImage?: boolean;
	useOverhang?: boolean;
	overhangImageSpeed?: number;
	overhangImageProps?: ImageProps;
}

// spin animation
const spin = keyframes`  
  from {transform: rotate(0deg);}   
  to {transform: rotate(360deg)} 
`;

const HomePageImage = (props: HomePageImageProps) => {
	const { imageName, alt, circleImage, useOverhang, overhangImageProps, overhangImageSpeed } = props;
	// are we showing the hover state
	const [useHover, setUseHover] = useState(false);

	// image strings
	const baseImageString = useMemo(() => {
		return cloudinaryImage(`homepage/${imageName}`);
	}, [imageName]);
	const hoverImageString = useMemo(() => {
		return `${baseImageString}-hover`;
	}, [baseImageString]);
	const overhangImageString = useMemo(() => {
		return `${hoverImageString}-overhang`;
	}, [hoverImageString]);

	// image string we are using, the base string or the hover string
	const src = useMemo(() => {
		return useHover ? hoverImageString : baseImageString;
	}, [useHover, baseImageString, hoverImageString]);

	// has the image preloaded
	const { imagesPreloaded } = useImagePreloader([
		fiveMinuteCache(baseImageString),
		fiveMinuteCache(hoverImageString),
		useOverhang ? fiveMinuteCache(overhangImageString) : null,
	]);

	// if the images aren't loaded we use a gray box
	if (!imagesPreloaded) {
		return (
			<Box
				width="187px"
				height="0"
				maxW="100%"
				paddingBottom="100%"
				borderRadius={circleImage ? '100%' : ''}
				bg="lightGrey"
			/>
		);
	}

	return (
		<Box position="relative" maxW="187px">
			<Image
				src={fiveMinuteCache(src)}
				alt={alt}
				maxW="100%"
				borderRadius={circleImage ? '100%' : undefined}
				onMouseEnter={() => setUseHover(true)}
				onMouseLeave={() => setUseHover(false)}
			/>
			{/* if there is an overhang image display it */}
			{useOverhang && useHover ? (
				<Image
					src={fiveMinuteCache(overhangImageString)}
					alt={alt + ' overhang'}
					position="absolute"
					maxW="100%"
					maxH="100%"
					bottom={0}
					borderRadius={circleImage ? '100%' : undefined}
					onMouseEnter={() => setUseHover(true)}
					onMouseLeave={() => setUseHover(false)}
					animation={`${spin} infinite ${overhangImageSpeed || 24}s linear`}
					{...overhangImageProps}
				/>
			) : null}
		</Box>
	);
};

export default HomePageImage;
