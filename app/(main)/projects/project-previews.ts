import type { HomePageProjectPreview } from "@/components/projects/project-types";

export const HOME_PAGE_PROJECT_PREVIEWS: HomePageProjectPreview[] = [
  {
    media: {
      kind: "image",
      src: "/images/general/jojo-banks-pic.jpg",
      alt: "Headshot of Jojo Banks",
    },
  },
  {
    media: {
      kind: "video",
      src: "/images/ikebana/jojo-banks-moribana.mp4",
      poster: "/images/general/jojo-banks-placeholder.jpg",
      alt: "Ikebana studies by Jojo Banks",
    },
    projectSlug: "ikebana",
  },
  {
    media: {
      kind: "image",
      src: "/images/general/jojo-banks-objects.jpg",
      alt: "3D modelling by Jojo Banks",
    },
    projectSlug: "objects",
  },
  {
    media: {
      kind: "video",
      src: "/images/apas-port/jojo-banks-apas-port-harvest-hall-reel.mp4",
      poster: "/images/general/jojo-banks-placeholder.jpg",
      alt: "Harvest Hall showreel",
    },
    projectSlug: "apas-port-friends",
  },
];
