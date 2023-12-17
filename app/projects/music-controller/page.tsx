'use-client'

import CloudinaryImage from "@/components/CloudinaryImage"
import { Box, Center, Flex, HStack, Text, VStack} from "@chakra-ui/react"


export default function MusicController(){
    return (
        <Box w="100%">
            <VStack alignItems="flex-start">
                <Text fontSize = "16px" fontWeight = "400" color="text.lightGrey" paddingBottom="28px">2021 -- UX/UI Design</Text>
                <Text fontSize = "36px" fontWeight = "300" color="text.lightGrey">Music controller</Text>
                <Text fontSize = "80px" fontWeight = "700" lineHeight="80px" paddingRight="35%" paddingBottom="190px">A mobile application that allows people to control the music at a venue.</Text> 
                <Text fontSize = "24px" fontWeight = "400" paddingRight="40%" paddingBottom="30px">For venues, such as restaurents, hotels, cafes and bars, this mobile application enables management over the music that is provided; giving them the controls to wield the vibe and environment for their patrons. The presence of music in a space that commands it has the power to elevate the atmosphere.</Text>
            </VStack>
            <Flex justifyContent="center">
               <CloudinaryImage cloudinaryImageName="projectPages/MustardMusic/MM-header" alt="MustardMusic/MM-header" height={746}/>
            </Flex>
            <Center w="100%" h = "629px" p="100px">
                <Text>With this application, venue staff can view the songs that are playing and use the remote to control how they are played. The inclusion of a like and dislike feature enabled an open channel and feedback loop to playlist makers. Playlists can also be viewed and scheduled; giving venue staff oversight on whats available and control over what vibe is appropriate.</Text>
            </Center>
        </Box>
    )
}

