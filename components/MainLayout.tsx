'use client';
import { RecoilRoot } from 'recoil';
import { Box } from '@chakra-ui/react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Providers } from '@/app/providers';

export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<Providers>
			<RecoilRoot>
				<Box w="100vw" minHeight="100vh" bg="white" p={['24px', '24px', '24px', '60px']}>
					<NavBar />
					<Box marginTop={['60px', '60px', '60px', '85px']}>{children}</Box>
					<Footer />
				</Box>
			</RecoilRoot>
		</Providers>
	);
}
