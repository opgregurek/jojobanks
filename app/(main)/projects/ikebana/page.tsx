import ProjectPageTemplate from "@/components/projects/project-page-template";
import type { ProjectPageData } from "@/components/projects/project-types";

const ikebanaProject: ProjectPageData = {
  slug: "ikebana",
  title: "IKEBANA",
  year: "2023",
  summary: [
    "Jojo began studying Moribana Ikebana under Ohara School in November 2023. A practice rooted in flow, form, and highlighting particular elements of the season's flowers. What began as a personal discipline has since evolved into an ongoing practice that can be shared in cultural spaces.",
    "She has created floral arrangements for 030, Hanabino jewelry, Namnam Space, and The Palette Club with Onari Studios.",
  ],
  rows: [
    {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-001.jpg",
          alt: "Moribana Ikebana arrangement",
        },
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-002.jpg",
          alt: "Moribana Ikebana arrangement",
        },
      ],
    },
    {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-fruit.jpg",
          alt: "Fruit arrangement for Onari",
        },
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-fruit-2.jpg",
          alt: "Fruit arrangement for Onari",
        },
      ],
    },
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
          src: "/images/ikebana/jojo-banks-030-tokyo-2.JPG",
          alt: "Ikebana for 030 cafe's Vogue magazine feature",
        },
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-030-tokyo.JPG",
          alt: "Ikebana for 030 cafe's Vogue magazine feature",
        },
      ],
    },
    {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-1.png",
          alt: "Ikebana studies",
        },
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-2.png",
          alt: "Ikebana studies",
        },
      ],
    },
    {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-3.png",
          alt: "Ikebana studies",
        },
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-4.png",
          alt: "Ikebana studies",
        },
      ],
    },
    {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-5.png",
          alt: "Ikebana studies",
        },
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-6.png",
          alt: "Ikebana studies",
        },
      ],
    },
    {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-7.png",
          alt: "Ikebana studies",
        },
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-8.png",
          alt: "Ikebana studies",
        },
      ],
    },
    {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-9.png",
          alt: "Ikebana studies",
        },
        {
          kind: "image",
          src: "/images/ikebana/jojo-banks-moribana-10.png",
          alt: "Ikebana studies",
        },
      ],
    },
  ],
};

export default function IkebanaProjectPage() {
  return <ProjectPageTemplate project={ikebanaProject} />;
}
