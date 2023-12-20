'use client'
import {InView} from "react-intersection-observer";
import FullScreenStack from "@/components/FullScreenStack";
import {ScaleFade, Text, VStack} from "@chakra-ui/react";
import ProjectsNavigation from "@/components/projects/ProjectsNavigation";
import ViewAllProjectsButton from "@/components/projects/ViewAllProjectsButton";

export default function FeaturedProjectsScreen() {
    return (
        <InView rootMargin="-30%" triggerOnce>
            {({inView, ref}) => (
                <FullScreenStack ref={ref} width="100%">
                    <ScaleFade in={inView} transition={{ enter: { duration: 0.5 }}}>
                        <VStack alignItems="flex-start" gap={10}>
                            <VStack alignItems="flex-start" gap={4}>
                                <Text color="text.blue" fontSize="14px">
                                    FEATURED PROJECTS
                                </Text>
                                <ProjectsNavigation useFeatured excludeLabels templateColumns="auto" gap={2} />
                            </VStack>
                            <ViewAllProjectsButton />
                        </VStack>
                    </ScaleFade>
                </FullScreenStack>
            )}
        </InView>
    )
}