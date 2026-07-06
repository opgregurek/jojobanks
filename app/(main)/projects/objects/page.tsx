import ProjectPageTemplate from "@/components/projects/project-page-template";
import type { ProjectPageData } from "@/components/projects/project-types";

const objectsProject: ProjectPageData = {
  slug: "objects",
  title: "OBJECTS",
  year: "2024",
  summary: [
    "A collection of 3D explorations and object studies that investigate texture, proportion, and material behavior across digital scenes.",
    "These pieces are used as world-building elements for branding, motion tests, and visual identity directions.",
  ],
  rows: [
    {
      variant: "one",
      items: [
        {
          kind: "image",
          src: "/images/objects/jojo-banks-objects.jpg",
          alt: "Objects project still image",
        },
      ],
    },
  ],
};

export default function ObjectsProjectPage() {
  return <ProjectPageTemplate project={objectsProject} />;
}
