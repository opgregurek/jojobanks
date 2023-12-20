'use client'
import CloudinaryImage from "@/components/CloudinaryImage";
import {
    Box,
    Center,
    Flex,
    Text,
    VStack,
    ScaleFade,
} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";
import {Link} from "@chakra-ui/next-js";
import {Fragment, ReactNode, useMemo} from "react";
import ViewAllProjectsButton from "@/components/projects/ViewAllProjectsButton";
import {InView} from "react-intersection-observer";
import FullScreenStack from "@/components/FullScreenStack";

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
            <InView rootMargin="-35%" triggerOnce>
                {({inView, ref}) => (
                    <Center w="100%" h="629px" p={['5%', '5%', '10%', '20%']} ref={ref}>
                        <ScaleFade in={inView} transition={{ enter: { duration: 0.7 }}}>
                            <Text fontSize={["16px", "20px", "22px", "24px"]}>
                                {preSlideContent}
                            </Text>
                        </ScaleFade>
                    </Center>
                )}
            </InView>
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
                        <Fragment key={`${item}-slide`}>
                            <InView rootMargin="-35%" triggerOnce>
                                {({inView, ref}) => (
                                    <ScaleFade in={inView} transition={{ enter: { duration: 0.7 }}}>
                                        <Box ref={ref}>
                                            <CloudinaryImage
                                                cloudinaryImageName={`projectPages/${item}`}
                                                alt={`${projectName} Slide ${index + 1}`}
                                                imageProps={{
                                                    minWidth: "100%",
                                                }}
                                            />
                                        </Box>
                                    </ScaleFade>
                                )}
                            </InView>
                        </Fragment>
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
            <InView rootMargin="-35%" triggerOnce>
                {({inView, ref}) => (
                    <Center w="100%" h="629px" p={['5%', '5%', '10%', '20%']} ref={ref}>
                        <ScaleFade in={inView} transition={{ enter: { duration: 0.7 }}}>
                            <Text fontSize={["16px", "20px", "22px", "24px"]} fontWeight="400">
                                {postSlideContent}
                            </Text>
                        </ScaleFade>
                    </Center>
                )}
            </InView>
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
                <FullScreenStack gap={10}>
                    <InView triggerOnce>
                        {({inView, ref}) => (
                            <Fragment>
                                <ScaleFade in={inView} transition={{ enter: { duration: 0.7 }}}>
                                    <VStack alignItems="flex-start" gap={2} maxW="982px">
                                        <VStack alignItems="flex-start" gap={10}>
                                            <Text fontSize="16px" fontWeight="400" color="text.lightGrey">
                                                {projectLabel}
                                            </Text>
                                            <Text fontSize="36px" fontWeight="300" color="text.lightGrey">
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
                                </ScaleFade>
                                <Flex justifyContent="center" ref={ref}>
                                    <ScaleFade in={inView} transition={{ enter: { duration: 0.7, delay: 0.5 }}}>
                                        <CloudinaryImage
                                            cloudinaryImageName={`projectPages/${headerImg}`}
                                            alt={`${headerImg}`}
                                            pixelWidth={1440}
                                            imageProps={{
                                                width: "100%",
                                            }}
                                        />
                                    </ScaleFade>
                                </Flex>
                            </Fragment>
                        )}
                    </InView>

                    {preSlides}
                    {slides}
                    {postSlides}
                </FullScreenStack>

                {nextPageButton}

                <ViewAllProjectsButton />
            </VStack>
        </Box>
    );
};
