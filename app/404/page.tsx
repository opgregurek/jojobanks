"use client";

import Project from "@/components/projects/project";

export default function Evolution() {
  return (
    <Project
      title="404"
      bio="Getting lost on the web isn't always bad."
      landingImage="projectPages/404/404-header"
      description="The WorkingMouse website underwent an official rebrand in 2020. As most rebrands go, it invites the designer to play and explore the application. I had the pleasure of crafting the 404 page - intending for an undesirable experience to hopefully spark joy to those who come across it. You can check it out Live."
      year="2021"
      type="Animation"
      services={["Design Animation"]}
      client="WorkingMouse"
      nextProject={{
        name: "Incrementum",
        href: "/incrementum",
      }}
      videos={["projectPages/404/404-slide-1"]}
    />
  );
}
