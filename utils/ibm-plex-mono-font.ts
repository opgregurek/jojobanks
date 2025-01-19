import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: "normal",
});

export const ibmPlexMonoStyles = {
  ...ibmPlexMono.style,
  lineHeight: "100%",
  letterSpacing: "-4%",
};
