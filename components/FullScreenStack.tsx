'use client'
import {chakra, VStack} from "@chakra-ui/react";

const FullScreenStack = chakra(VStack, {
    baseStyle: {
        maxWidth: '1440px',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'flex-start',
        minHeight: ['calc(100vh - 210px)', 'calc(100vh - 210px)', 'calc(100vh - 210px)', 'calc(100vh - 350px)']
    }
});

export default FullScreenStack;