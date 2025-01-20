"use client";

import { Box, Flex, HStack, Link, Text, VStack } from "@chakra-ui/react";
import CloudinaryImage from "./cloudinary-image";
import { NavItems } from "./navbar/nav-bar";
import NextLink from "next/link";
import { interStyles } from "@/utils/inter-font";
import { ibmPlexMonoStyles } from "@/utils/ibm-plex-mono-font";
import { useFooterState } from "@/stores/footer-state";

export default function Footer() {
  const enableFooter = useFooterState((state) => state.enableFooter);

  if (!enableFooter) {
    return <></>;
  }

  return (
    <VStack
      alignItems="flex-start"
      borderTop="1px solid #0000004D"
      padding={["32px 24px", "32px 24px", "32px 24px", "60px 80px"]}
      gap={["48px", "48px", "48px", "88px"]}
    >
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        minWidth={["unset", "unset", "unset", "50%"]}
        justifyContent={[
          "flex-start",
          "flex-start",
          "flex-start",
          "space-between",
        ]}
        gap="40px"
      >
        <VStack gap="40px" alignItems="flex-start">
          <Box rotate="-30deg">
            <CloudinaryImage
              cloudinaryImageName="contact/spiral"
              alt="Spiral"
              pixelWidth={63}
              pixelHeight={67}
            />
          </Box>
          <VStack gap="14px" maxWidth="286px" alignItems="flex-start">
            <Text
              style={ibmPlexMonoStyles}
              fontSize="14px"
              textTransform="uppercase"
            >
              “We have learned so much
              <br />
              there still remains much to learn
              <br />
              we are not going in circles
              <br />
              we are going upwards
            </Text>
            <Text
              style={ibmPlexMonoStyles}
              fontSize="14px"
              textTransform="uppercase"
            >
              The path is a spiral.”
            </Text>
            <Text
              style={ibmPlexMonoStyles}
              fontSize="14px"
              textTransform="uppercase"
            >
              Herman Hesse
            </Text>
          </VStack>
        </VStack>
        <VStack alignItems="flex-start" gap="40px">
          <VStack gap="10px" alignItems="flex-start">
            {NavItems.map((navItem) => (
              <Link
                key={`footer-navbar-link-${navItem.label.toLowerCase().replace(" ", "-")}`}
                asChild
                textTransform="uppercase"
                fontSize="14px"
                style={interStyles}
                color="#171717"
                _hover={{
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  color: "#072165",
                }}
              >
                <NextLink href={navItem.href}>{navItem.label}</NextLink>
              </Link>
            ))}
          </VStack>
          <HStack gap="8px">
            <a href="https://instagram.com/jojobanks.jpg">
              <CloudinaryImage
                cloudinaryImageName="contact/instagram"
                alt="Instagram"
                pixelHeight={37}
                pixelWidth={37}
              />
            </a>
            <a href="https://www.linkedin.com/in/josephinenguyen1/">
              <CloudinaryImage
                cloudinaryImageName="contact/linkedin"
                alt="LinkedIn"
                pixelHeight={37}
                pixelWidth={37}
              />
            </a>
            <a href="https://x.com/oysterqueen300">
              <CloudinaryImage
                cloudinaryImageName="contact/x"
                alt="X"
                pixelHeight={37}
                pixelWidth={37}
              />
            </a>
            <a href="https://dribbble.com/jojobankss">
              <CloudinaryImage
                cloudinaryImageName="contact/dribbble"
                alt="Dribbble"
                pixelHeight={37}
                pixelWidth={37}
              />
            </a>
          </HStack>
        </VStack>
      </Flex>
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        justifyContent="space-between"
        padding="12px 0"
        borderTop="0.5px solid"
        borderTopColor="#A5A5A5"
        width="100%"
        flexWrap="wrap"
        gap="8px"
      >
        <Text
          style={ibmPlexMonoStyles}
          color="#7F7F7F"
          fontSize="13px"
          whiteSpace="nowrap"
        >
          Last updated 15 Jan 2025
        </Text>
        <Flex flexDirection={["column", "column", "column", "row"]} gap="8px">
          <Text
            style={ibmPlexMonoStyles}
            fontSize="13px"
            color="#7F7F7F"
            whiteSpace="nowrap"
            textTransform="uppercase"
          >
            Design by jojo banks
          </Text>
          <Text
            style={ibmPlexMonoStyles}
            fontSize="13px"
            color="#7F7F7F"
            whiteSpace="nowrap"
            textTransform="uppercase"
          >
            •
          </Text>
          <Text
            style={ibmPlexMonoStyles}
            fontSize="13px"
            color="#7F7F7F"
            whiteSpace="nowrap"
            textTransform="uppercase"
          >
            Development by{" "}
            <Link
              textUnderlineOffset="3px"
              href="https://www.linkedin.com/in/oskar-poonkam-gregurek/"
              _hover={{
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                color: "#072165",
              }}
            >
              Oskar the g-unit
            </Link>
          </Text>
        </Flex>
      </Flex>
    </VStack>
  );
}
