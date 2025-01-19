"use client";

import {
  Flex,
  HStack,
  Image,
  Link,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useMemo, useRef } from "react";
import fiveMinuteCache from "@/utils/five-minute-cache";
import cloudinaryImage from "@/utils/cloudinary-image";
import { useRouter } from "next/navigation";
import { Button } from "../button";
import CloudinaryImage from "../cloudinary-image";
import { NavItem } from "./nav-bar";
import NextLink from "next/link";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
} from "../drawer";
import { interStyles } from "@/utils/inter-font";

export interface MobileNavBarProps {
  navItems: Array<NavItem>;
}

const MobileNavBar = (props: MobileNavBarProps) => {
  const { navItems } = props;
  const router = useRouter();
  const { open, onOpen, onClose, onToggle } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  const signature = useMemo(
    () => fiveMinuteCache(cloudinaryImage("homepage/jojo-banks-signature")),
    [],
  );

  return (
    <>
      <HStack justifyContent="space-between" width="100%">
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
        <Button
          ref={btnRef}
          onClick={onOpen}
          bg="none"
          _hover={{
            bg: "none",
          }}
        >
          <CloudinaryImage
            cloudinaryImageName="misc/hamburger-menu"
            alt="Hamburger Menu"
            pixelWidth={37}
            pixelHeight={28}
            ignoreImagePreloading
          />
        </Button>
      </HStack>
      <DrawerRoot open={open} onOpenChange={onToggle} size="full">
        <DrawerBackdrop />
        <DrawerContent>
          <DrawerCloseTrigger color="#F0EEED" margin={6} />
          <DrawerBody padding={6} bg="#262626">
            <Flex w="100%" h="100%" justifyContent="center">
              <VStack
                gap={10}
                marginTop="auto"
                marginBottom="100px"
                justifyContent="flex-end"
              >
                <Text
                  color="#A5A5A5"
                  textAlign="center"
                  fontSize="16px"
                  fontStyle="italic"
                  fontWeight={400}
                  style={interStyles}
                >
                  Where do you want to go?
                </Text>
                {navItems.map((item) => {
                  return (
                    <Link
                      key={`navbar-link-${item.label.toLowerCase().replace(" ", "-")}`}
                      color="#F0EEED"
                      fontWeight={400}
                      fontSize="40px"
                      style={interStyles}
                      onClick={onClose}
                      asChild
                    >
                      <NextLink href={item.href}>{item.label}</NextLink>
                    </Link>
                  );
                })}
              </VStack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
    </>
  );
};

export default MobileNavBar;
