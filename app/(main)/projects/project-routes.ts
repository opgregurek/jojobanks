export const PROJECT_SLUGS = ["ikebana", "objects", "apas-port-friends"] as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[number];

export const FIRST_PROJECT_SLUG: ProjectSlug = PROJECT_SLUGS[0];

export function getProjectHref(slug: string): string {
  return `/projects/${slug}`;
}

export function getNextProjectSlug(currentSlug: string): ProjectSlug {
  const currentIndex = PROJECT_SLUGS.findIndex((slug) => slug === currentSlug);

  if (currentIndex === -1) {
    return FIRST_PROJECT_SLUG;
  }

  const nextIndex = (currentIndex + 1) % PROJECT_SLUGS.length;
  return PROJECT_SLUGS[nextIndex];
}
