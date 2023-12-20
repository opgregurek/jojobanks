'use client'
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay, Flex, Text,
    useDisclosure, VStack
} from "@chakra-ui/react";
import {useRef} from "react";
import CloudinaryImage from "@/components/CloudinaryImage";
import {Link} from "@chakra-ui/next-js";
import {NavItem} from "@/components/NavBar";

export interface MobileNavBarProps {
    navItems: Array<NavItem>;
}

const MobileNavBar = (props: MobileNavBarProps) => {
    const { navItems } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            <Button
                ref={btnRef}
                onClick={onOpen}
                bg="none"
                _hover={{
                    bg: 'none',
                }}
            >
                <CloudinaryImage
                    cloudinaryImageName="misc/hamburger-menu"
                    alt="Hamburger Menu"
                    pixelWidth={37}
                    pixelHeight={28}
                />
            </Button>
            <Drawer isOpen={isOpen} onClose={onClose} size="full">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton color="text.white" width="37px" height="37px" fontSize="37px" margin={6}/>
                    <DrawerBody padding={6} bg="background.dark">
                        <Flex w="100%" h="100%" justifyContent="center">
                            <VStack gap={10} marginTop="auto" marginBottom="100px" justifyContent="flex-end">
                                <Text color="text.lightGrey" textAlign="center" fontStyle="italic" fontWeight={400}>
                                    Where do you want to go?
                                </Text>
                                {navItems.map(item => {
                                    return (
                                        <Link
                                            key={`navbar-link-${item.label.toLowerCase().replace(' ', '-')}`}
                                            color="text.white"
                                            fontWeight={400}
                                            href={item.href}
                                            fontSize="40px"
                                            onClick={onClose}
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                })}
                            </VStack>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileNavBar;