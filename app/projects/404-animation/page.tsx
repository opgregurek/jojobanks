"use client"

import CloudinaryImage from "@/components/CloudinaryImage";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text, VStack, Link} from "@chakra-ui/react";

const notmalText = "The WorkingMouse website underwent an official rebrand in 2020. As most rebrands go, it invites the designer to play and explore the application. I had the pleasure of crafting the 404 page - intending for an otherwise negative experience to hopefully spark joy to those who come across it. You can check it out ";
const restOfText = ".";
const linkText = "Live";

export default function Animation(){
    return (
        <Box w="100%" marginBottom="10%">
            <VStack alignItems="flex-start">
                <Text fontSize="16px" fontWeight="400" color="text.lightGrey" marginBottom="3%">2021 -- Animation</Text>
                <Text fontSize="36px" fontWeight="300" color="text.lightGrey">404 animation</Text>
                <Text fontSize="80px" fontWeight="700" lineHeight="80px" marginRight="35%" marginBottom="12%">Getting lost on the web isn&apos;t always bad.</Text>
                <Text fontSize="24px" fontWeight="400" marginRight="40%" marginBottom="3%">
                    {notmalText}
                    <Link href="https://workingmouse.com.au/404" textDecoration="underline">{linkText}</Link>    
                    {restOfText}             
                </Text>
            </VStack>
            <Flex justifyContent="center">
                <CloudinaryImage
                    cloudinaryImageName="projectPages/404/404-header" 
                    alt="404/404-header" 
                        imageProps={{
                        width: '100%',
                    }}
                />
            </Flex>
            {/* //TODO: need to handle mp4 format??? */}
            {/* <Flex justifyContent="center" flexDirection="column" marginBottom="6%">
                <CloudinaryImage
                    cloudinaryImageName="projectPages/404/404-slide-1" 
                    alt="404/404-slide-1" 
                        imageProps={{
                        width: '100%',
                    }}
                />
            </Flex> */}
            
            <VStack alignItems="flex-start" marginBottom="3%">
                <Link href= "/projects/music-controller">
                    <ArrowForwardIcon
                        w="18px"
                        h="15px"
                        color="text.lightGrey"
                    />
                    <Text fontSize="24px" fontWeight="500">Next</Text>
                    <Text fontSize="80px" fontWeight="500">Music controller</Text>
                </Link>
            </VStack>

            <Link href="/projects">
                <Button
                    fontSize="16px"
                    fontWeight="400"
                    border="1px"
                    borderRadius="24px"
                    variant="outline"
                    textTransform="uppercase"
                >
                    View all work
                </Button>
            </Link>
        </Box>
    )
}

