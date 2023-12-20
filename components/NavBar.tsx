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
import {useEffect, useMemo, useState} from "react";
import MobileNavBar from "@/components/MobileNavBar";
import DesktopNavBar from "@/components/DesktopNavBar";
import {useRouter} from "next/navigation";
import useScrollPosition from "@/hooks/useScrollbar";
import {useRecoilState} from "recoil";
import {NavBarBackground, NavBarShadow} from "@/stores/NavBarState";

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
    const [navBarShadow, setNavBarShadow] = useRecoilState(NavBarShadow);
    const scroll = useScrollPosition();

    useEffect(() => {
        setNavBarShadow(scroll > 50);
    }, [scroll, setNavBarShadow]);

    const [navBarBackground, setNavBarBackground] = useRecoilState(NavBarBackground);

    const router = useRouter();
    const pinkMushroomString = useMemo(() => fiveMinuteCacheImage(cloudinaryImage('homepage/mushroom-pink')),
        []);

    const { imagesPreloaded } = useImagePreloader([pinkMushroomString]);

    const pinkMushroom = useMemo(() => {
        if (!imagesPreloaded) {
            return <Box position="relative" bg="white" w="42px" h="85px" zIndex="20" />
        }

        return (
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
        );
    }, [imagesPreloaded, pinkMushroomString, router]);

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
                {navBar}
            </HStack>
        </>
    )
};

export default NavBar;