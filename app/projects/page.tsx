'use client'

import { HStack, Text, Box, Link} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";

interface ProjectItem {
    label: string;
    year: string;
    projectName: string;
    href: string;
};

const ProjectItems: Array<ProjectItem> = [
    {label: "3D modelling", year: "2023", projectName: 'OBJECTS', href: '/projects/objects'},
    {label: "Print", year: "2022", projectName: 'Evolution', href: '/projects/evolution'},
    {label: "Animation", year: "2021", projectName: '404 animation', href: '/projects/404-animation'},
    {label: "UX/UI Design", year: "2021", projectName: 'Music controller', href: "/projects/music-controller"},
    {label: "3D modelling", year: "2021", projectName: 'Incrementum', href: "/projects/incrementum"},
    {label: "UX/UI Design", year: "2021", projectName: 'Road maintenance', href: '/projects/road-maintenance'},
];

export default function Projects() {
    const [isHovered, setIsHovered] = useState<number|null>(null);

    const color = useCallback((key: number) => {
        if (key === isHovered) {
            return "text.forestGreen";
        } else {
            return "text.dark";
        }
    }, [isHovered]);

  const handleMouseEnter = (key: number) => {
    setIsHovered(key);
  }

  const handleMouseLeave = () => {
    setIsHovered(null);
  }

    return (
        <Box w = "100%" marginBottom="25%">
            <>
                {ProjectItems.map((item, key) => {
                    return ( 
                        <HStack marginBottom="1%" flex={1} key={key}>
                            <Text flex={1} fontSize="16px" fontWeight="400" color="text.lightGrey" >{ item.label } <br></br>{ item.year }</Text>
                            <Link
                                href={item.href}
                                flex={6}
                                onMouseEnter={() => handleMouseEnter(key)}
                                onMouseLeave={() => handleMouseLeave()}
                            >
                                <Text
                                    flex={6}
                                    fontSize="80px"
                                    fontWeight="500"
                                    textDecoration={key === isHovered ? "underline": ""}
                                    color={color(key)}
                                >
                                    { item.projectName }
                                </Text>
                            </Link>
                        </HStack>
                    )
                })}
            </>
        </Box>
    )
}
