'use client';
import { Box, HStack, Image } from '@chakra-ui/react';
import cloudinaryImage from '@/utils/cloudinaryImage';
import fiveMinuteCacheImage from '@/utils/fiveMinuteCacheImage';
import { useEffect, useMemo } from 'react';
import MobileNavBar from '@/components/MobileNavBar';
import DesktopNavBar from '@/components/DesktopNavBar';
import { useRouter } from 'next/navigation';
import useScrollPosition from '@/hooks/useScrollbar';
import { useRecoilState } from 'recoil';
import { NavBarBackground, NavBarShadow } from '@/stores/NavBarState';

export interface NavItem {
	label: string;
	href: string;
}

const NavItems: Array<NavItem> = [
	{ label: 'Discover', href: '/' },
	{ label: 'Tool-kit', href: '/tool-kit' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'Contact', href: '/contact' },
];

const NavBar = () => {
	const router = useRouter();
	const scroll = useScrollPosition();

	const [navBarBackground] = useRecoilState(NavBarBackground);
	const [navBarShadow, setNavBarShadow] = useRecoilState(NavBarShadow);
	// if we have scrolled beyond 50px then apply shadow to the navbar, if we are below 50px no shadow
	useEffect(() => {
		setNavBarShadow(scroll > 50);
	}, [scroll, setNavBarShadow]);

	const pinkMushroomString = useMemo(() => fiveMinuteCacheImage(cloudinaryImage('homepage/mushroom-pink')), []);

	return (
		<>
			<Image
				src={pinkMushroomString}
				alt="Mushroom arrow"
				position="relative"
				w="42px"
				h="85px"
				zIndex="20"
				onClick={() => {
					router.push('/');
				}}
				_hover={{
					cursor: 'pointer',
				}}
			/>
			<HStack
				alignItems="flex-start"
				justifyContent="flex-end"
				position="fixed"
				top={0}
				left={0}
				width="100vw"
				p={['24px', '24px', '24px', '60px 60px 24px 60px']}
				bg={navBarBackground}
				zIndex="10"
				boxShadow={navBarShadow ? '0px 4px 20px 0px rgba(0, 0, 0, 0.05);' : undefined}
			>
				<Box display={['block', 'block', 'block', 'none']}>
					<MobileNavBar navItems={NavItems} />
				</Box>
				<Box display={['none', 'none', 'none', 'block']}>
					<DesktopNavBar navItems={NavItems} />
				</Box>
			</HStack>
		</>
	);
};

export default NavBar;
