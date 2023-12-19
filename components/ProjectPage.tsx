"use client";

import CloudinaryImage from "@/components/CloudinaryImage";
import {
  Box,
  Center,
  Flex,
  Text,
  VStack,
  Button,
  chakra,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {Link} from "@chakra-ui/next-js";

export interface ProjectPageProps {
  headerImg: string;
  slideImgs: string[];
  pageName: string;
  projectLable: string;
  projectContent: string;
  projectContent2?: string;
  projectContent3?: string;
  projectContent4?: string;
  nextPageName?: string;
  nextPageHref?: string;
}

const FullPageComponent = chakra(VStack, {
  baseStyle: {
    maxWidth: "1440px",
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

export const ProjectPage = (props: ProjectPageProps) => {
  const {
    headerImg,
    slideImgs,
    pageName,
    projectLable,
    projectContent,
    projectContent2,
    projectContent3,
    projectContent4,
    nextPageName,
    nextPageHref,
  } = props;

  const slideImg = slideImgs.map((item, key) => {
    return (
      <CloudinaryImage
        cloudinaryImageName={`projectPages/${item}`}
        alt={`${item}`}
        imageProps={{
          minWidth: "100%",
        }}
        key={key}
      />
    );
  });

  return (
    <Box w="100%">
      <VStack alignItems="flex-start">
        <FullPageComponent>
          <VStack alignItems="flex-start">
            <Text
              fontSize="16px"
              fontWeight="400"
              color="text.lightGrey"
              marginBottom="3%"
            >
              {projectLable}
            </Text>
            <Text fontSize="36px" fontWeight="300" color="text.lightGrey">
              {pageName}
            </Text>
            <Text
              fontWeight="700"
              lineHeight={["60px", "60px", "60px", "80px"]}
              marginRight="35%"
              marginBottom="12%"
              fontSize={["60px", "60px", "60px", "80px"]}
            >
              {projectContent}
            </Text>
            {projectContent2 !== undefined && (
              <Text
                fontSize={["16px", "20px", "22px", "24px"]}
                fontWeight="400"
                marginRight="40%"
                marginBottom="3%"
              >
                {projectContent2}
              </Text>
            )}
          </VStack>
          <Flex justifyContent="center">
            <CloudinaryImage
              cloudinaryImageName={`projectPages/${headerImg}`}
              alt={`${headerImg}`}
              imageProps={{
                width: "100%",
              }}
            />
          </Flex>
          {projectContent3 !== undefined && (
            <Center w="100%" h="629px" p="20%">
              <Text
                fontSize={["16px", "20px", "22px", "24px"]}
                fontWeight="400"
              >
                {projectContent3}
              </Text>
            </Center>
          )}
          <Flex
            justifyContent="center"
            flexDirection="column"
            marginBottom="6%"
          >
            {slideImg}
          </Flex>

          {projectContent4 !== undefined && (
            <Center w="100%" h="629px" p="20%">
              <Text
                fontSize={["16px", "20px", "22px", "24px"]}
                fontWeight="400"
              >
                {projectContent4}
              </Text>
            </Center>
          )}
        </FullPageComponent>

        {nextPageName !== undefined && (
          <VStack alignItems="flex-start" marginBottom="3%">
            <Link href={nextPageHref!}>
              <ArrowForwardIcon w="18px" h="15px" color="text.lightGrey" />
              <Text fontSize={["18px", "18px", "18px", "24px"]} fontWeight="500" color="text.lightGrey">
                Next
              </Text>
              <Text
                fontSize={["20px", "40px", "60px", "80px"]}
                fontWeight="500"
              >
                {nextPageName}
              </Text>
            </Link>
          </VStack>
        )}

        <Link href="/projects" alignItems="flex-start">
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
      </VStack>
    </Box>
  );
};
