'use client'
import {Text, Box, SimpleGrid} from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";
import {Fragment} from "react";


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
            <SimpleGrid templateColumns="auto 1fr" gap={[4, 4, 8, 16]}>
                {ProjectItems.map((item, key) => {
                    return (
                        <Fragment
                            key={[item.label, item.year, item.href]
                                .map(x => x.toLowerCase().replace(' ', '-'))
                                .join('-')
                            }
                        >
                            <Text fontSize={["10px", "10px", "16px", "16px"]} fontWeight="400" color="text.lightGrey">{ item.label } <br></br>{ item.year }</Text>
                            <Link
                                href={item.href}
                                color="text.dark"
                                _hover={{
                                    color: 'text.forestGreen',
                                    textDecoration: 'underline'
                                }}
                                fontSize={["30px", "30px", "60px", "80px"]}
                                fontWeight="500"
                                width="max-content"
                            >
                                { item.projectName }
                            </Link>
                        </Fragment>
                    )
                })}
            </SimpleGrid>
        </Box>
    )
}
