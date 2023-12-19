'use client'

import { HStack, Text, Box } from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";


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
  // switch to flex become <flex flexDirection=[colum, colum, row, row]
    return (

        <Box w = "100%">
            <>
                {ProjectItems.map((item, key) => {
                    return (
                        <HStack marginBottom="1%" flex={1} key={key} alignItems="center">
                            <Text flex={1} fontSize={["10px", "10px", "10px", "16px"]} fontWeight="400" color="text.lightGrey" >{ item.label } <br></br>{ item.year }</Text>
                            <Link
                                href={item.href}
                                flex={6}
                                color="text.dark"
                                _hover={{
                                    color: 'text.forestGreen',
                                    textDecoration: 'underline'
                                }}
                                fontSize={["30px", "30px", "30px", "80px"]}
                                fontWeight="500"
                            >
                                { item.projectName }
                            </Link>
                        </HStack>
                    )
                })}
            </>
        </Box>
    )
}
