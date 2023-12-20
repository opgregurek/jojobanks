'use client'
import {Fragment} from "react";
import {SimpleGrid, SimpleGridProps, Text} from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";

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

export interface ProjectsNavigationProps extends SimpleGridProps {
    excludeLabels?: boolean;
}

export default function ProjectsNavigation(props: ProjectsNavigationProps) {
    const { excludeLabels, ...rest } = props;
    return (
        <SimpleGrid templateColumns={['auto', 'auto', 'auto 1fr']} gap={[0, 0, 16]} {...rest}>
            {ProjectItems.map((item, key) => {
                return (
                    <Fragment
                        key={[item.label, item.year, item.href]
                            .map(x => x.toLowerCase().replace(' ', '-'))
                            .join('-')
                        }
                    >
                        {excludeLabels ? null : (
                            <Text fontSize={"16px"} fontWeight="400" color="text.lightGrey">
                                {item.label}<br />{item.year}
                            </Text>
                        )}
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
    );
}