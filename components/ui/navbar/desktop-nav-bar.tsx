"use-client";

import { usePathname, useRouter } from "next/navigation";
import { NavItem } from "./nav-bar";
import { useCallback, useMemo, useState } from "react";
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

  const navActive = useMemo(
    () =>
      fiveMinuteCache(cloudinaryImage("misc/nav-active", 13, undefined, true)),
    [],
  );
  const navNonActive = useMemo(
    () =>
      fiveMinuteCache(
        cloudinaryImage("misc/nav-nonactive", 13, undefined, true),
      ),
    [],
  );
  const navHover = useMemo(
    () =>
      fiveMinuteCache(cloudinaryImage("misc/nav-hover", 13, undefined, true)),
    [],
  );

  // the navCircle is different depending on whether the link is active
  const navCircle = useCallback(
    (isActive: boolean, isHover: boolean) => {
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

      if (isHover) {
        return (
          <Image
            src={navHover}
            alt="Dark Grey Circle"
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
    [navActive, navNonActive, navHover],
  );

  const renderNavBarItem = useCallback(
    (label: string, href: string) => {
      // the link is active if the path starts with our href
      const isActive =
        href !== "/" ? pathname.startsWith(href) : pathname === "/";
      const [isHovered, setIsHovered] = useState(false);
      return (
        <Link
          key={`navbar-link-${label.toLowerCase().replace(" ", "-")}`}
          textTransform="uppercase"
          color={isActive ? "#171717" : "#B8B8B8"}
          fontWeight={isActive ? 600 : 400}
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="8px"
          style={interStyles}
          _focus={{
            outline: "none",
          }}
          _hover={{
            color: isActive ? "#171717" : "#757575",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          asChild
        >
          <NextLink href={href} prefetch>
            {navCircle(isActive, isHovered)}
            {label}
          </NextLink>
        </Link>
      );
    },
    [pathname, navCircle],
  );

  const signature = useMemo(
    () => fiveMinuteCache(cloudinaryImage("homepage/jojo-banks-signature")),
    [],
  );

  return (
    <HStack width="100%" justifyContent="space-between" alignItems="flex-start">
      <Image
        src={signature}
        alt="JOJOBanks Signature"
        width="132px"
        height="64px"
        onClick={() => {
          router.push("/");
        }}
        _hover={{
          cursor: "pointer",
        }}
      />
      <HStack gap="40px" alignItems="flex-start">
        {navItems.map(({ label, href }) => renderNavBarItem(label, href))}
      </HStack>
    </HStack>
  );
};

export default DesktopNavBar;
