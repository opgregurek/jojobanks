'use client'

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        text: {
            white: '#F0EEED',
            blue: '#072165',
            dark: '#262626',
            lightGrey: '#A5A5A5',
            forestGreen: "#0A4209"
        },
        background: {
            dark: '#262626',
        }
    },
    breakpoints: {
        base: "0em", // 0px
        sm: "30em", // ~480px
        md: "48em", // ~768px
        lg: "62em", // ~992px
        xl: "80em", // ~1280px
        "2xl": "96em", // ~1536px
    },
    components: {
        Text: {
            baseStyle: () => ({
                color: 'black',
            })
        }
    }
})

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
    )
}