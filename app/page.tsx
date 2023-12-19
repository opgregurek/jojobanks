'use client'

import {
    Box,
    HStack,
    Text,
    VStack,
    Grid,
    GridItem,
    SimpleGrid,
    Flex,
    chakra,
    ScaleFade,
    Fade,
    SlideFade
} from "@chakra-ui/react";
import HomePageImage from "@/components/HomePageImage";
import CloudinaryImage from "@/components/CloudinaryImage";
import {useMemo, useState} from "react";
import {InView} from "react-intersection-observer";
import useWindowDimensions from "@/hooks/useWindowDimentions";

const FullPageComponent = chakra(VStack, {
    baseStyle: {
        maxWidth: '1440px',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'flex-start',
        minHeight: ['calc(100vh - 130px)', 'calc(100vh - 130px)', 'calc(100vh - 130px)', 'calc(100vh - 230px)']
    }
});

const HiddenContentComponent = () => {
    const [hidden, setHidden] = useState(false);
    const { width, height } = useWindowDimensions();

    const squareContent = useMemo(() => {
        if (hidden) {
            return (
                <>
                    <Text color="text.lightGrey" textAlign="center" w="215px">
                        Hover over the text to reveal or click the square
                    </Text>
                    <Box bg="white" w="24px" h="24px" as="button" onClick={() => {
                        setHidden(false);
                    }}/>
                </>
            )
        }

        return (
            <>
                <Text color="text.lightGrey" textAlign="center">
                    Click the square to hide the text
                </Text>
                <Box bg="black" w="24px" h="24px" as="button" onClick={() => {
                    setHidden(true);
                }}/>
            </>
        );
    }, [hidden]);

    return (
        <>
            <VStack alignItems="center" justifyContent="space-between" overflow="hidden" width={`${width}px`} height={`${height}px`}>
                {/*<Box*/}
                {/*    position="relative"*/}
                {/*    top="20px"*/}
                {/*    left="20px"*/}
                {/*    width="300px"*/}
                {/*    height="300px"*/}
                {/*    borderRadius="50%"*/}
                {/*    boxShadow="0 0 0 9999px rgba(0, 0, 255, 1)"*/}
                {/*/>*/}
                <VStack>
                    {squareContent}
                </VStack>
                <Text fontSize={['40px', '40px', '40px', '81px']} marginTop="10%" marginBottom="auto">
                    To clarify muddy waters, you must hold them still and let things settle. Designing calls on that same
                    patience.
                </Text>
            </VStack>
        </>
    )
}

export default function Home() {
    return (
        <VStack w="100%" gap={[4, 4, 8, 16]}>
            <FullPageComponent justifyContent="flex-start">
                <Flex
                    flexDirection={['column', 'column', 'column', 'row']}
                    gap={[10, 10, 100]}
                    alignItems={['flex-start', 'flex-start', 'flex-start', 'flex-end']}
                    marginLeft="auto"
                    marginRight="auto"
                >
                    <VStack width={['auto', 'auto', '400px', '210px']} gap={10} alignItems="flex-start">
                        <Text>Josephine Nguyen</Text>
                        <VStack gap={3} alignItems="flex-start">
                            <Text fontSize="24px" fontWeight="700">
                                Curation & design is a path to self-discovery.
                            </Text>
                            <Text fontStyle="italic" color="text.lightGrey">
                                This space is a curated showcase of Josephine&apos;s evolving body of work spanning
                                several years.
                            </Text>
                            <Text fontStyle="italic" color="text.lightGrey">
                                Explore this collection for insights into her creative journey and where she would like
                                to go next.
                            </Text>
                        </VStack>
                    </VStack>

                    <SimpleGrid columns={4} order={[-1, -1, -1, 1]}>
                        <GridItem>
                            <HomePageImage
                                imageName="shadow"
                                alt="Shadow"
                            />
                        </GridItem>
                        <GridItem>
                            <HomePageImage
                                imageName="black-fungus"
                                alt="Black Fungus"
                                circleImage
                                useOverhang
                            />
                        </GridItem>
                        <GridItem>
                            <HomePageImage
                                imageName="mushroom-white"
                                alt="White Mushroom"
                                circleImage
                            />
                        </GridItem>
                        <GridItem>
                            <HomePageImage
                                imageName="viet-herbs"
                                alt="Viet Herbs"
                            />
                        </GridItem>

                        <GridItem>
                            <HomePageImage
                                imageName="tree"
                                alt="Tree"
                                circleImage
                            />
                        </GridItem>
                        <GridItem>
                            <HomePageImage
                                imageName="beach"
                                alt="Beach"
                            />
                        </GridItem>
                        <GridItem>
                            <HomePageImage
                                imageName="bird"
                                alt="Bird"
                                useOverhang
                                overhangImageSpeed={1}
                                overhangImageProps={{
                                    position: 'absolute',
                                    width: '80%',
                                    left: '10%',
                                    top: '10%',
                                }}
                            />
                        </GridItem>
                        <GridItem>
                            <HomePageImage
                                imageName="fortune"
                                alt="Fortune Cookie"
                                circleImage
                            />
                        </GridItem>

                        <GridItem>
                            <HomePageImage
                                imageName="salt"
                                alt="Salt"
                            />
                        </GridItem>
                        <GridItem>
                            <HomePageImage
                                imageName="oyster"
                                alt="Oyster"
                                circleImage
                            />
                        </GridItem>
                        <GridItem>
                            <HomePageImage
                                imageName="mushroom-2"
                                alt="Mushroom"
                                circleImage
                            />
                        </GridItem>
                        <GridItem>
                            <HomePageImage
                                imageName="rose"
                                alt="Rose"
                            />
                        </GridItem>
                    </SimpleGrid>
                </Flex>
            </FullPageComponent>

            <HiddenContentComponent/>

            <InView rootMargin="-40%" triggerOnce>
                {({inView, ref}) => (
                    <ScaleFade in={inView} transition={{enter: {duration: 0.7}}}>
                        <FullPageComponent gap={[6, 6, 6, 10]} ref={ref}>
                            <Text fontSize={['40px', '40px', '40px', '48px']} maxW="820px">
                                <Text fontWeight={600} as="span">— Josephine Nguyen</Text> is a Freelance Product UX/UI Designer based in
                                <Text color="text.blue" as="span"> Tokyo, Japan.</Text>
                            </Text>

                            <Text fontSize={['32px', '32px', '32px', '40px']} fontWeight={300} color="text.lightGrey" maxW="820px">
                                Through empathy and observing the natural stimulus around her, she designs digital experiences for
                                individuals that seek to serve a specific need.
                            </Text>

                            <Flex flexDirection={['column', 'column', 'row', 'row']} gap={6} maxWidth="100%">
                                <Box>
                                    <CloudinaryImage cloudinaryImageName="homepage/orange-rose" alt="Orange covered in rose" pixelWidth={432} imageProps={{maxWidth: '100%'}} />
                                </Box>
                                <Box>
                                    <CloudinaryImage cloudinaryImageName="homepage/silver-van" alt="Silver van" pixelWidth={965} imageProps={{maxWidth: '100%'}} />
                                </Box>
                            </Flex>
                        </FullPageComponent>
                    </ScaleFade>
                )}
            </InView>

            <InView rootMargin="-20%" triggerOnce>
                {({inView, ref}) => (
                    <ScaleFade in={inView} transition={{enter: {duration: 0.7}}}>
                        <FullPageComponent gap={[6, 6, 6, 10]} ref={ref}>
                            <Text fontSize={['32px', '32px', '32px', '40px']} maxW="820px">
                                Though time is relative, she has 7 years experience advocating UX/UI in digital
                                solutions. <br/><br/>
                                She works with people to unpack problems where software can help. She does this by:
                            </Text>

                            <Text fontSize={['20px', '20px', '20px', '28px']} fontWeight={300} color="text.lightGrey" maxW="820px">
                                Facilitating workshops • applying design thinking • conceptualising visual solutions • scoping
                                requirements • building roadmaps.
                            </Text>

                            <Box>
                                <CloudinaryImage cloudinaryImageName="homepage/mushroom-3" alt="" pixelWidth={1440}
                                                 imageProps={{maxWidth: '100%'}}/>
                            </Box>
                        </FullPageComponent>
                    </ScaleFade>
                )}
            </InView>
        </VStack>
    )
}
