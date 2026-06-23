"use client";

import Link from "next/link";
import styles from "./nav-bar.module.css";

const NAV_ITEMS = [
  { label: "BACK TO MAIN", href: "/" },
];

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.dots}>
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
      <ul className={styles.links}>
        {NAV_ITEMS.map(({ label, href }) => (
          <li key={href}>
            <Link href={href} className={styles.link}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
