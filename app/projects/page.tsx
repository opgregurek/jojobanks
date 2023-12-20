'use client'
import {Box} from "@chakra-ui/react";
import ProjectsNavigation from "@/components/projects/ProjectsNavigation";

interface ProjectItem {
    label: string;
    year: string;
    projectName: string;
    href: string;
}

export default function Projects() {
    return (
        <Box w="100%">
            <ProjectsNavigation />
        </Box>
    )
}
