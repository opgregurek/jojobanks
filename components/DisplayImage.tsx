'use client'

import {Box, Image, ImageProps} from "@chakra-ui/react";
import {CLOUDINARY_URL} from "@/app/Constants";
import {Suspense, useState} from "react";
import {useImage} from "react-image";
import useImagePreloader from "@/hooks/useImagePreloader";

export interface HomePageImageProps extends ImageProps {
    imageName: string;
    alt: string;
    circleImage?: boolean;
}

const HomePageImage = (props: HomePageImageProps) => {
    const { imageName, alt, circleImage } = props;
    const [useHover, setUseHover] = useState(false);
    const { imagesPreloaded } = useImagePreloader([
        `${CLOUDINARY_URL}/homepage/${imageName}`,
        `${CLOUDINARY_URL}/homepage/${imageName}-hover`,
    ])

    if (!imagesPreloaded) {
        return (
            <Box w="187px" h="187px" bg="lightGrey" borderRadius={circleImage ? '100%' : ''} />
        );
    }

    return (
        <Image
            src={useHover ? `${CLOUDINARY_URL}/homepage/${imageName}-hover` : `${CLOUDINARY_URL}/homepage/${imageName}`}
            alt={alt}
            borderRadius={circleImage ? '100%' : ''}
            onMouseEnter={() => setUseHover(true)}
            onMouseLeave={() => setUseHover(false)}
        />
    )
}

// const HomePageImage = (props: HomePageImageProps) => {
//     return (
//         <Suspense
//             fallback={(<p>hello</p>)}
//         >
//             <BaseImage {...props} />
//         </Suspense>
//     )
// }

export default HomePageImage;