'use client'
import {useCallback, useMemo} from "react";
import fiveMinuteCacheImage from "@/utils/fiveMinuteCacheImage";
import cloudinaryImage from "@/utils/cloudinaryImage";
import useImagePreloader from "@/hooks/useImagePreloader";
import {Box, HStack, Image} from "@chakra-ui/react";
import {usePathname} from "next/navigation";
import {Link} from "@chakra-ui/next-js";
import {NavItem} from "@/components/NavBar";

export interface DesktopNavBarProps {
    navItems: Array<NavItem>;
}

const DesktopNavBar = (props: DesktopNavBarProps) => {
    const { navItems } = props;
    const navActive = useMemo(() => fiveMinuteCacheImage(cloudinaryImage('misc/nav-active', 13, undefined, true)),
        []);
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
                color={isActive ? 'text.blue' : 'text.lightGrey'}
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
    }, [pathname, navCircle]);

    return (
        <HStack gap="48px">
            {navItems.map(({label, href}) => renderNavBarItem(label, href))}
        </HStack>
    )
}

export default DesktopNavBar;