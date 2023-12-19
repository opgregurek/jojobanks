import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import { Box } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
                <Box w="100vw" h="100vh" bg="white" p={['24px', '24px', '24px', '60px']} overflow="auto">
                    <NavBar />
                    <Box marginTop={['106px', '106px', '106px', '170px']}>
                        {children}
                    </Box>
                    <Footer />
                </Box>
            </Providers>
          </body>
      </html>
  )
}
