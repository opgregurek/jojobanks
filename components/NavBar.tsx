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
    const pinkMushroomString = useMemo(() => fiveMinuteCacheImage(cloudinaryImage('homepage/mushroom-pink')),
        []);

    const { imagesPreloaded } = useImagePreloader([pinkMushroomString]);

    const pinkMushroom = useMemo(() => {
        if (!imagesPreloaded) {
            return <Box position="relative" bg="white" w="42px" h="85px" zIndex="20" />
        }

        return <Image src={pinkMushroomString} alt="Mushroom arrow" position="relative" w="42px" h="85px" zIndex="20" />;
    }, [imagesPreloaded, pinkMushroomString]);

    const breakpoint = useBreakpoint();
    const navBar = useMemo(() => {
        if (breakpoint === 'md' || breakpoint === 'sm') {
            return <MobileNavBar navItems={NavItems} />;
        }
        return <DesktopNavBar navItems={NavItems} />;
    }, [breakpoint]);

    return (
        <>
            {pinkMushroom}
            <HStack alignItems="flex-start" justifyContent="flex-end" position="fixed" top={0} left={0} width="100vw" p={['24px', '24px', '24px', '24px 60px']} bg="white" zIndex="10">
                {navBar}
            </HStack>
        </>
    )
};

export default NavBar;