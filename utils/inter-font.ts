import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const interStyles = {
  ...inter.style,
  lineHeight: "100%",
  letterSpacing: "-4%",
};
