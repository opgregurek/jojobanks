import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: 'DISCOVER',
  description: 'JOJO banks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang='en'>
          <body>
            <Providers>
                <Box h="100vh" w="100vw">
                    {children}
                </Box>
            </Providers>
          </body>
      </html>
  )
}
