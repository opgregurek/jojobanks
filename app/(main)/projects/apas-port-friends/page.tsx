import ProjectPageTemplate from "@/components/projects/project-page-template";
import type { ProjectPageData } from "@/components/projects/project-types";

const apasPortFriendsProject: ProjectPageData = {
  slug: "apas-port-friends",
  title: "APAS PORT & FRIENDS",
  year: "2024",
  summary: [
    "Apas Port is shaping a vision for Web3 in Japan that places artists and communities first. Rather than treating NFTs as speculative assets, they position it as a platform for cultural engagement, education, and meaningful connection.",
    "Through collaborations with artists such as Kaniza and Mago Nagasaka, each collection became an opportunity to introduce audiences to distinct artistic practices, explore the stories and traditions behind the work, and demonstrate how digital ownership can support creative livelihoods.",
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
          fit: "contain",
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
          src: "/images/apas-port/jojo-banks-apas-port-harvest-flow-1.png",
          alt: "Harvest Flow tuktuk and Plume campaign",
        },
        {
          kind: "image",
          src: "/images/apas-port/jojo-banks-apas-port-harvest-flow-2.png",
          alt: "Harvest Flow and Plume NFT",
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
