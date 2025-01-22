import cloudinaryVideo from "@/utils/cloudinary-video";
import fiveMinuteCache from "@/utils/five-minute-cache";
import { Box } from "@chakra-ui/react";

export default function VideoScreen() {
  return (
    <Box w="100vw" height="550px">
      <video
        style={{ objectFit: "cover", width: "100vw", height: "550px" }}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      >
        <source
          src={fiveMinuteCache(cloudinaryVideo("homepage/heron"))}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
}
