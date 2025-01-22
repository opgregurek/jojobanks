"use client";

import { Box, HStack } from "@chakra-ui/react";
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
  return (
    <HStack
      alignItems="flex-start"
      justifyContent="flex-end"
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      padding="24px"
      background="transparent"
      zIndex="10"
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
