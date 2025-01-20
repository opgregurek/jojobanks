"use client";
import { ibmPlexMonoStyles } from "@/utils/ibm-plex-mono-font";
import { interStyles } from "@/utils/inter-font";
import { timesNewRomanStyles } from "@/utils/times-new-roman-font";
import { Flex, HStack, Span, Text, VStack } from "@chakra-ui/react";
import CloudinaryImage from "../ui/cloudinary-image";
import { useEffect, useState } from "react";
import copyTextToClipboard from "@/utils/copy-to-clipboard";
import { Tooltip } from "../ui/tooltip";

export default function ContentScreen() {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000); // Reset after 2 seconds

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [copied]);

  return (
    <VStack
      maxWidth="1440px"
      width="100%"
      padding={["100px 24px", "100px 24px", "100px 24px", "112px 120px"]}
    >
      <HStack
        width="100%"
        py="8px"
        borderBottom="1px solid #A5A5A5"
        flexDir={["column", "column", "column", "row"]}
        alignItems={["flex-start", "flex-start", "flex-start", "center"]}
        justifyContent="space-between"
      >
        <Text
          textTransform="uppercase"
          fontSize="13px"
          color="#7F7F7F"
          style={ibmPlexMonoStyles}
        >
          [ cv ]
        </Text>
        <Text
          textTransform="uppercase"
          fontSize="13px"
          color="#7F7F7F"
          style={ibmPlexMonoStyles}
        >
          JOJO Banks
        </Text>
        <Text
          textTransform="uppercase"
          fontSize="13px"
          color="#7F7F7F"
          style={ibmPlexMonoStyles}
        >
          services / places / qualifications /links
        </Text>
      </HStack>
      <Flex
        pt="40px"
        pb={["40px", "40px", "40px", "120px"]}
        flexDir="row"
        justifyContent="space-between"
        width="100%"
        gap="48px"
        flexWrap="wrap"
      >
        <Flex gap="40px" flexDir={["column", "column", "column", "row"]}>
          <Text
            fontSize="16px"
            textAlign="justify"
            style={timesNewRomanStyles}
            color="#171717"
            maxWidth={["unset", "unset", "unset", "300px"]}
          >
            Jojo brings over seven years of experience advocating for
            user-centric design principles when creating digital solutions.
            <br />
            <br />
            Her expertise lies in ensuring that the needs, behaviours, and goals
            of users are at the heart of every project, ensuring experiences are
            both impactful and meaningful.
            <br />
            <br />
            She prioritises solving the core issue before transitioning to the
            visual design phase, ensuring that the final product not only looks
            polished but also serves its intended purpose effectively.
          </Text>
          <Text
            fontSize="16px"
            textAlign="justify"
            style={timesNewRomanStyles}
            color="#171717"
            maxWidth={["unset", "unset", "unset", "300px"]}
          >
            This approach serves as a reminder that every action we take—whether
            it&apos;s unlocking our phone or opening a browser, carries intent
            and meaning.
            <br />
            <br />
            As our dependence on digital devices grow, it&apos;s more
            impertinent than ever for designers and builders to recognise the
            gains and pitfalls of human behaviour.
            <br />
            <br />
            It is our responsibility to craft experiences that are equally
            positive and ethical for societal development.
          </Text>
        </Flex>
        <VStack
          gap="48px"
          maxWidth="390px"
          width="100%"
          alignItems="flex-start"
        >
          <VStack gap="24px" alignItems="flex-start">
            <Text
              textTransform="uppercase"
              fontSize="14px"
              fontWeight="500"
              color="#7F7F7F"
              style={interStyles}
            >
              Services
            </Text>
            <VStack gap="2px" alignItems="flex-start">
              <Text fontSize="16px" style={timesNewRomanStyles} color="#262626">
                Digital
              </Text>
              <Text fontSize="16px" style={timesNewRomanStyles} color="#262626">
                Brand identity
              </Text>
              <Text fontSize="16px" style={timesNewRomanStyles} color="#262626">
                Creative direction
              </Text>
              <Text fontSize="16px" style={timesNewRomanStyles} color="#262626">
                UX/UI Design
              </Text>
              <Text fontSize="16px" style={timesNewRomanStyles} color="#262626">
                3D modeling
              </Text>
            </VStack>
          </VStack>
          <VStack gap="24px" alignItems="flex-start">
            <Text
              textTransform="uppercase"
              fontSize="14px"
              fontWeight="500"
              color="#7F7F7F"
              style={interStyles}
            >
              Places
            </Text>
            <VStack gap="2px" alignItems="flex-start">
              <Text
                fontSize="16px"
                style={timesNewRomanStyles}
                color="#262626"
                display="flex"
                gap="6px"
                alignItems="center"
              >
                Westpac Bank, Sydney
                <Span fontSize="14px" color="#7F7F7F" style={interStyles}>
                  2016 – 2018
                </Span>
              </Text>
              <Text
                fontSize="16px"
                style={timesNewRomanStyles}
                color="#262626"
                display="flex"
                gap="6px"
                alignItems="center"
              >
                Macquarie Bank, Sydney
                <Span fontSize="14px" color="#7F7F7F" style={interStyles}>
                  2018 – 2020
                </Span>
              </Text>
              <Text
                fontSize="16px"
                style={timesNewRomanStyles}
                color="#262626"
                display="flex"
                gap="6px"
                alignItems="center"
              >
                WorkingMouse, Brisbane
                <Span fontSize="14px" color="#7F7F7F" style={interStyles}>
                  2020 – 2023
                </Span>
              </Text>
              <Text
                fontSize="16px"
                style={timesNewRomanStyles}
                color="#262626"
                display="flex"
                gap="6px"
                alignItems="center"
              >
                Digital Freelancer
                <Span fontSize="14px" color="#7F7F7F" style={interStyles}>
                  2023 – PRESENT
                </Span>
              </Text>
              <Text
                fontSize="16px"
                style={timesNewRomanStyles}
                color="#262626"
                display="flex"
                gap="6px"
                alignItems="center"
              >
                Apas Port, Tokyo
                <Span fontSize="14px" color="#7F7F7F" style={interStyles}>
                  2024 – PRESENT
                </Span>
              </Text>
            </VStack>
          </VStack>
          <VStack gap="24px" alignItems="flex-start">
            <Text
              textTransform="uppercase"
              fontSize="14px"
              fontWeight="500"
              color="#7F7F7F"
              style={interStyles}
            >
              Qualifications
            </Text>
            <VStack gap="2px" alignItems="flex-start">
              <Text
                fontSize="16px"
                style={timesNewRomanStyles}
                color="#262626"
                display="flex"
                gap="6px"
                alignItems="center"
              >
                Information and Technology
                <Span fontSize="14px" color="#7F7F7F" style={interStyles}>
                  2013 – 2015
                </Span>
              </Text>
              <Text
                fontSize="16px"
                style={timesNewRomanStyles}
                color="#262626"
                display="flex"
                gap="6px"
                alignItems="center"
              >
                Science of Wellbeing
                <Span fontSize="14px" color="#7F7F7F" style={interStyles}>
                  2020
                </Span>
              </Text>
              <Text
                fontSize="16px"
                style={timesNewRomanStyles}
                color="#262626"
                display="flex"
                gap="6px"
                alignItems="center"
              >
                School of Moribana (Flower arranging)
                <Span fontSize="14px" color="#7F7F7F" style={interStyles}>
                  2023 – PRESENT
                </Span>
              </Text>
            </VStack>
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
      <HStack
        alignItems={["flex-start", "flex-start", "flex-start", "center"]}
        flexDir={["column", "column", "column", "row"]}
        width="100%"
        py="8px"
        borderTop="1px solid #A5A5A5"
        gap={["20px", "20px", "20px", "120px"]}
      >
        <HStack
          alignItems={["flex-start", "flex-start", "flex-start", "center"]}
          flexDir={["column", "column", "column", "row"]}
          width="100%"
          justifyContent="space-between"
        >
          <Text
            textTransform="uppercase"
            fontSize="13px"
            color="#7F7F7F"
            style={ibmPlexMonoStyles}
          >
            Click to Copy
          </Text>
          <Text
            textTransform="uppercase"
            fontSize="13px"
            color="#7F7F7F"
            style={ibmPlexMonoStyles}
          >
            [ email ]
          </Text>
        </HStack>
        <Tooltip
          content="COPIED!"
          open={copied}
          positioning={{ placement: "top" }}
          contentProps={{
            css: { "--tooltip-bg": "#A5A5A5" },
            style: ibmPlexMonoStyles,
            color: "white",
          }}
        >
          <Text
            textTransform="uppercase"
            fontSize="13px"
            color="#171717"
            p="3px 6px"
            border="1px solid #171717"
            style={ibmPlexMonoStyles}
            cursor="pointer"
            onClick={() => {
              copyTextToClipboard("josephinenguyendesigns@gmail.com");
              setCopied(true);
            }}
            _hover={{
              color: "#072165",
              borderColor: "#072165",
            }}
          >
            josephinenguyendesigns@gmail.com
          </Text>
        </Tooltip>
      </HStack>
    </VStack>
  );
}
