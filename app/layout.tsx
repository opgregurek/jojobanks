import type {Metadata} from 'next'
import './globals.css'
import MainLayout from "@/components/MainLayout";

export const metadata: Metadata = {
    title: 'DISCOVER',
    description: 'JOJO banks',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body>
                <MainLayout>
                    {children}
                </MainLayout>
            </body>
        </html>
    )
}
