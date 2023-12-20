'use client'
import CloudinaryImage from "@/components/CloudinaryImage";
import {
    Box,
    Center,
    Flex,
    Text,
    VStack,
    chakra,
} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";
import {Link} from "@chakra-ui/next-js";
import {ReactNode, useMemo} from "react";
import ViewAllProjectsButton from "@/components/projects/ViewAllProjectsButton";

export interface ProjectPageProps {
    headerImg: string;
    projectLabel: string;
    projectName: ReactNode;
    projectFeatureText: ReactNode;
    projectDescription: ReactNode;
    preSlideContent?: ReactNode;
    slideImages?: string[];
    postSlideContent?: ReactNode;
    nextPage?: {
        name: string,
        href: string,
    },
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

export const Project = (props: ProjectPageProps) => {
    const {
        headerImg,
        slideImages,
        projectName,
        projectLabel,
        projectFeatureText,
        projectDescription,
        preSlideContent,
        postSlideContent,
        nextPage
    } = props;

    const preSlides = useMemo(() => {
        if (preSlideContent === undefined) {
            return (
                <></>
            );
        }

        return (
            <Center w="100%" h="629px" p="20%">
                <Text fontSize={["16px", "20px", "22px", "24px"]}>
                    {preSlideContent}
                </Text>
            </Center>
        );
    }, [preSlideContent]);

    const slides = useMemo(() => {
        if (slideImages === undefined || slideImages.length <= 0) {
            return (
                <></>
            );
        }

        return (
            <Flex justifyContent="center" flexDirection="column">
                {slideImages.map((item, index) => {
                    return (
                        <CloudinaryImage
                            cloudinaryImageName={`projectPages/${item}`}
                            alt={`${projectName} Slide ${index + 1}`}
                            imageProps={{
                                minWidth: "100%",
                            }}
                            key={`${item}-slide`}
                        />
                    )
                })}
            </Flex>
        )
    }, [slideImages, projectName]);

    const postSlides = useMemo(() => {
        if (postSlideContent === undefined) {
            return (
                <></>
            );
        }

        return (
            <Center w="100%" h="629px" p="20%">
                <Text fontSize={["16px", "20px", "22px", "24px"]} fontWeight="400">
                    {postSlideContent}
                </Text>
            </Center>
        );
    }, [postSlideContent]);

    const nextPageButton = useMemo(() => {
        if (nextPage === undefined) {
            return (
                <></>
            );
        }

        return (
            <Link
                href={nextPage.href}
                as={VStack}
                alignItems="flex-start"
                role="group"
                _hover={{
                    textDecoration: 'none',
                }}
                marginTop={10}
            >
                <ArrowForwardIcon w="18px" h="15px" color="text.lightGrey"/>
                <Text fontSize={["18px", "18px", "18px", "24px"]} fontWeight="500" color="text.lightGrey">
                    Next
                </Text>
                <Text
                    fontSize={["20px", "40px", "60px", "80px"]}
                    fontWeight="500"
                    _groupHover={{
                        textDecoration: 'underline',
                    }}
                >
                    {nextPage.name}
                </Text>
            </Link>
        );
    }, [nextPage]);

    return (
        <Box w="100%">
            <VStack alignItems="flex-start">
                <FullPageComponent gap={10}>
                    <VStack alignItems="flex-start" gap={2} maxW="982px">
                        <VStack alignItems="flex-start" gap={10}>
                            <Text
                                fontSize="16px"
                                fontWeight="400"
                                color="text.lightGrey"
                            >
                                {projectLabel}
                            </Text>
                            <Text
                                fontSize="36px"
                                fontWeight="300"
                                color="text.lightGrey"
                            >
                                {projectName}
                            </Text>
                        </VStack>
                        <Text
                            fontWeight="700"
                            lineHeight={["60px", "60px", "60px", "80px"]}
                            fontSize={["60px", "60px", "60px", "80px"]}
                            marginBottom={['40px', '40px', '100px', '150px']}
                        >
                            {projectFeatureText}
                        </Text>
                        <Text
                            fontSize={["16px", "20px", "22px", "24px"]}
                            fontWeight="400"
                            color="text.lightGrey"
                        >
                            {projectDescription}
                        </Text>
                    </VStack>

                    <Flex justifyContent="center">
                        <CloudinaryImage
                            cloudinaryImageName={`projectPages/${headerImg}`}
                            alt={`${headerImg}`}
                            pixelWidth={1440}
                            imageProps={{
                                width: "100%",
                            }}
                        />
                    </Flex>

                    {preSlides}
                    {slides}
                    {postSlides}
                </FullPageComponent>

                {nextPageButton}

                <ViewAllProjectsButton />
            </VStack>
        </Box>
    );
};
