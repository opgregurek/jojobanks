import ProjectPageTemplate from "@/components/projects/project-page-template";
import type { ProjectPageData } from "@/components/projects/project-types";

const ikebanaProject: ProjectPageData = {
  slug: "ikebana",
  title: "IKEBANA",
  year: "2024",
  summary: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ],
  rows: [
    {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-namnam-space.png",
          alt: "Ikebana for an event at Namnam, in collaboration with Substore",
        },
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-030-tokyo.png",
          alt: "Ikebana for 030 cafe's Vogue magazine feature",
        },
      ],
    },
    {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-030-tokyo-2.png",
          alt: "Ikebana for 030 cafe's one year anniversary",
        },
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-hanabino.png",
          alt: "Ikebana for Hanabino pop-up in Tokyo",
        },
      ],
    },
    {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-1.png",
          alt: "Ikebana studies 1",
        },
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-2.png",
          alt: "Ikebana studies 2",
        },
      ],
    },
    {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-3.png",
          alt: "Ikebana studies 3",
        },
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-4.png",
          alt: "Ikebana studies 4",
        },
      ],
    },
    {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-5.png",
          alt: "Ikebana studies 5",
        },
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-6.png",
          alt: "Ikebana studies 6",
        },
      ],
    },
    {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-7.png",
          alt: "Ikebana studies 7",
        },
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-8.png",
          alt: "Ikebana studies 8",
        },
      ],
    },
  ],
};

export default function IkebanaProjectPage() {
  return <ProjectPageTemplate project={ikebanaProject} />;
}
