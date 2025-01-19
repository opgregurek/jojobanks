"use client";
import { useContainerDimensions } from "@/hooks/use-container-dimensions";
import useScrollPosition from "@/hooks/use-scrollbar";
import { interStyles } from "@/utils/inter-font";
import { tinosStyles } from "@/utils/tinos-font";
import { Box, Grid, HStack, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export default function MainScreen() {
  const containerId = "movingContainer";
  const containerRef = useRef<HTMLDivElement>(null);
  const { width } = useContainerDimensions(containerId);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(
    undefined,
  );

  useEffect(() => {
    const _width = width ?? 0;
    setContainerWidth(_width + 140);
  }, [width]);

  const scroll = useScrollPosition();
  return (
    <>
      <Box height={containerWidth ?? "100vh"} width="100vw" />
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
        // marginLeft={`${-scroll}px`}
        id={containerId}
        ref={containerRef}
      >
        <Box></Box>
        <HStack px={["140px"]}>
          <Text
            fontWeight={700}
            fontSize="176px"
            textTransform="uppercase"
            style={interStyles}
            whiteSpace="nowrap"
          >
            Nothing Without{" "}
          </Text>
          <Text
            fontSize="190px"
            fontStyle="italic"
            textTransform="uppercase"
            style={tinosStyles}
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
