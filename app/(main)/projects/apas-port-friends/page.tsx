import ProjectPageTemplate from "@/components/projects/project-page-template";
import type { ProjectPageData } from "@/components/projects/project-types";

const apasPortFriendsProject: ProjectPageData = {
  slug: "apas-port-friends",
  title: "APAS PORT & FRIENDS",
  year: "2023",
  summary: [
    "Campaign and event visuals developed with Apas Port and collaborators across static compositions, motion studies, and showreel outputs.",
    "The work spans Harvest Hall communication, flow diagrams, and moving-image pieces designed for digital-first presentation.",
  ],
  rows: [
    {
      variant: "two",
      items: [
        {
          kind: "video",
          src: "/images/apas-port/jojo-banks-apas-port-harvest-hall-reel.mp4",
          poster: "/images/general/jojo-banks-placeholder.png",
          alt: "Harvest Hall showreel",
        },
        {
          kind: "image",
          src: "/images/apas-port/jojo-banks-apas-port-harvest-hall-2.png",
          alt: "Harvest Hall and flowers",
        },
      ],
    },
    {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/apas-port/jojo-banks-apas-port-harvest-hall-4.png",
          alt: "Harvest Hall continous learning value",
        },
        {
          kind: "image",
          src: "/images/apas-port/jojo-banks-apas-port-harvest-hall-1.png",
          alt: "Harvest Hall logo",
        },
      ],
    },
    {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/apas-port/jojo-banks-apas-port-harvest-hall-3.png",
          alt: "Harvest flow and Kaniza",
        },
        {
          kind: "video",
          src: "/images/apas-port/jojo-banks-apas-port-harvest-hall-mago-nagasaka.mp4",
          poster: "/images/general/jojo-banks-placeholder.png",
          alt: "Harvest Hall and Mago Nagasaka",
        },
      ],
    },
        {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/apas-port/jojo-banks-apas-port-harvest-flow-2.png",
          alt: "Harvest Flow and Plume NFT",
        },
        {
          kind: "image",
          src: "/images/apas-port/jojo-banks-apas-port-harvest-flow-1.png",
          alt: "Harvest Flow tuktuk and Plume campaign",
        },
      ],
    },
    {
      variant: "one",
      items: [
        {
          kind: "image",
          src: "/images/apas-port/jojo-banks-apas-port.png",
          alt: "Apas Port team 2024",
        },
      ],
    },
  ],
};

export default function ApasPortFriendsProjectPage() {
  return <ProjectPageTemplate project={apasPortFriendsProject} />;
}
