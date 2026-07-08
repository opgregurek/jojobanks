import type { ProjectMediaItem, ProjectRowVariant } from "@/components/projects/project-types";
import styles from "./project-media-row.module.css";

interface ProjectMediaRowProps {
  variant: ProjectRowVariant;
  items: ProjectMediaItem[];
}

function ProjectMedia({ item }: { item: ProjectMediaItem }) {
  const mediaClassName = item.fit === "contain" ? `${styles.media} ${styles.mediaContain}` : styles.media;

  if (item.kind === "video") {
    return (
      <video
        className={mediaClassName}
        src={item.src}
        poster={item.poster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={item.alt}
      />
    );
  }

  return <img className={mediaClassName} src={item.src} alt={item.alt} loading="lazy" decoding="async" />;
}

export default function ProjectMediaRow({ variant, items }: ProjectMediaRowProps) {
  const maxItems = variant === "one" ? 1 : variant === "two" ? 2 : 4;
  const visibleItems = items.slice(0, maxItems);

  return (
    <section className={styles.row} data-variant={variant} data-cursor-surface="light" aria-label="Project media row">
      {visibleItems.map((item, index) => (
        <div key={`${item.src}-${index}`} className={styles.cell}>
          <ProjectMedia item={item} />
        </div>
      ))}
    </section>
  );
}
