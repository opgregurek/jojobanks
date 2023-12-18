'use client'

import {Box, HStack, Text, VStack, Grid, GridItem} from "@chakra-ui/react";
import HomePageImage from "@/components/HomePageImage";

export default function Home() {
  return (
      <Box w="100%" marginBottom="20%">
        <VStack justifyContent="flex-start" alignItems="flex-start">
          <HStack gap="80px" alignItems="flex-end">
            <VStack width="210px" alignItems="flex-start">
              <Text>Josephine Nguyen</Text>
              <Text fontSize="24px" fontWeight="700">Curation & design is a path to self-discovery.</Text>
              <Text fontStyle="italic" color="text.lightGrey">
                This space is a curated showcase of Josephine&apos;s evolving body of work spanning several years. <br /><br />
                Explore this collection for  insights into her creative journey and where she would like to go next.
              </Text>
            </VStack>

            <Grid templateColumns="auto auto auto auto">
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
            </Grid>
          </HStack>
        </VStack>
      </Box>
  )
}
