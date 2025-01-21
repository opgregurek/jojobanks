"use client";
import cloudinaryVideo from "@/utils/cloudinary-video";
import fiveMinuteCache from "@/utils/five-minute-cache";
import { ibmPlexMonoStyles } from "@/utils/ibm-plex-mono-font";
import { interStyles } from "@/utils/inter-font";
import { timesNewRomanStyles } from "@/utils/times-new-roman-font";
import { Box, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode, useCallback, useState } from "react";
import CloudinaryImage from "../ui/cloudinary-image";

export interface ProjectInterface {
  title: string;
  bio: string;
  landingImage: string;
  description: ReactNode;
  explanations?: ReactNode[];
  year: string;
  client?: string;
  team?: { name: string; link: string; role: string }[];
  type?: string;
  services?: ReactNode[];
  links?: { label: string; href: string }[];
  images?: { image: string; alt: string }[];
  videos?: string[];
  nextProject?: {
    name: string;
    href: string;
  };
}

export default function Project(props: ProjectInterface) {
  const {
    title,
    bio,
    landingImage,
    description,
    explanations,
    year,
    client,
    team,
    type,
    services,
    links,
    images,
    videos,
    nextProject,
  } = props;

  // the next page button
  const nextPageButton = useCallback(() => {
    const [hovered, setHovered] = useState(false);
    if (nextProject === undefined) {
      return <></>;
    }

    return (
      <Link
        href={nextProject.href}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        role="group"
        _active={{
          outline: "none",
        }}
        _hover={{
          textDecoration: "none",
        }}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        marginTop={10}
      >
        <Icon fontSize="18px" color="#A5A5A5">
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9999 7.41137C17.991 7.2838 17.9658 7.15791 17.9249 7.03674C17.9333 6.98714 17.9333 6.93649 17.9249 6.88689C17.8575 6.72125 17.761 6.569 17.6399 6.43733L11.6399 0.443258C11.5005 0.302804 11.3346 0.191323 11.1518 0.115246C10.969 0.0391684 10.773 0 10.5749 0C10.3769 0 10.1809 0.0391684 9.99809 0.115246C9.8153 0.191323 9.6494 0.302804 9.50995 0.443258C9.36936 0.582564 9.25777 0.748303 9.18162 0.930912C9.10547 1.11352 9.06626 1.30939 9.06626 1.50721C9.06626 1.70503 9.10547 1.90089 9.18162 2.0835C9.25777 2.26611 9.36936 2.43185 9.50995 2.57115L12.8849 6.00276L1.49999 6.00276C1.10217 6.00276 0.720642 6.16064 0.439339 6.44167C0.158035 6.72269 0 7.10385 0 7.50128C0 7.89871 0.158035 8.27986 0.439339 8.56089C0.720642 8.84192 1.10217 8.9998 1.49999 8.9998L12.8849 8.9998L9.43495 12.4314C9.2951 12.5711 9.18416 12.737 9.10847 12.9195C9.03278 13.1021 8.99382 13.2978 8.99382 13.4954C8.99382 13.6929 9.03278 13.8886 9.10847 14.0712C9.18416 14.2537 9.2951 14.4196 9.43495 14.5593C9.57481 14.699 9.74085 14.8098 9.92358 14.8855C10.1063 14.9611 10.3022 15 10.4999 15C10.6977 15 10.8936 14.9611 11.0763 14.8855C11.2591 14.8098 11.4251 14.699 11.5649 14.5593L17.5649 8.56523C17.6905 8.43709 17.7877 8.2839 17.8499 8.11567C17.9508 7.92673 18.0024 7.71542 17.9999 7.50128V7.41137Z"
              fill="#A5A5A5"
            />
          </svg>
        </Icon>
        <Text fontSize="24px" color="#A5A5A5" style={interStyles}>
          Next
        </Text>
        <Text
          fontSize={["40px", "40px", "40px", "80px"]}
          fontWeight="500"
          textDecoration={hovered ? "underline" : ""}
          color={hovered ? "#072165" : "#171717"}
          style={interStyles}
        >
          {nextProject.name}
        </Text>
      </Link>
    );
  }, [nextProject]);

  return (
    <VStack alignItems="flex-start">
      <VStack
        minHeight={["", "", "", "100vh"]}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <VStack
          minHeight="40vh"
          padding={["64px 40px"]}
          alignItems="flex-start"
          gap="48px"
        >
          <Text fontSize="16px" color="#A5A5A5" style={interStyles}>
            “{title}”
          </Text>
          <Text
            fontWeight={700}
            fontSize={["44px", "44px", "44px", "72px"]}
            style={interStyles}
            maxWidth="920px"
          >
            {bio}
          </Text>
        </VStack>
        <CloudinaryImage
          cloudinaryImageName={landingImage}
          alt={title + " landing"}
          imageProps={{
            width: "100vw",
          }}
          boxProps={{
            width: "100vw",
          }}
        />
      </VStack>
      <Box
        maxW="1440px"
        w="100vw"
        marginLeft="auto"
        marginRight="auto"
        py="60px"
        px={["24px", "24px", "24px", "120px"]}
      >
        <HStack
          justifyContent="space-between"
          borderTop="1px solid #B8B8B8"
          p={["40px 0 120px 0"]}
          alignItems="flex-start"
          gap={["48px", "48px", "48px", "0"]}
          flexDirection={["column", "column", "column", "row"]}
        >
          <VStack gap="24px" maxWidth="616px">
            <Text
              fontSize="16px"
              textTransform="uppercase"
              textAlign="justify"
              style={interStyles}
            >
              {description}
            </Text>
            {explanations && explanations.length > 0 && (
              <VStack gap="16px">
                {explanations.map((explanation, index) => (
                  <Text
                    key={`explanation-${index}`}
                    fontSize="16px"
                    textAlign="justify"
                    style={timesNewRomanStyles}
                  >
                    {explanation}
                  </Text>
                ))}
              </VStack>
            )}
          </VStack>
          <HStack
            width="min(450px, 90vw)"
            gap="32px"
            alignItems="flex-start"
            flexDirection={["column", "column", "column", "row"]}
          >
            <VStack gap="8px" alignItems="flex-start" width="100px">
              <Text
                textTransform="uppercase"
                fontWeight={500}
                fontSize="14px"
                color="#7F7F7F"
                style={interStyles}
              >
                Year
              </Text>
              <Text fontSize="16px" color="#171717" style={timesNewRomanStyles}>
                {year}
              </Text>
            </VStack>
            <VStack gap="32px" alignItems="flex-start">
              {client && (
                <VStack gap="8px" alignItems="flex-start">
                  <Text
                    textTransform="uppercase"
                    fontWeight={500}
                    fontSize="14px"
                    color="#7F7F7F"
                    style={interStyles}
                  >
                    Client
                  </Text>
                  <Text
                    fontSize="16px"
                    color="#171717"
                    style={timesNewRomanStyles}
                  >
                    {client}
                  </Text>
                </VStack>
              )}
              {team && team.length > 0 && (
                <VStack gap="8px" alignItems="flex-start">
                  <Text
                    textTransform="uppercase"
                    fontWeight={500}
                    fontSize="14px"
                    color="#7F7F7F"
                    style={interStyles}
                  >
                    Team
                  </Text>
                  {team.map(({ name, link, role }) => (
                    <HStack key={name} gap="6px">
                      <Link
                        href={link}
                        fontSize="16px"
                        color="#171717"
                        style={timesNewRomanStyles}
                        _hover={{
                          textDecor: "underline",
                          color: "#072165",
                        }}
                      >
                        {name}
                      </Link>
                      <Text
                        textTransform="uppercase"
                        fontSize="14px"
                        color="#7F7F7F"
                        style={interStyles}
                      >
                        {role}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              )}
              {type && (
                <VStack gap="8px" alignItems="flex-start">
                  <Text
                    textTransform="uppercase"
                    fontWeight={500}
                    fontSize="14px"
                    color="#7F7F7F"
                    style={interStyles}
                  >
                    Type
                  </Text>
                  <Text
                    fontSize="16px"
                    color="#171717"
                    style={timesNewRomanStyles}
                  >
                    {type}
                  </Text>
                </VStack>
              )}
              {services && services.length > 0 && (
                <VStack gap="8px" alignItems="flex-start">
                  <Text
                    textTransform="uppercase"
                    fontWeight={500}
                    fontSize="14px"
                    color="#7F7F7F"
                    style={interStyles}
                  >
                    Services
                  </Text>
                  {services.map((service, index) => (
                    <Text
                      key={`service-${index}`}
                      fontSize="16px"
                      color="#171717"
                      style={timesNewRomanStyles}
                    >
                      {service}
                    </Text>
                  ))}
                </VStack>
              )}
              {links && links.length > 0 && (
                <VStack gap="8px" alignItems="flex-start">
                  <Text
                    textTransform="uppercase"
                    fontWeight={500}
                    fontSize="14px"
                    color="#7F7F7F"
                    style={interStyles}
                  >
                    Links
                  </Text>
                  {links.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      textTransform="uppercase"
                      fontSize="13px"
                      color="#171717"
                      p="3px 6px"
                      border="1px solid #171717"
                      style={ibmPlexMonoStyles}
                      cursor="pointer"
                    >
                      {label}
                    </Link>
                  ))}
                </VStack>
              )}
            </VStack>
          </HStack>
        </HStack>
      </Box>
      {images && images.length > 0 && (
        <VStack maxW="100vw" gap={0} px={["24px", "24px", "24px", "120px"]}>
          {images.map(({ image, alt }) => (
            <CloudinaryImage
              key={image}
              cloudinaryImageName={image}
              alt={alt}
              boxProps={{ width: "100vw" }}
              imageProps={{ width: "100vw" }}
            />
          ))}
        </VStack>
      )}
      {videos &&
        videos.length > 0 &&
        videos.map((video) => (
          <Box w="100vw" key={video}>
            <video
              style={{ objectFit: "cover", width: "100vw" }}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            >
              <source
                src={fiveMinuteCache(cloudinaryVideo(video))}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Box>
        ))}
      <VStack
        width="100vw"
        gap={["72px"]}
        p={["72px 24px", "72px 24px", "72px 24px", "88px 120px"]}
        alignItems="flex-start"
      >
        {nextPageButton()}
        <Link
          textTransform="uppercase"
          fontSize="16px"
          color="#171717"
          p="6px 12px"
          border="1px solid #171717"
          style={ibmPlexMonoStyles}
          _hover={{
            color: "#072165",
            borderColor: "#072165",
          }}
          asChild
        >
          <NextLink href="/">Back to Main</NextLink>
        </Link>
      </VStack>
    </VStack>
  );
}
