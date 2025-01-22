"use client";
import FlashlightScreen from "@/components/homepage/flashlight-screen";
import { MainScreen } from "@/components/homepage/main-screen";
import { ProjectsScreen } from "@/components/homepage/projects-screen";
import { useFooterState } from "@/stores/footer-state";
import { VStack } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Home() {
  const setEnableFooter = useFooterState((state) => state.setEnableFooter);

  useEffect(() => {
    setEnableFooter(true);
  }, []);

  return (
    <VStack>
      <MainScreen />
      <ProjectsScreen />
      <FlashlightScreen />
    </VStack>
  );
}
