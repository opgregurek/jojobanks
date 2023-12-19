'use client'
import {chakra, VStack} from "@chakra-ui/react";

const FullPageComponent = chakra(VStack, {
    baseStyle: {
        maxWidth: '1440px',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'flex-start',
        minHeight: ['calc(100vh - 130px)', 'calc(100vh - 130px)', 'calc(100vh - 130px)', 'calc(100vh - 230px)']
    }
});

export default FullPageComponent;