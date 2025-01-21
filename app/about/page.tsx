"use client";

import ContentScreen from "@/components/about/content-screen";
import MainScreen from "@/components/about/main-screen";
import VideoScreen from "@/components/about/video-screen";
import { useFooterState } from "@/stores/footer-state";
import { VStack } from "@chakra-ui/react";
import { useEffect } from "react";

export default function About() {
  const setEnableFooter = useFooterState((state) => state.setEnableFooter);

  useEffect(() => {
    setEnableFooter(false);
  }, []);

  return (
    <VStack>
      {/* main screen */}
      <MainScreen />
      {/* content screen */}
      <ContentScreen />
      {/* video screen */}
      <VideoScreen />
    </VStack>
  );
}
