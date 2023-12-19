'use client'
import {SimpleGrid, SimpleGridProps} from "@chakra-ui/react";
import HomePageImage, {HomePageImageProps} from "@/components/homepage/HomePageImage";

export interface ImageGridProps extends SimpleGridProps {
    images: Array<HomePageImageProps>,
}

export default function ImageGrid(props: ImageGridProps) {
    const { images, ...rest } = props;

    return (
        <SimpleGrid {...rest}>
            {images.map((image, index) => {
                return (
                    <HomePageImage {...image} key={`${image.imageName}-${index}`} />
                );
            })}
        </SimpleGrid>
    );
}