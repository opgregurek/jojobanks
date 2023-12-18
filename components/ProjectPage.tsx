'use client'

import CloudinaryImage from "@/components/CloudinaryImage"
import { Box, Center, Flex, Text, VStack, Link, Button} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons";

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
        projectContent4,
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
        <Box w="100%" marginBottom="10%">
        <VStack alignItems="flex-start">
            <Text fontSize = "16px" fontWeight = "400" color="text.lightGrey" marginBottom="3%">{ projectLable }</Text>
            <Text fontSize = "36px" fontWeight = "300" color="text.lightGrey">{ pageName }</Text>
            <Text fontSize = "80px" fontWeight = "700" lineHeight="80px" marginRight="35%" marginBottom="12%">{ projectContent }</Text>
            { projectContent2 !== undefined &&
                <Text fontSize = "24px" fontWeight = "400" marginRight="40%" marginBottom="3%">{ projectContent2 }</Text>
            }
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
        { projectContent3 !== undefined &&
            <Center w="100%" h="629px" p="20%">
                <Text fontSize = "24px" fontWeight = "400" textAlign="center">{ projectContent3 }</Text>
            </Center>
        }
        <Flex justifyContent="center" flexDirection="column" marginBottom="6%">{ slideImg }</Flex>

        { projectContent4 !== undefined &&
            <Center w="100%" h="629px" p="20%">
                <Text fontSize = "24px" fontWeight = "400" textAlign="center">{ projectContent4 }</Text>
            </Center>
        }
          
        { nextPageName !== undefined && 
            <VStack alignItems="flex-start" marginBottom="3%">
                <Link href= {nextPageHref}>
                    <ArrowForwardIcon
                        w="18px"
                        h="15px"
                        color="text.lightGrey"
                    />
                    <Text fontSize = "24px" fontWeight = "500" color="text.lightGrey">Next</Text>
                    <Text fontSize = "80px" fontWeight = "500">{ nextPageName }</Text>
                </Link>
            </VStack>
        }

        <Link href="/projects">
           <Button
             fontSize="16px"
             fontWeight="400"
             border="1px"
             borderRadius="24px"
             variant="outline"
             textTransform="uppercase"
           >
            View all projects
           </Button>
        </Link>
    </Box>
    )
}