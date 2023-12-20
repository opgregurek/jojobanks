'use client'
import {Box, Image, ImageProps, keyframes} from "@chakra-ui/react";
import {useMemo, useState} from "react";
import useImagePreloader from "@/hooks/useImagePreloader";
import cloudinaryImage from "@/utils/cloudinaryImage";
import fiveMinuteCacheImage from "@/utils/fiveMinuteCacheImage";

export interface HomePageImageProps extends ImageProps {
    imageName: string;
    alt: string;
    circleImage?: boolean;
    useOverhang?: boolean;
    overhangImageSpeed?: number;
    overhangImageProps?: ImageProps;
}

const spin = keyframes`  
  from {transform: rotate(0deg);}   
  to {transform: rotate(360deg)} 
`;

const HomePageImage = (props: HomePageImageProps) => {
    const {
        imageName,
        alt,
        circleImage,
        useOverhang,
        overhangImageProps,
        overhangImageSpeed
    } = props;
    const [useHover, setUseHover] = useState(false);

    const baseImageString = useMemo(() => {
        return cloudinaryImage(`homepage/${imageName}`);
    }, [imageName]);
    const hoverImageString = useMemo(() => {
        return `${baseImageString}-hover`
    }, [baseImageString]);
    const overhangImageString = useMemo(() => {
        return `${hoverImageString}-overhang`
    }, [hoverImageString]);
    const src = useMemo(() => {
        return useHover ? hoverImageString : baseImageString;
    }, [useHover, baseImageString, hoverImageString]);

    const { imagesPreloaded } = useImagePreloader([
        fiveMinuteCacheImage(baseImageString),
        fiveMinuteCacheImage(hoverImageString),
        useOverhang ? fiveMinuteCacheImage(overhangImageString) : null,
    ]);

    if (!imagesPreloaded) {
        return (
            <Box maxW="187px" maxH="187px" bg="lightGrey" borderRadius={circleImage ? '100%' : ''}>
                <Box w="187px" h="187px" />
            </Box>
        );
    }

    return (
        <Box position="relative" maxW="187px" maxH="187px">
            <Image
                src={fiveMinuteCacheImage(src)}
                alt={alt}
                maxW="100%"
                maxH="100%"
                borderRadius={circleImage ? '100%' : undefined}
                onMouseEnter={() => setUseHover(true)}
                onMouseLeave={() => setUseHover(false)}
            />
            {useOverhang && useHover ? (
                <Image
                    src={fiveMinuteCacheImage(overhangImageString)}
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
    )
}

export default HomePageImage;