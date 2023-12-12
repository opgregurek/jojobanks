'use client'

import {Box, HStack, Image, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import CloudinaryImage from "@/components/CloudinaryImage";
import {Link} from "@chakra-ui/next-js";

export default function Contact() {
    return (
        <Box w="100%">
            <VStack alignItems="flex-start" gap={10}>
                <SimpleGrid columns={2}>
                    <Text
                        fontSize="80px"
                        fontWeight="700"
                        lineHeight="74px"
                        textAlign="center"
                    >
                        Get in touch
                    </Text>
                    <VStack alignItems="flex-start" gap={10}>
                        <Text fontSize="24px">
                            The best way to contact me is via homing pigeon. <br /><br />
                            In the event one cannot be sourced, please reach out on one of the following methods and I will respond within 24hrs.
                        </Text>
                        <VStack gap={1} alignItems="flex-start">
                            <Text href="mailto:josephinenguyendesigns@gmail.com?subject=Yo%20Jo%2C%20I%20am%20enquiring%20about%3A%20%3Cinsert-intention%3E" as={Link}>Email</Text>
                            <Text href="https://instagram.com/jojobanks.jpg" as={Link}>Instagram</Text>
                            <Text href="https://www.linkedin.com/in/josephinenguyen1/" as={Link}>LinkedIn</Text>
                        </VStack>
                    </VStack>
                </SimpleGrid>
                <VStack alignItems="flex-start" gap={10}>
                    <CloudinaryImage cloudinaryImageName="contact/spiral" alt="Spiral" width={67} height={67} />
                    <Text color="text.lightGrey" w="365px">
                        We have learned so much, there still remains much to learn. We are not going in circles, we are going upwards. The path is a spiral.<br /><br />
                        Herman Hesse
                    </Text>
                    <HStack gap={3}>
                        <a href="https://instagram.com/jojobanks.jpg">
                            <CloudinaryImage cloudinaryImageName="contact/instagram" alt="Instagram" width={37} height={37} />
                        </a>
                        <a href="https://www.linkedin.com/in/josephinenguyen1/">
                            <CloudinaryImage cloudinaryImageName="contact/linkedin" alt="LinkedIn" width={37} height={37} />
                        </a>
                        <a href="https://dribbble.com/jojobankss">
                            <CloudinaryImage cloudinaryImageName="contact/dribbble" alt="Dribbble" width={37} height={37} />
                        </a>
                        <a href="https://www.behance.net/josephinenguyen">
                            <CloudinaryImage cloudinaryImageName="contact/behance" alt="Behance" width={37} height={37} />
                        </a>
                    </HStack>
                </VStack>
            </VStack>
        </Box>
    )
}