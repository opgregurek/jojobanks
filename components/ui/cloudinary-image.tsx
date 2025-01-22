"use client";
import useImagePreloader from "@/hooks/use-image-preloader";
import cloudinaryImage from "@/utils/cloudinary-image";
import fiveMinuteCache from "@/utils/five-minute-cache";
import { Box, BoxProps, Image, ImageProps } from "@chakra-ui/react";
import { useMemo } from "react";

export interface CloudinaryImageProps {
  cloudinaryImageName: string;
  alt: string;
  // both pixelWidth and pixelHeight need to be specified for them to apply
  pixelWidth?: number;
  pixelHeight?: number;
  imageProps?: ImageProps;
  ignoreCloudinaryParams?: boolean;
  ignoreImagePreloading?: boolean;
  boxProps?: BoxProps;
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
    boxProps,
  } = props;

  const width = pixelWidth ? `${pixelWidth}px` : undefined;
  const height = pixelHeight ? `${pixelHeight}px` : undefined;

  const imageString = useMemo(() => {
    return fiveMinuteCache(
      cloudinaryImage(
        cloudinaryImageName,
        pixelWidth,
        undefined,
        ignoreCloudinaryParams,
      ),
    );
  }, [cloudinaryImageName, pixelWidth, ignoreCloudinaryParams]);

  const { imagesPreloaded } = useImagePreloader([imageString]);

  if (!imagesPreloaded && !ignoreImagePreloading) {
    return (
      <Box width={width} height={height} background="lightGrey" {...boxProps} />
    );
  }

  if (width === undefined || height === undefined) {
    return <Image src={imageString} alt={alt} {...imageProps} />;
  }

  return (
    <Box width={width} height={height} {...boxProps}>
      <Image
        src={imageString}
        alt={alt}
        width="100%"
        height="100%"
        maxWidth="100%"
        maxHeight="100%"
        {...imageProps}
      />
    </Box>
  );
};

export default CloudinaryImage;
