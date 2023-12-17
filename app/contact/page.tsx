'use client'

import {Box, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <Box w="100%">
            <VStack alignItems="flex-start" gap={10}>
                <SimpleGrid columns={2}>
                    <Text fontSize="80px" fontWeight="700" lineHeight="74px" textAlign="center">Get in touch</Text>
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
                <Footer />
            </VStack>
        </Box>
    )
}