'use client';
import { Box, Image, ImageProps } from '@chakra-ui/react';
import { useMemo } from 'react';
import useImagePreloader from '@/hooks/useImagePreloader';
import cloudinaryImage from '@/utils/cloudinaryImage';
import fiveMinuteCacheImage from '@/utils/fiveMinuteCacheImage';

export interface CloudinaryImageProps {
	cloudinaryImageName: string;
	alt: string;
	// both pixelWidth and pixelHeight need to be specified for them to apply
	pixelWidth?: number;
	pixelHeight?: number;
	imageProps?: ImageProps;
	ignoreCloudinaryParams?: boolean;
	ignoreImagePreloading?: boolean;
}

const CloudinaryImage = (props: CloudinaryImageProps) => {
	const {
		cloudinaryImageName,
		alt,
		pixelWidth,
		pixelHeight,
		imageProps,
		ignoreCloudinaryParams,
		ignoreImagePreloading,
	} = props;

	const width = pixelWidth ? `${pixelWidth}px` : undefined;
	const height = pixelHeight ? `${pixelHeight}px` : undefined;

	const imageString = useMemo(() => {
		return fiveMinuteCacheImage(
			cloudinaryImage(cloudinaryImageName, pixelWidth, undefined, ignoreCloudinaryParams),
		);
	}, [cloudinaryImageName, pixelWidth, ignoreCloudinaryParams]);

	const { imagesPreloaded } = useImagePreloader([imageString]);

	if (!imagesPreloaded && !ignoreImagePreloading) {
		return <Box w={width} h={height} bg="lightGrey" />;
	}

	if (width === undefined || height === undefined) {
		return <Image src={imageString} alt={alt} {...imageProps} />;
	}

	return (
		<Box w={width} h={height}>
			<Image src={imageString} alt={alt} w="100%" h="100%" maxW="100%" maxH="100%" {...imageProps} />
		</Box>
	);
};

export default CloudinaryImage;
