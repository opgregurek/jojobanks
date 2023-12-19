'use client'
import {Box, ScaleFade, Text} from "@chakra-ui/react";
import FullScreenStack from "@/components/FullScreenStack";
import CloudinaryImage from "@/components/CloudinaryImage";
import {InView} from "react-intersection-observer";

export default function JoDescriptionScreen() {
    return (
        <InView rootMargin="-40%" triggerOnce>
            {({inView, ref}) => (
                <FullScreenStack gap={[6, 6, 6, 10]} ref={ref}>
                    <ScaleFade in={inView} transition={{ enter: { duration: 0.7 }}}>
                        <Text fontSize={['32px', '32px', '32px', '40px']} maxW="820px">
                            Though time is relative, she has 7 years experience advocating for the user in digital
                            solutions.
                        </Text>
                    </ScaleFade>

                    <ScaleFade in={inView} transition={{ enter: { duration: 0.7, delay: 0.5 }}}>
                        <Text fontSize={['32px', '32px', '32px', '40px']} maxW="820px">
                            She works with people to unpack problems where software can help. She does this by:
                        </Text>
                    </ScaleFade>

                    <ScaleFade in={inView} transition={{ enter: { duration: 0.7, delay: 1 }}}>
                        <Text
                            fontSize={['20px', '20px', '20px', '28px']}
                            fontWeight={300}
                            color="text.lightGrey"
                            maxW="820px"
                        >
                            Facilitating workshops • applying design thinking • conceptualising • visual solutions •
                            scoping
                            requirements • building roadmaps.
                        </Text>
                    </ScaleFade>
                    <ScaleFade in={inView} transition={{ enter: { duration: 0.7, delay: 1.5 }}}>
                        <Box>
                            <CloudinaryImage
                                cloudinaryImageName="homepage/mushroom-3"
                                alt="Mushroom in dense greenery"
                                pixelWidth={1440}
                                imageProps={{maxWidth: '100%'}}
                            />
                        </Box>
                    </ScaleFade>
                </FullScreenStack>
            )}
        </InView>
    );
}