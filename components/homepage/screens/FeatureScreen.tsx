'use client'
import {Flex, Text, VStack} from "@chakra-ui/react";
import ImageGrid from "@/components/homepage/ImageGrid";
import FullScreenStack from "@/components/FullScreenStack";

export default function FeatureScreen() {
    return (
        <FullScreenStack justifyContent="flex-start">
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

                <ImageGrid
                    columns={4}
                    order={[-1, -1, -1, 1]}
                    images={[
                        { imageName: 'shadow', alt: 'shadow' },
                        { imageName: 'black-fungus', alt: 'Black Fungus', circleImage: true, useOverhang: true },
                        { imageName: 'mushroom-white', alt: 'White Mushroom', circleImage: true },
                        { imageName: 'viet-herbs', alt: 'Viet Herbs' },
                        { imageName: 'tree', alt: 'Tree', circleImage: true },
                        { imageName: 'beach', alt: 'Beach' },
                        {
                            imageName: 'bird',
                            alt: 'Bird',
                            useOverhang: true,
                            overhangImageSpeed: 1,
                            overhangImageProps: { position: 'absolute', width: '80%', left: '10%', top: '10%' },
                        },
                        { imageName: 'fortune', alt: 'Fortune Cookie', circleImage: true },
                        { imageName: 'salt', alt: 'Salt' },
                        { imageName: 'oyster', alt: 'Oyster', circleImage: true },
                        { imageName: 'mushroom-2', alt: "Mushroom", circleImage: true },
                        { imageName: 'rose', alt: 'Rose' },
                    ]}
                />
            </Flex>
        </FullScreenStack>
    );
}