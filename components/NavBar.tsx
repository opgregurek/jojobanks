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
    {label: 'Projects', href: '/projects'},
    {label: 'Contact', href: '/contact'}
];

const NavBar = () => {
    const pinkMushroomString = useMemo(() => fiveMinuteCacheImage(cloudinaryImage('homepage/mushroom-pink')),
        []);

    const { imagesPreloaded } = useImagePreloader([(pinkMushroomString)]);
    const pinkMushroom = useMemo(() => {
        if (!imagesPreloaded) {
            return <Box bg="white" w="42px" h="85px" />
        }

        return <Image src={pinkMushroomString} alt="Mushroom arrow" w="42px" h="85px" />;
    }, [imagesPreloaded, pinkMushroomString]);

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
                {isActive ? (
                    <Image src="/blue-circle.svg" alt="Blue Circle" width="13px" height="13px" />
                ) : null}
                {label}
            </Link>
        )
    }, [pathname]);

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