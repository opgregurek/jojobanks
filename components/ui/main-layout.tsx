"use client";

import NavBar from "@/components/ui/navbar/nav-bar";
import { usePathname } from "next/navigation";
import styles from "./main-layout.module.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNavBar = pathname.startsWith("/projects");

  return (
    <div className={styles.layout}>
      {!hideNavBar && <NavBar />}
      <main className={styles.main}>{children}</main>
    </div>
  );
}
