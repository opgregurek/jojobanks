import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "404 for WM",
  description: "JOJO banks",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Fragment>{children}</Fragment>;
}
