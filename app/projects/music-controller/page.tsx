'use-client'

import CloudinaryImage from "@/components/CloudinaryImage"
import { Box, Text, VStack} from "@chakra-ui/react"


export default function MusicController(){
    return (
        <Box w="100%">
            <VStack alignItems="flex-start">
                <Text fontSize = "16px" fontWeight = "400" color="text.lightGrey" paddingBottom="28px">2021 -- UX/UI Design</Text>
                <Text fontSize = "36px" fontWeight = "300" color="text.lightGrey">Music controller</Text>
                <Text fontSize = "80px" fontWeight = "700" lineHeight="80px" paddingRight="35%" paddingBottom="190px">A mobile application that allows people to control the music at a venue.</Text> 
                <Text fontSize = "24px" fontWeight = "400" paddingRight="40%">For venues, such as restaurents, hotels, cafes and bars, this mobile application enables management over the music that is provided; giving them the controls to wield the vibe and environment for their patrons. The presence of music in a space that commands it has the power to elevate the atmosphere.</Text>
                <CloudinaryImage cloudinaryImageName="projectPages/MustardMusic/MM-header" alt="MustardMusic/MM-header" width={1000} height={746} />
            </VStack>
        </Box>
    )
}