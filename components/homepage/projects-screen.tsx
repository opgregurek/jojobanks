import { interStyles } from "@/utils/inter-font";
import { timesNewRomanStyles } from "@/utils/times-new-roman-font";
import { Box, Flex, Span, Text, VStack } from "@chakra-ui/react";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { ReactNode, useEffect } from "react";
import CloudinaryImage from "../ui/cloudinary-image";

export interface ProjectInterface {
  title: string;
  category: string;
  comingSoon: boolean;
  image: string;
  imageComponent?: ReactNode;
  link: string;
}

export const projects: ProjectInterface[] = [
  {
    title: "objecx",
    category: "Branding & design system",
    comingSoon: true,
    image: "projectPages/Objecx/thumbnail",
    imageComponent: <Box w="187px" h="215px" bg="#787878" />,
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
    title: "Music Controller",
    category: "Mobile app",
    comingSoon: false,
    image: "projectPages/MusicController/thumbnail",
    link: "music-controller",
  },
  {
    title: "404 for WM",
    category: "Animation",
    comingSoon: false,
    image: "projectPages/404/thumbnail",
    link: "404",
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
];

export function ProjectsScreen() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      AutoScroll({
        playOnInit: false,
        startDelay: 1500,
        speed: 0.8,
      }),
    ],
  );

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    console.log("hello 00", autoScroll);
    if (!autoScroll) return;

    autoScroll.play();
  }, [emblaApi]);

  return (
    <>
      <Box
        height={["350px", "350px", "350px", "500px"]}
        padding={["12px", "12px", "12px", "56px 12px"]}
        maxWidth="min(95vw, 1440px)"
        marginLeft="auto"
        marginRight={["", "", "", "auto"]}
        width="100%"
      >
        <Box overflow="hidden" ref={emblaRef}>
          <Flex touchAction="pan-y pinch-zoom" marginLeft="-2px">
            {projects.map((project, index) => {
              const obj = project.comingSoon
                ? {}
                : {
                    as: Link,
                    href: project.link,
                  };
              const imageComponent = project.imageComponent ?? (
                <CloudinaryImage
                  cloudinaryImageName={project.image}
                  alt={project.title}
                  pixelWidth={374}
                  pixelHeight={430}
                  boxProps={{
                    width: 187,
                    height: 215,
                    transition: "width, height 0.3s ease-out",
                  }}
                />
              );
              const overlay = project.comingSoon ? (
                <>
                  <CloudinaryImage
                    pixelHeight={215}
                    pixelWidth={187}
                    cloudinaryImageName="misc/noise"
                    alt="noise overlay"
                    boxProps={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      opacity: "0.4",
                    }}
                  />
                  <CloudinaryImage
                    pixelHeight={215}
                    pixelWidth={187}
                    cloudinaryImageName="misc/lock-overlay"
                    alt="lock overlay"
                    boxProps={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                    }}
                  />
                </>
              ) : null;
              return (
                <Box
                  transform="translate3d(0, 0, 0)"
                  flex="0 0 187px"
                  paddingLeft="2px"
                  key={index}
                  onMouseEnter={() => {
                    const autoScroll = emblaApi?.plugins()?.autoScroll;
                    if (!autoScroll) return;
                    autoScroll.stop();
                  }}
                  onMouseLeave={() => {
                    const autoScroll = emblaApi?.plugins()?.autoScroll;
                    if (!autoScroll) return;
                    autoScroll.play();
                  }}
                >
                  <VStack
                    gap="12px"
                    alignItems="flex-start"
                    userSelect="none"
                    role="group"
                    {...obj}
                  >
                    {overlay}
                    {imageComponent}
                    <VStack width="104px" gap="2px" alignItems="flex-start">
                      <Text
                        fontWeight="600"
                        fontSize="14px"
                        textTransform="uppercase"
                        style={interStyles}
                      >
                        {project.title}
                      </Text>
                      <Text
                        fontSize="13px"
                        color="#A5A5A5"
                        style={timesNewRomanStyles}
                      >
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
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Box>
    </>
  );
}
