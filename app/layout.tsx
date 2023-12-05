import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import { Box } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";

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
                <Box w="100vw" bg="white" p="60px">
                    <NavBar />
                    {children}
                </Box>
            </Providers>
          </body>
      </html>
  )
}
