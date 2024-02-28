'use client';
import { useCallback, useMemo } from 'react';
import fiveMinuteCache from '@/utils/fiveMinuteCache';
import cloudinaryImage from '@/utils/cloudinaryImage';
import { HStack, Image } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { Link } from '@chakra-ui/next-js';
import { NavItem } from '@/components/NavBar';
import { useRecoilState } from 'recoil';
import { NavBarActiveIcon, NavBarColor } from '@/stores/NavBarState';

export interface DesktopNavBarProps {
	navItems: Array<NavItem>;
}

const DesktopNavBar = (props: DesktopNavBarProps) => {
	const { navItems } = props;
	const pathname = usePathname();
	const [navBarColor] = useRecoilState(NavBarColor);
	const [navBarActiveIcon] = useRecoilState(NavBarActiveIcon);

	const navActive = useMemo(
		() => fiveMinuteCache(cloudinaryImage(navBarActiveIcon, 13, undefined, true)),
		[navBarActiveIcon],
	);
	const navNonActive = useMemo(() => fiveMinuteCache(cloudinaryImage('misc/nav-nonactive', 13, undefined, true)), []);

	// the navCircle is different depending on whether the link is active
	const navCircle = useCallback(
		(isActive: boolean) => {
			if (isActive) {
				return <Image src={navActive} alt="Blue Circle" width="13px" height="13px" />;
			}

			return <Image src={navNonActive} alt="Grey Circle" width="13px" height="13px" />;
		},
		[navActive, navNonActive],
	);

	const renderNavBarItem = useCallback(
		(label: string, href: string) => {
			// the link is active if the path starts with our href
			const isActive = href !== '/' ? pathname.startsWith(href) : pathname === '/';
			return (
				<Link
					key={`navbar-link-${label.toLowerCase().replace(' ', '-')}`}
					textTransform="uppercase"
					color={isActive ? navBarColor : 'text.lightGrey'}
					href={href}
					fontWeight={isActive ? 600 : 400}
					display="flex"
					flexDirection="row"
					alignItems="center"
					gap="8px"
				>
					{navCircle(isActive)}
					{label}
				</Link>
			);
		},
		[pathname, navCircle, navBarColor],
	);

	return <HStack gap="48px">{navItems.map(({ label, href }) => renderNavBarItem(label, href))}</HStack>;
};

export default DesktopNavBar;
