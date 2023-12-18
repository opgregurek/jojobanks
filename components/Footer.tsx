'use client'

import { HStack, VStack, Text } from "@chakra-ui/react";
import CloudinaryImage from "./CloudinaryImage";

export default function Footer() {
    return (
        <VStack alignItems="flex-start" gap={10} marginTop="123px">
            <CloudinaryImage cloudinaryImageName="contact/spiral" alt="Spiral" pixelWidth={67} pixelHeight={63} />
            <Text color="text.lightGrey" w="365px" fontFamily="footer">
                We have learned so much, there still remains much to learn. We are not going in circles, we are going upwards. The path is a spiral.<br /><br />
                Herman Hesse
            </Text>
            <HStack gap={3}>
                <a href="https://instagram.com/jojobanks.jpg">
                    <CloudinaryImage
                        cloudinaryImageName="contact/instagram"
                        alt="Instagram"
                        imageProps={{
                            width: '37px',
                        }}
                    />
                </a>
                <a href="https://www.linkedin.com/in/josephinenguyen1/">
                    <CloudinaryImage
                        cloudinaryImageName="contact/linkedin"
                        alt="LinkedIn"
                        imageProps={{
                            width: '37px',
                        }}
                    />
                </a>
                <a href="https://dribbble.com/jojobankss">
                    <CloudinaryImage
                        cloudinaryImageName="contact/dribbble"
                        alt="Dribbble"
                        imageProps={{
                            width: '37px',
                        }}
                    />
                </a>
                <a href="https://www.behance.net/josephinenguyen">
                    <CloudinaryImage
                        cloudinaryImageName="contact/behance"
                        alt="Behance"
                        imageProps={{
                            width: '37px',
                        }}
                    />
                </a>
            </HStack>
        </VStack>
    )
}