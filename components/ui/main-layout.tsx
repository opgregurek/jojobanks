import NavBar from "@/components/ui/navbar/nav-bar";
import styles from "./main-layout.module.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
