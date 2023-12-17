'use client'

import CloudinaryImage from "@/components/CloudinaryImage"
import { Box, Center, Flex, Link, Text, VStack} from "@chakra-ui/react"
import Footer from "./Footer";

export interface ProjectPageProps {
    headerImg: string;
    slideImgs: string[];
    pageName: string;
    projectLable: string;
    projectContent: string;
    projectContent2: string;
    projectContent3: string;
    nextPageName?: string;
    nextPageHref?: string
}

export const ProjectPage = (props: ProjectPageProps) => {
    const {
        headerImg,
        slideImgs,
        pageName,
        projectLable,
        projectContent,
        projectContent2,
        projectContent3,
        nextPageName,
        nextPageHref
    } = props;

    const slideImg = slideImgs.map((item, key) => {
        return (
            <CloudinaryImage
                cloudinaryImageName={ `projectPages/${item}` }
                alt={`${item}`}
                    imageProps={{
                    width: '100%',
                }}
                key={key}
            />
        )
    });

    return (
        <Box w="100%">
        <VStack alignItems="flex-start">
            <Text fontSize = "16px" fontWeight = "400" color="text.lightGrey" marginBottom="3%">{ projectLable }</Text>
            <Text fontSize = "36px" fontWeight = "300" color="text.lightGrey">{ pageName }</Text>
            <Text fontSize = "80px" fontWeight = "700" lineHeight="80px" marginRight="35%" marginBottom="12%">{ projectContent }</Text>
            <Text fontSize = "24px" fontWeight = "400" marginRight="40%" marginBottom="3%">{ projectContent2 }</Text>
        </VStack>
        <Flex justifyContent="center">
           <CloudinaryImage
               cloudinaryImageName={ `projectPages/${headerImg}` }
               alt={`${headerImg}`}
                   imageProps={{
                   width: '100%',
               }}
           />
        </Flex>
        <Center w="100%" h="629px" p="20%">
            <Text fontSize = "24px" fontWeight = "400" textAlign="center">{ projectContent3 }</Text>
        </Center>

        <Flex justifyContent="center" flexDirection="column" marginBottom="6%">{ slideImg }</Flex>
          
        { nextPageName !== undefined && 
            <VStack alignItems="flex-start" marginBottom="5%">
                <Link href= {nextPageHref}>
                    <Text fontSize = "24px" fontWeight = "500">Next project</Text>
                    <Text fontSize = "80px" fontWeight = "500">{ nextPageName }</Text>
                </Link>
            </VStack>
        }
        <Footer />
    </Box>
    )
}