"use client";

import CloudinaryImage from "@/components/CloudinaryImage";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";

const normal =
  "The WorkingMouse website underwent an official rebrand in 2020. As most rebrands go, it invites the designer to play and explore the application. I had the pleasure of crafting the 404 page - intending for an otherwise negative experience to hopefully spark joy to those who come across it. You can check it out ";
const restOfText = ".";
const linkText = "Live";

const FullPageComponent = chakra(VStack, {
  baseStyle: {
    maxWidth: '1440px',
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: [
      "calc(100vh - 130px)",
      "calc(100vh - 130px)",
      "calc(100vh - 130px)",
      "calc(100vh - 230px)",
    ],
    alignItems: "flex-start",
  },
});

export default function Animation() {
  return (
    <Box w="100%" marginBottom="10%">
      <FullPageComponent>
        <VStack alignItems="flex-start">
          <Text
            fontSize="16px"
            fontWeight="400"
            color="text.lightGrey"
            marginBottom="3%"
          >
            2021 — Animation
          </Text>
          <Text fontSize="36px" fontWeight="300" color="text.lightGrey">
            404 animation
          </Text>
          <Text
            fontSize={["60px", "60px", "60px", "80px"]}           
            fontWeight="700"
            marginRight="35%"
            marginBottom="12%"
            lineHeight={["60px", "60px", "60px", "80px"]}
          >
            Getting lost on the web isn&apos;t always bad.
          </Text>
          <Text
            fontSize={["16px", "20px", "22px", "24px"]}
            fontWeight="400"
            marginRight="40%"
            marginBottom="3%"
          >
            {normal}
            <Link
              href="https://workingmouse.com.au/404"
              textDecoration="underline"
            >
              {linkText}
            </Link>
            {restOfText}
          </Text>
        </VStack>
        <Flex justifyContent="center">
          <CloudinaryImage
            cloudinaryImageName="projectPages/404/404-header"
            alt="404/404-header"
            imageProps={{
              width: "100%",
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
      </FullPageComponent>

      <VStack alignItems="flex-start" marginBottom="3%">
        <Link href="/projects/music-controller">
          <ArrowForwardIcon w="18px" h="15px" color="text.lightGrey" />
          <Text fontSize={["18px", "18px", "18px", "24px"]} fontWeight="500" color="text.lightGrey">
            Next
          </Text>
          <Text fontSize={["20px", "40px", "60px", "80px"]} fontWeight="500">
            Music controller
          </Text>
        </Link>
      </VStack>

      <Link href="/projects">
        <Button
          fontSize={["14px", "14px", "14px", "16px"]}
          fontWeight="400"
          border="1px"
          borderRadius="24px"
          variant="outline"
          textTransform="uppercase"
        >
          View all projects
        </Button>
      </Link>
    </Box>
  );
}
