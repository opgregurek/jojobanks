import Link from "next/link";
import styles from "@/app/(main)/projects/projects-template.module.css";
import { getNextProjectSlug, getProjectHref } from "@/app/(main)/projects/project-routes";
import type { ProjectPageData } from "./project-types";
import ProjectMediaRow from "./project-media-row";

interface ProjectPageTemplateProps {
  project: ProjectPageData;
}

export default function ProjectPageTemplate({ project }: ProjectPageTemplateProps) {
  const nextProjectSlug = getNextProjectSlug(project.slug);
  const nextProjectHref = getProjectHref(nextProjectSlug);

  return (
    <div className={styles.page}>
      <div className={styles.background} aria-hidden="true" data-cursor-surface="dark">
        <img src="/images/general/dark-background.png" alt="" />
      </div>

      <div className={styles.content}>
        <header className={styles.header}>
          <Link href="/" className={`${styles.navLink} ${styles.headerLeft}`}>
            <span className={styles.desktopBack}>BACK TO MAIN</span>
            <span className={styles.mobileBack}>BACK</span>
          </Link>

          <p className={`${styles.title} ${styles.headerCenter}`}>({project.title})</p>

          <Link href={nextProjectHref} className={`${styles.navLink} ${styles.headerRight}`}>
            NEXT WORK
          </Link>
        </header>

        <section className={styles.details}>
          <p className={styles.projectMeta}>
            {project.title} - {project.year}
          </p>

          <div className={styles.description}>
            {project.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {project.rightsNotice ? <p className={styles.rightsNotice}>{project.rightsNotice}</p> : null}
        </section>

        <section className={styles.rows} aria-label="Project media gallery">
          {project.rows.map((row, index) => (
            <ProjectMediaRow key={`${row.variant}-${index}`} variant={row.variant} items={row.items} />
          ))}
        </section>

        <footer className={styles.footer}>
          <Link href="/" className={`${styles.navLink} ${styles.footerLeft}`}>
            <span className={styles.desktopBack}>BACK TO MAIN</span>
            <span className={styles.mobileBack}>BACK</span>
          </Link>

          <p className={`${styles.title} ${styles.footerCenter}`}>({project.title})</p>

          <Link href={nextProjectHref} className={`${styles.navLink} ${styles.footerRight}`}>
            NEXT WORK
          </Link>
        </footer>
      </div>
    </div>
  );
}
