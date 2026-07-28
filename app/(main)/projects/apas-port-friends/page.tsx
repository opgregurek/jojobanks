import ProjectPageTemplate from "@/components/projects/project-page-template";
import type { ProjectPageData } from "@/components/projects/project-types";

const apasPortFriendsProject: ProjectPageData = {
  slug: "apas-port-friends",
  title: "APAS PORT & FRIENDS",
  year: "2024",
  summary: [
    "Apas Port is shaping a vision for Web3 in Japan that places artists and communities first. Rather than treating NFTs as speculative assets, they position it as a platform for cultural engagement, education, and meaningful connection.",
    "Through collaborations with artists such as Kaniza and Mago Nagasaka, each collection became an opportunity for audiences to learn about their stories, processes, and demonstrate how digital ownership can support creative livelihoods.",
  ],
  rows: [
    {
      variant: "two",
      items: [
        {
          kind: "video",
          src: "/images/apas-port/jojo-banks-apas-port-harvest-hall-reel.mp4",
          poster: "/images/general/jojo-banks-placeholder.jpg",
          alt: "Harvest Hall showreel",
        },
        {
          kind: "image",
          src: "/images/apas-port/jojo-banks-apas-port-harvest-hall-2.jpg",
          alt: "Harvest Hall and flowers",
        },
      ],
    },
    {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/apas-port/jojo-banks-apas-port-harvest-hall-4.jpg",
          alt: "Harvest Hall continous learning value",
        },
        {
          kind: "image",
          src: "/images/apas-port/jojo-banks-apas-port-harvest-hall-1.jpg",
          alt: "Harvest Hall logo",
        },
      ],
    },
    {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/apas-port/jojo-banks-apas-port-harvest-hall-3.jpg",
          alt: "Harvest flow and Kaniza",
        },
        {
          kind: "video",
          src: "/images/apas-port/jojo-banks-apas-port-harvest-hall-mago-nagasaka.mp4",
          poster: "/images/general/jojo-banks-placeholder.jpg",
          alt: "Harvest Hall and Mago Nagasaka",
        },
      ],
    },
        {
      variant: "two",
      items: [
        {
          kind: "image",
          src: "/images/apas-port/jojo-banks-apas-port-harvest-flow-1.jpg",
          alt: "Harvest Flow tuktuk and Plume campaign",
        },
        {
          kind: "image",
          src: "/images/apas-port/jojo-banks-apas-port-harvest-flow-2.jpg",
          alt: "Harvest Flow and Plume NFT",
        },
      ],
    },
    {
      variant: "one",
      items: [
        {
          kind: "image",
          src: "/images/apas-port/jojo-banks-apas-port.jpg",
          alt: "Apas Port team 2024",
        },
      ],
    },
  ],
};

export default function ApasPortFriendsProjectPage() {
  return <ProjectPageTemplate project={apasPortFriendsProject} />;
}
