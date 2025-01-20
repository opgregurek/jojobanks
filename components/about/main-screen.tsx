"use client";
import { useContainerDimensions } from "@/hooks/use-container-dimensions";
import useScrollPosition from "@/hooks/use-scrollbar";
import { interStyles } from "@/utils/inter-font";
import { timesNewRomanStyles } from "@/utils/times-new-roman-font";
import { Box, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CloudinaryImage from "../ui/cloudinary-image";

export default function MainScreen() {
  const containerId = "movingContainer";
  const textContainerId = "textContainer";
  const { width } = useContainerDimensions(containerId);
  const { height } = useContainerDimensions(textContainerId);
  const [containerWidth, setContainerWidth] = useState<string>("100vh");
  const [textContainerHeight, setContainerHeight] = useState<string>("190px");

  useEffect(() => {
    const _width = width ?? 0;
    setContainerWidth(`${_width + 140}px`);
  }, [width]);

  useEffect(() => {
    const _height = height ?? 0;
    setContainerHeight(`${_height}px`);
  }, [height]);

  const scroll = useScrollPosition();
  return (
    <>
      <Box
        height={[
          `calc(${containerWidth} + 300px)`,
          `calc(${containerWidth} + 300px)`,
          `calc(${containerWidth} + 300px)`,
          `calc(${containerWidth} + 450px)`,
        ]}
        width="100vw"
      />
      <Grid
        height={[
          "calc(100vh - 100px)",
          "calc(100vh - 100px)",
          "calc(100vh - 100px)",
          "calc(100vh - 138px)",
        ]}
        position="fixed"
        left={`${-scroll}px`}
        templateRows={["1fr auto"]}
        id={containerId}
      >
        <VStack
          bg="#D80000"
          justifyContent="center"
          alignItems="flex-start"
          pl={["200px"]}
        >
          <CloudinaryImage
            cloudinaryImageName="about/the-good-fight"
            alt="The Good Fight"
            imageProps={{
              maxH: [`calc(100vh - 138px - ${textContainerHeight})`],
            }}
            boxProps={{
              maxH: [`calc(100vh - 138px - ${textContainerHeight})`],
            }}
            pixelHeight={495}
            pixelWidth={502}
          />
        </VStack>
        <HStack
          pl={["140px"]}
          pr={["200px", "200px", "200px", "400px"]}
          marginBottom={["100px", "100px", "100px", "0"]}
          id={textContainerId}
        >
          <Text
            fontWeight={700}
            fontSize={["110px", "110px", "110px", "190px"]}
            textTransform="uppercase"
            style={interStyles}
            whiteSpace="nowrap"
          >
            Nothing Without{" "}
          </Text>
          <Text
            fontSize={["110px", "110px", "110px", "190px"]}
            fontStyle="italic"
            textTransform="uppercase"
            style={timesNewRomanStyles}
            whiteSpace="nowrap"
          >
            {" "}
            Intention
          </Text>
        </HStack>
      </Grid>
    </>
  );
}
