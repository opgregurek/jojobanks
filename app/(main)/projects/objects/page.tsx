import ProjectPageTemplate from "@/components/projects/project-page-template";
import type { ProjectPageData } from "@/components/projects/project-types";

const objectsProject: ProjectPageData = {
  slug: "objects",
  title: "OBJECTS",
  year: "2022",
  summary: [
    "COVID. A period of recalibration. During this time, Josephine began experimenting with 3D modelling as a new medium to expand her creative practice. This culminated in her first collection, Objects – a series of simple, sometimes mundane items found around the house. It celebrates the beauty and significance of the ordinary. In 2023, Objects was exhibited as part of the ScratchThat Magazine launch, hosted by a collective celebrating emerging local artists.",
    "All images ©Jojo Banks. Reproduction, scraping, or use for AI training, model development, or generative outputs is not permitted.",
  ],
  rows: [
    {
      variant: "four",
      items: [
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-1.jpg",
          alt: "Objects project still image",
        },
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-2.jpg",
          alt: "Objects project still image",
        },
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-3.jpg",
          alt: "Objects project still image",
        },
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-4.jpg",
          alt: "Objects project still image",
        },
      ],
    },
    {
      variant: "four",
      items: [
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-5.jpg",
          alt: "Objects project still image",
        },
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-6.jpg",
          alt: "Objects project still image",
        },
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-7.jpg",
          alt: "Objects project still image",
        },
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-8.jpg",
          alt: "Objects project still image",
        },
      ],
    },
    {
      variant: "four",
      items: [
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-9.jpg",
          alt: "Objects project still image",
        },
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-10.jpg",
          alt: "Objects project still image",
        },
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-11.jpg",
          alt: "Objects project still image",
        },
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-12.jpg",
          alt: "Objects project still image",
        },
      ],
    },
    {
      variant: "four",
      items: [
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-13.jpg",
          alt: "Objects project still image",
        },
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-14.jpg",
          alt: "Objects project still image",
        },
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-15.jpg",
          alt: "Objects project still image",
        },
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-16.jpg",
          alt: "Objects project still image",
        },
      ],
    },
    {
      variant: "four",
      items: [
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-17.jpg",
          alt: "Objects project still image",
        },
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-18.jpg",
          alt: "Objects project still image",
        },
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-19.jpg",
          alt: "Objects project still image",
        },
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects-3d-20.jpg",
          alt: "Objects project still image",
        },
      ],
    },
  ],
};

export default function ObjectsProjectPage() {
  return <ProjectPageTemplate project={objectsProject} />;
}
