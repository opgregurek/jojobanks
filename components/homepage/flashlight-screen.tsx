"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import useMousePosition from "@/hooks/use-mouse-position";
import useDebouncedEffect from "use-debounced-effect";
import { Box, Text, useBreakpoint, VStack } from "@chakra-ui/react";
import { interStyles } from "@/utils/inter-font";
import { timesNewRomanStyles } from "@/utils/times-new-roman-font";

export default function FlashlightScreen() {
  // is the text covered by blue
  const [hidden, setHidden] = useState(true);
  // current position of the flashlight
  const [flashlightPosition, setFlashlightPosition] = useState<{
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  }>({
    top: "200px",
    left: "50px",
  });

  // listen on mouse position, breakpoint and scroll
  const mousePosition = useMousePosition();
  const breakpoint = useBreakpoint();

  const containerRef = useRef<HTMLDivElement>(null);
  const hiddenTextRef = useRef<HTMLParagraphElement>(null);

  // when mouse has moved, or breakpoint has changed, calculate our flashlight position
  useDebouncedEffect(
    () => {
      const boundingX = containerRef.current?.getBoundingClientRect().x ?? 0;
      const boundingY = containerRef.current?.getBoundingClientRect().y ?? 0;
      const boundingBottom =
        containerRef.current?.getBoundingClientRect().bottom ?? 0;
      const boundingRight =
        containerRef.current?.getBoundingClientRect().right ?? 0;
      const top = Math.max(mousePosition.y - boundingY - 150, 0);
      const left = Math.max(mousePosition.x - boundingX - 150, 0);

      if (mousePosition.y < boundingY || mousePosition.y > boundingBottom) {
        return;
      }

      setFlashlightPosition({
        bottom: mousePosition.y + 150 >= boundingBottom ? "0" : undefined,
        top: mousePosition.y + 150 >= boundingBottom ? undefined : `${top}px`,
        right: mousePosition.x + 150 >= boundingRight ? "0" : undefined,
        left: mousePosition.x + 150 >= boundingRight ? undefined : `${left}px`,
      });
    },
    5,
    [mousePosition, containerRef, breakpoint],
  );

  // we try to position the flashlight in the top left at the start of the text when page is first rendered
  useEffect(() => {
    const top =
      containerRef.current?.getBoundingClientRect().y === undefined ||
      hiddenTextRef.current?.getBoundingClientRect().y === undefined
        ? 200
        : hiddenTextRef.current.getBoundingClientRect().y -
          containerRef.current.getBoundingClientRect().y -
          150;
    const left = hiddenTextRef.current?.getBoundingClientRect().x ?? 50;

    setFlashlightPosition({
      top: `${top}px`,
      left: `${left}px`,
    });
  }, [hiddenTextRef, containerRef]);

  // the content for what's above the square, changes when content is hidden
  const squareContent = useMemo(() => {
    if (hidden) {
      return (
        <VStack height="90px" justifyContent="flex-end" gap="12px">
          <Text
            textTransform="uppercase"
            fontSize="14px"
            style={interStyles}
            color="#A5A5A5"
            textAlign="center"
            width="250px"
          >
            Hover over the text to reveal or click the square
          </Text>
          <Box
            border="1px dashed #A5A5A5"
            width="24px"
            height="24px"
            as="button"
            zIndex={20}
            onClick={() => {
              setHidden(false);
            }}
          />
        </VStack>
      );
    }

    return (
      <VStack height="90px" justifyContent="flex-end" gap="12px">
        <Text
          textTransform="uppercase"
          fontSize="14px"
          style={interStyles}
          color="#171717"
          textAlign="center"
          width="250px"
        >
          Click the square to hide the text
        </Text>
        <Box
          border="1px solid #D80000"
          width="24px"
          height="24px"
          bg="#D80000"
          as="button"
          zIndex={20}
          onClick={() => {
            setHidden(true);
          }}
        />
      </VStack>
    );
  }, [hidden]);

  return (
    <>
      <VStack
        alignItems="center"
        justifyContent="space-between"
        overflow="hidden"
        width="100vw"
        height="100vh"
        position="relative"
        ref={containerRef}
      >
        <Box
          opacity={hidden ? 1 : 0}
          data-state={hidden ? "open" : "closed"}
          _open={{
            animationName: "fade-in, scale-in",
            animationDuration: "400ms",
          }}
          _closed={{
            animationName: "fade-out, scale-out",
            animationDuration: "400ms",
          }}
          // transition="opacity 1 ease-out"
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            boxShadow: "0 0 0 10000px #262626",
            ...flashlightPosition,
          }}
        />
        <VStack position="absolute" top={6}>
          {squareContent}
        </VStack>
        <VStack
          alignItems="flex-start"
          marginTop="25vh"
          marginBottom="auto"
          maxWidth="1440px"
          px="60px"
          ref={hiddenTextRef}
        >
          <Text color="#7F7F7F" fontSize="20px" style={interStyles}>
            LAO TZU says
          </Text>
          <Text
            fontSize={["40px", "40px", "40px", "81px"]}
            style={timesNewRomanStyles}
          >
            To clarify muddy waters,
            <br />
            you must hold yourself still
            <br />
            and wait until the water is.
            <br /> <br />
            Designing calls on that same patience.
          </Text>
        </VStack>
      </VStack>
    </>
  );
}
