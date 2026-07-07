export type ProjectMediaKind = "image" | "video";

export interface ProjectMediaItem {
  kind: ProjectMediaKind;
  src: string;
  alt: string;
  poster?: string;
  fit?: "cover" | "contain";
}

export type ProjectRowVariant = "one" | "two" | "four";

export interface ProjectMediaRow {
  variant: ProjectRowVariant;
  items: ProjectMediaItem[];
}

export interface ProjectPageData {
  slug: string;
  title: string;
  year: string;
  summary: string[];
  rightsNotice?: string;
  rows: ProjectMediaRow[];
}

export interface HomePageProjectPreview {
  media: ProjectMediaItem;
  projectSlug?: string;
}
