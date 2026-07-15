import Image from "next/image";
import type { ProjectMediaItem, ProjectRowVariant } from "@/components/projects/project-types";
import styles from "./project-media-row.module.css";

interface ProjectMediaRowProps {
  variant: ProjectRowVariant;
  items: ProjectMediaItem[];
  prioritizeImages?: boolean;
}

function getMediaSizes(variant: ProjectRowVariant) {
  switch (variant) {
    case "one":
      return "100vw";
    case "two":
      return "(max-width: 768px) 50vw, 50vw";
    case "four":
      return "(max-width: 768px) 50vw, 25vw";
    default:
      return "100vw";
  }
}

function ProjectMedia({
  item,
  variant,
  priority = false,
}: {
  item: ProjectMediaItem;
  variant: ProjectRowVariant;
  priority?: boolean;
}) {
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
        preload="none"
        aria-label={item.alt}
      />
    );
  }

  return (
    <Image
      className={mediaClassName}
      src={item.src}
      alt={item.alt}
      fill
      sizes={getMediaSizes(variant)}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
    />
  );
}

export default function ProjectMediaRow({
  variant,
  items,
  prioritizeImages = false,
}: ProjectMediaRowProps) {
  const maxItems = variant === "one" ? 1 : variant === "two" ? 2 : 4;
  const visibleItems = items.slice(0, maxItems);

  return (
    <section className={styles.row} data-variant={variant} data-cursor-surface="light" aria-label="Project media row">
      {visibleItems.map((item, index) => (
        <div key={`${item.src}-${index}`} className={styles.cell}>
          <ProjectMedia
            item={item}
            variant={variant}
            priority={prioritizeImages && item.kind === "image"}
          />
        </div>
      ))}
    </section>
  );
}
