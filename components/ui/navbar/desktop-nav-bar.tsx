"use-client";

import { usePathname, useRouter } from "next/navigation";
import { NavItem } from "./nav-bar";
import { useNavBarState } from "@/stores/nav-bar-state";
import { useCallback, useMemo } from "react";
import fiveMinuteCache from "@/utils/five-minute-cache";
import cloudinaryImage from "@/utils/cloudinary-image";
import { HStack, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { interStyles } from "@/utils/inter-font";

export interface DesktopNavBarProps {
  navItems: Array<NavItem>;
}

const DesktopNavBar = (props: DesktopNavBarProps) => {
  const { navItems } = props;
  const router = useRouter();
  const pathname = usePathname();

  const navBarColor = useNavBarState((state) => state.navBarColor);
  const navBarActiveIcon = useNavBarState((state) => state.navBarActiveIcon);

  const navActive = useMemo(
    () =>
      fiveMinuteCache(cloudinaryImage(navBarActiveIcon, 13, undefined, true)),
    [navBarActiveIcon],
  );
  const navNonActive = useMemo(
    () =>
      fiveMinuteCache(
        cloudinaryImage("misc/nav-nonactive", 13, undefined, true),
      ),
    [],
  );

  // the navCircle is different depending on whether the link is active
  const navCircle = useCallback(
    (isActive: boolean) => {
      if (isActive) {
        return (
          <Image
            src={navActive}
            alt="Black Circle"
            width="13px"
            height="13px"
          />
        );
      }

      return (
        <Image
          src={navNonActive}
          alt="Grey Circle"
          width="13px"
          height="13px"
        />
      );
    },
    [navActive, navNonActive],
  );

  const renderNavBarItem = useCallback(
    (label: string, href: string) => {
      // the link is active if the path starts with our href
      const isActive =
        href !== "/" ? pathname.startsWith(href) : pathname === "/";
      return (
        <Link
          key={`navbar-link-${label.toLowerCase().replace(" ", "-")}`}
          textTransform="uppercase"
          color={isActive ? navBarColor : "#B8B8B8"}
          fontWeight={isActive ? 600 : 400}
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="8px"
          style={interStyles}
          _focus={{
            outline: "none",
          }}
          asChild
        >
          <NextLink href={href} prefetch>
            {navCircle(isActive)}
            {label}
          </NextLink>
        </Link>
      );
    },
    [pathname, navCircle, navBarColor],
  );

  const signature = useMemo(
    () => fiveMinuteCache(cloudinaryImage("homepage/jojo-banks-signature")),
    [],
  );

  return (
    <HStack width="100%" justifyContent="space-between">
      <Image
        src={signature}
        alt="JOJOBanks Signature"
        onClick={() => {
          router.push("/");
        }}
        _hover={{
          cursor: "pointer",
        }}
      />
      <HStack gap="40px">
        {navItems.map(({ label, href }) => renderNavBarItem(label, href))}
      </HStack>
    </HStack>
  );
};

export default DesktopNavBar;
