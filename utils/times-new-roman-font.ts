import localFont from "next/font/local";

const timesNewRoman = localFont({
  src: [
    {
      path: "./timesNewRoman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./timesNewRomanItalic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

export const timesNewRomanStyles = {
  ...timesNewRoman.style,
  lineHeight: "100%",
  letterSpacing: "-2%",
};
