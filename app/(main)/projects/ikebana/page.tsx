import ProjectPageTemplate from "@/components/projects/project-page-template";
import type { ProjectPageData } from "@/components/projects/project-types";

const ikebanaProject: ProjectPageData = {
  slug: "ikebana",
  title: "IKEBANA",
  year: "2023",
  summary: [
    "Jojo began studying Moribana Ikebana under Ohara School in November 2023. This is a practice rooted in flow, structure, and finding the best elements of the floral subject to highlight. What began as a personal discipline has since evolved into an ongoing practice that has been celebrated in cultural spaces.",
    "She had collaborated with 030, Hanabino jewelry, Namnam Space, and Onari Studios, to invite the principles of traditional Japanese ikebana into contemporary and creative spaces.",
  ],
  rows: [
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
