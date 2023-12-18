'use client'

import {
    Box,
    HStack,
    Image,
    useBreakpoint,
} from "@chakra-ui/react";
import cloudinaryImage from "@/utils/cloudinaryImage";
import useImagePreloader from "@/hooks/useImagePreloader";
import fiveMinuteCacheImage from "@/utils/fiveMinuteCacheImage";
import {useMemo} from "react";
import MobileNavBar from "@/components/MobileNavBar";
import DesktopNavBar from "@/components/DesktopNavBar";

export interface NavItem {
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
    const pinkMushroomString = useMemo(() => fiveMinuteCacheImage(cloudinaryImage('homepage/mushroom-pink', 42)),
        []);

    const { imagesPreloaded } = useImagePreloader([pinkMushroomString]);

    const pinkMushroom = useMemo(() => {
        if (!imagesPreloaded) {
            return <Box bg="white" w="42px" h="85px" />
        }

        return <Image src={pinkMushroomString} alt="Mushroom arrow" w="42px" h="85px" />;
    }, [imagesPreloaded, pinkMushroomString]);

    const breakpoint = useBreakpoint();
    const navBar = useMemo(() => {
        if (breakpoint === 'md' || breakpoint === 'sm') {
            return <MobileNavBar navItems={NavItems} />;
        }
        return <DesktopNavBar navItems={NavItems} />;
    }, [breakpoint]);

    return (
        <HStack pb="40px" justifyContent="space-between" alignItems="flex-start">
            {pinkMushroom}
            {navBar}
        </HStack>
    )
};

export default NavBar;