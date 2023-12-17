'use client'

import {Box, HStack, Image} from "@chakra-ui/react";
import cloudinaryImage from "@/utils/cloudinaryImage";
import useImagePreloader from "@/hooks/useImagePreloader";
import fiveMinuteCacheImage from "@/utils/fiveMinuteCacheImage";
import {useCallback, useMemo} from "react";
import {usePathname} from "next/navigation";
import {Link} from "@chakra-ui/next-js";

interface NavItem {
    label: string;
    href: string;
}

const NavItems: Array<NavItem> = [
    {label: 'Discover', href: '/'},
    {label: 'Tool-kit', href: '/tool-kit'},
    {label: 'Projects', href: '/projects/project-nav'},
    {label: 'Contact', href: '/contact'}
];

const NavBar = () => {
    const pinkMushroomString = useMemo(() => fiveMinuteCacheImage(cloudinaryImage('homepage/mushroom-pink', 42)),
        []);
    const navActive = useMemo(() => fiveMinuteCacheImage(cloudinaryImage('misc/nav-active', 13)),
        []);
    const navNonActive = useMemo(() => fiveMinuteCacheImage(cloudinaryImage('misc/nav-nonactive', 13)),
        []);

    const { imagesPreloaded } = useImagePreloader([pinkMushroomString, navActive, navNonActive]);

    const pinkMushroom = useMemo(() => {
        if (!imagesPreloaded) {
            return <Box bg="white" w="42px" h="85px" />
        }

        return <Image src={pinkMushroomString} alt="Mushroom arrow" w="42px" h="85px" />;
    }, [imagesPreloaded, pinkMushroomString]);

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
        <HStack pb="40px" justifyContent="space-between" alignItems="flex-start">
            {pinkMushroom}
            <HStack gap="48px">
                {NavItems.map(({label, href}) => renderNavBarItem(label, href))}
            </HStack>
        </HStack>
    )
};

export default NavBar;