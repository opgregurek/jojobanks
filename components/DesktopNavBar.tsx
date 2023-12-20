'use client'
import {useCallback, useMemo} from "react";
import fiveMinuteCacheImage from "@/utils/fiveMinuteCacheImage";
import cloudinaryImage from "@/utils/cloudinaryImage";
import useImagePreloader from "@/hooks/useImagePreloader";
import {Box, HStack, Image} from "@chakra-ui/react";
import {usePathname} from "next/navigation";
import {Link} from "@chakra-ui/next-js";
import {NavItem} from "@/components/NavBar";
import {useRecoilState} from "recoil";
import {NavBarActiveIcon, NavBarBackground, NavBarColor, NavBarShadow} from "@/stores/NavBarState";

export interface DesktopNavBarProps {
    navItems: Array<NavItem>;
}

const DesktopNavBar = (props: DesktopNavBarProps) => {
    const { navItems } = props;
    const [navBarColor, setNavBarColor] = useRecoilState(NavBarColor);
    const [navBarActiveIcon, setNavBarActiveIcon] = useRecoilState(NavBarActiveIcon);

    const navActive = useMemo(() => fiveMinuteCacheImage(cloudinaryImage(navBarActiveIcon, 13, undefined, true)),
        [navBarActiveIcon]);
    const navNonActive = useMemo(() => fiveMinuteCacheImage(cloudinaryImage('misc/nav-nonactive', 13, undefined, true)),
        []);

    const { imagesPreloaded } = useImagePreloader([navActive, navNonActive]);

    const navCircle = useCallback((isActive: boolean) => {
        if (!imagesPreloaded) {
            return <Box w="13px" h="13px" />
        }

        if (isActive) {
            return <Image src={navActive} alt="Blue Circle" width="13px" height="13px" />;
        }

        return <Image src={navNonActive} alt="Grey Circle" width="13px" height="13px" />;
    }, [imagesPreloaded, navActive, navNonActive]);

    const pathname = usePathname();
    const renderNavBarItem = useCallback((label: string, href: string) => {
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
        )
    }, [pathname, navCircle, navBarColor]);

    return (
        <HStack gap="48px">
            {navItems.map(({label, href}) => renderNavBarItem(label, href))}
        </HStack>
    )
}

export default DesktopNavBar;