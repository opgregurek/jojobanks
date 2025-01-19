"use client";

import useScrollPosition from "@/hooks/use-scrollbar";
import { useNavBarState } from "@/stores/nav-bar-state";
import { Box, HStack } from "@chakra-ui/react";
import { useEffect } from "react";
import DesktopNavBar from "./desktop-nav-bar";
import MobileNavBar from "./mobile-nav-bar";

export interface NavItem {
  label: string;
  href: string;
}

export const NavItems: Array<NavItem> = [
  { label: "Discover", href: "/" },
  { label: "About", href: "/about" },
];

const NavBar = () => {
  const scroll = useScrollPosition();

  const navBarBackground = useNavBarState((state) => state.navBarBackground);
  const navBarShadow = useNavBarState((state) => state.navBarShadow);
  const setNavBarShadow = useNavBarState((state) => state.setNavBarShadow);

  useEffect(() => {
    setNavBarShadow(scroll > 50);
  }, [scroll, setNavBarShadow]);

  return (
    <HStack
      alignItems="flex-start"
      justifyContent="flex-end"
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      padding="24px"
      background={navBarBackground}
      zIndex="10"
      boxShadow={
        navBarShadow ? "0px 4px 20px 0px rgba(0, 0, 0, 0.05);" : undefined
      }
    >
      <Box width="100%" display={["block", "block", "block", "none"]}>
        <MobileNavBar navItems={NavItems} />
      </Box>
      <Box width="100%" display={["none", "none", "none", "block"]}>
        <DesktopNavBar navItems={NavItems} />
      </Box>
    </HStack>
  );
};

export default NavBar;
