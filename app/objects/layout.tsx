import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "OBJECTS",
  description: "JOJO banks",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Fragment>{children}</Fragment>;
}
