import { Box, HStack, Span, Text, VStack } from "@chakra-ui/react";
import CloudinaryImage from "../ui/cloudinary-image";
import { tinosStyles } from "@/utils/tinos-font";
import { interStyles } from "@/utils/inter-font";
import Link from "next/link";
import { useCallback, useState } from "react";
import "./projects-screen.css";

export interface ProjectInterface {
  title: string;
  category: string;
  comingSoon: boolean;
  image: string;
  link: string;
}

export const projects: ProjectInterface[] = [
  {
    title: "objecx",
    category: "Branding & design system",
    comingSoon: true,
    image: "projectPages/Objecx/thumbnail",
    link: "objecx",
  },
  {
    title: "Harvest Hall",
    category: "Creative direction",
    comingSoon: true,
    image: "projectPages/HarvestHall/thumbnail",
    link: "harvest-hall",
  },
  {
    title: "The future is in the past: match boxes",
    category: "Magazine",
    comingSoon: true,
    image: "projectPages/MatchBoxes/thumbnail",
    link: "match-boxes",
  },
  {
    title: "Mycelium bowl",
    category: "Materials",
    comingSoon: true,
    image: "projectPages/MyceliumBowl/thumbnail",
    link: "mycelium-bowl",
  },
  {
    title: "Objects",
    category: "3D Modelling",
    comingSoon: false,
    image: "projectPages/OBJECTS/thumbnail",
    link: "objects",
  },
  {
    title: "Evolution",
    category: "Print",
    comingSoon: false,
    image: "projectPages/JordBook/thumbnail",
    link: "evolution",
  },
  {
    title: "Incrementum",
    category: "3D Modelling",
    comingSoon: false,
    image: "projectPages/Incrementum/thumbnail",
    link: "incrementum",
  },
  {
    title: "Road Maintenance",
    category: "Web app",
    comingSoon: false,
    image: "projectPages/RPQ/thumbnail",
    link: "road-maintenance",
  },
  {
    title: "Music Curation",
    category: "Mobile app",
    comingSoon: false,
    image: "projectPages/MustardMusic/thumbnail",
    link: "music-curation",
  },
  {
    title: "404 for WM",
    category: "Animation",
    comingSoon: false,
    image: "projectPages/404/thumbnail",
    link: "404",
  },
];

export function ProjectsScreen() {
  const renderProject = useCallback((project: ProjectInterface) => {
    const [hovering, setHovering] = useState(false);

    const obj = project.comingSoon
      ? {}
      : {
          as: Link,
          href: project.link,
        };

    return (
      <VStack
        gap="12px"
        alignItems="flex-start"
        key={project.link}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        {...obj}
      >
        <CloudinaryImage
          cloudinaryImageName={project.image}
          alt={project.title}
          pixelWidth={hovering ? 210 : 187}
          pixelHeight={hovering ? 250 : 215}
          boxProps={{
            width: hovering ? 210 : 187,
            height: hovering ? 250 : 215,
            transition: "width, height 0.3s ease-out",
          }}
        />
        <VStack width="104px" gap="2px" alignItems="flex-start">
          <Text
            fontWeight="600"
            fontSize="14px"
            textTransform="uppercase"
            style={interStyles}
          >
            {project.title}
          </Text>
          <Text fontSize="13px" color="#A5A5A5" style={tinosStyles}>
            {project.category}
            {project.comingSoon && (
              <>
                <br />
                <Span textTransform="uppercase">Coming Soon</Span>
              </>
            )}
          </Text>
        </VStack>
      </VStack>
    );
  }, []);
  return (
    <Box
      overflow="hidden"
      position="relative"
      width="100%"
      maxWidth="1440px"
      height={["350px", "350px", "350px", "500px"]}
      padding={["12px", "12px", "12px", "56px 12px"]}
    >
      <HStack
        className="carousel-track"
        position="absolute"
        right={0}
        justifyContent="center"
        alignItems="flex-start"
        gap="8px"
        width="200%"
        height="100%"
      >
        {projects.map((project) => renderProject(project))}
        {projects.map((project) => renderProject(project))}
      </HStack>
    </Box>
  );
}
