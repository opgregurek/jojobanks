'use client'

import {Box, HStack, Text, VStack, Image, Grid, GridItem} from "@chakra-ui/react";
import {CLOUDINARY_URL} from "@/app/Constants";
import DisplayImage from "@/components/HomePageImage";

export default function Home() {
    return (
        <Box w="100%" h="100vh" bg="white">
            <VStack justifyContent="flex-start" alignItems="flex-start" p="60px">
                <Image src={`${CLOUDINARY_URL}/homepage/mushroom-pink`} alt="Mushroom arrow" w="42px" h="85px" />
                <HStack gap="80px" alignItems="flex-end">
                    <VStack width="210px" alignItems="flex-start">
                        <Text>Josephine Nguyen</Text>
                        <Text
                            fontSize="24px"
                            fontWeight="700"
                        >
                            Curation & design is a path to self-discovery.
                        </Text>
                        <Text fontStyle="italic" color="text.lightGrey">
                            This space is a curated showcase of Josephine&apos;s evolving body of work spanning several years. <br /><br />
                            Explore this collection for  insights into her creative journey and where she would like to go next.
                        </Text>
                    </VStack>

                    <Grid templateColumns="auto auto auto auto">
                        <GridItem>
                            <DisplayImage
                                imageName="shadow"
                                alt="Shadow"
                            />
                        </GridItem>
                        <GridItem>
                            <DisplayImage
                                imageName="black-fungus"
                                alt="Black Fungus"
                                circleImage
                                useOverhang
                            />
                        </GridItem>
                        <GridItem>
                            <DisplayImage
                                imageName="mushroom-white"
                                alt="White Mushroom"
                                circleImage
                            />
                        </GridItem>
                        <GridItem>
                            <DisplayImage
                                imageName="viet-herbs"
                                alt="Viet Herbs"
                            />
                        </GridItem>

                        <GridItem>
                            <DisplayImage
                                imageName="tree"
                                alt="Tree"
                                circleImage
                            />
                        </GridItem>
                        <GridItem>
                            <DisplayImage
                                imageName="beach"
                                alt="Beach"
                            />
                        </GridItem>
                        <GridItem>
                            <DisplayImage
                                imageName="bird"
                                alt="Bird"
                                useOverhang
                                overhangImageProps={{
                                    position: 'absolute',
                                    width: '80%',
                                    left: '10%',
                                    top: '10%',
                                }}
                            />
                        </GridItem>
                        <GridItem>
                            <DisplayImage
                                imageName="fortune"
                                alt="Fortune Cookie"
                                circleImage
                            />
                        </GridItem>

                        <GridItem>
                            <DisplayImage
                                imageName="salt"
                                alt="Salt"
                            />
                        </GridItem>
                        <GridItem>
                            <DisplayImage
                                imageName="oyster"
                                alt="Oyster"
                                circleImage
                            />
                        </GridItem>
                        <GridItem>
                            <DisplayImage
                                imageName="mushroom-2"
                                alt="Mushroom"
                                circleImage
                            />
                        </GridItem>
                        <GridItem>
                            <DisplayImage
                                imageName="rose"
                                alt="Rose"
                            />
                        </GridItem>
                    </Grid>
                </HStack>
            </VStack>
        </Box>
    )
}
