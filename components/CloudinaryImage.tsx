'use client'

import {Box, Image, ImageProps} from "@chakra-ui/react";
import {useMemo} from "react";
import useImagePreloader from "@/hooks/useImagePreloader";
import cloudinaryImage from "@/utils/cloudinaryImage";
import fiveMinuteCacheImage from "@/utils/fiveMinuteCacheImage";

export interface CloudinaryImageProps extends ImageProps {
    cloudinaryImageName: string;
    alt: string;
    width: number;
    height: number;
}

const CloudinaryImage = (props: CloudinaryImageProps) => {
    const {
        cloudinaryImageName,
        alt,
        width,
        height,
    } = props;

    const imageString = useMemo(() => {
        return fiveMinuteCacheImage(cloudinaryImage(cloudinaryImageName, width));
    }, [cloudinaryImageName, width]);

    const { imagesPreloaded } = useImagePreloader([imageString]);

    if (!imagesPreloaded) {
        return (
            <Box w={`${width}px`} h={`${height}px`} bg="lightGrey" />
        );
    }

    return (
        <Box w={`${width}px`} h={`${height}px`}>
            <Image
                src={imageString}
                alt={alt}
                maxW="100%"
                maxH="100%"
            />
        </Box>
    )
}

export default CloudinaryImage;