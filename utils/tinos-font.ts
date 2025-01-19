import { Tinos } from "next/font/google";

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const tinosStyles = {
  ...tinos.style,
  lineHeight: "100%",
  letterSpacing: "-2%",
};
