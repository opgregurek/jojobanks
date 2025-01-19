import { interStyles } from "@/utils/inter-font";
import { Span, Text, VStack } from "@chakra-ui/react";

export function MainScreen() {
  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      height={[
        "calc(100vh - 100px - 160px)",
        "calc(100vh - 100px - 160px)",
        "calc(100vh - 100px - 160px)",
        "calc(100vh - 138px - 200px)",
      ]}
      paddingX="32px"
      gap="12px"
    >
      <Text
        textAlign="center"
        textTransform="uppercase"
        fontWeight={700}
        fontSize="24px"
        maxWidth="367px"
        style={interStyles}
      >
        Curation & Design is a path to self-discovery
      </Text>
      <Text
        textAlign="center"
        textTransform="uppercase"
        color="#A5A5A5"
        fontSize="14px"
        maxWidth="367px"
        style={interStyles}
      >
        This space showcaseS the evolving body of work of{" "}
        <Span fontWeight={600}>JOJO BANKs</Span>, spanning across several years.
        Explore THESE COLLECTIONS for insights into her creative journey.
      </Text>
    </VStack>
  );
}
