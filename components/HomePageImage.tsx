'use client'

import {Box, Image, ImageProps, keyframes} from "@chakra-ui/react";
import {useMemo, useState} from "react";
import useImagePreloader from "@/hooks/useImagePreloader";
import useCloudinaryImage from "@/utils/useCloudinaryImage";

export interface HomePageImageProps extends ImageProps {
    imageName: string;
    alt: string;
    circleImage?: boolean;
    useOverhang?: boolean;
    overhangImageProps?: ImageProps;
}

const spin = keyframes`  
  from {transform: rotate(0deg);}   
  to {transform: rotate(360deg)} 
`;

const HomePageImage = (props: HomePageImageProps) => {
    const { imageName, alt, circleImage, useOverhang, overhangImageProps } = props;
    const [useHover, setUseHover] = useState(false);

    const baseImageString = useMemo(() => {
        return useCloudinaryImage(`homepage/${imageName}`, 187);
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
        baseImageString,
        hoverImageString,
        useOverhang ? overhangImageString : null,
    ]);

    if (!imagesPreloaded) {
        return (
            <Box w="187px" h="187px" bg="lightGrey" borderRadius={circleImage ? '100%' : ''} />
        );
    }

    return (
        <Box position="relative">
            <Image
                src={src}
                alt={alt}
                borderRadius={circleImage ? '100%' : undefined}
                onMouseEnter={() => setUseHover(true)}
                onMouseLeave={() => setUseHover(false)}
            />
            {useOverhang && useHover ? (
                <Image
                    src={overhangImageString}
                    alt={alt + ' overhang'}
                    position="absolute"
                    bottom={0}
                    borderRadius={circleImage ? '100%' : undefined}
                    onMouseEnter={() => setUseHover(true)}
                    onMouseLeave={() => setUseHover(false)}
                    animation={`${spin} infinite 20s linear`}
                    {...overhangImageProps}
                />
            ) : null}
        </Box>
    )
}

export default HomePageImage;