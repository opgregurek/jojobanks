'use client'
import {Text, Box, SimpleGrid} from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";
import {Fragment} from "react";


interface ProjectItem {
    label: string;
    year: string;
    projectName: string;
    href: string;
}

const ProjectItems: Array<ProjectItem> = [
    {label: '3D modelling', year: '2023', projectName: 'OBJECTS', href: '/projects/objects'},
    {label: 'Print', year: '2022', projectName: 'Evolution', href: '/projects/evolution'},
    {label: 'Animation', year: '2021', projectName: '404 animation', href: '/projects/404-animation'},
    {label: 'UX/UI Design', year: '2021', projectName: 'Music controller', href: '/projects/music-controller'},
    {label: '3D modelling', year: '2021', projectName: 'Incrementum', href: '/projects/incrementum'},
    {label: 'UX/UI Design', year: '2021', projectName: 'Road maintenance', href: '/projects/road-maintenance'},
];


export default function Projects() {
    return (
        <Box w="100%">
            <SimpleGrid templateColumns={['auto', 'auto', 'auto 1fr']} gap={[0, 0, 16]}>
                {ProjectItems.map((item, key) => {
                    return (
                        <Fragment
                            key={[item.label, item.year, item.href]
                                .map(x => x.toLowerCase().replace(' ', '-'))
                                .join('-')
                            }
                        >
                            <Text fontSize={"16px"} fontWeight="400" color="text.lightGrey">
                                {item.label}<br />{item.year}
                            </Text>
                            <Link
                                href={item.href}
                                color="text.dark"
                                _hover={{
                                    color: 'text.forestGreen',
                                    textDecoration: 'underline'
                                }}
                                fontSize={['48px', '48px', '60px', '80px']}
                                lineHeight={['48px', '48px', 'unset', 'unset']}
                                fontWeight="500"
                                marginBottom={['16px', '16px', '0']}
                                width="fit-content"
                            >
                                {item.projectName}
                            </Link>
                        </Fragment>
                    )
                })}
            </SimpleGrid>
        </Box>
    )
}
