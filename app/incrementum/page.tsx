"use client";

import Project from "@/components/projects/project";

export default function Incrementum() {
  return (
    <Project
      title="Incrementum"
      bio="Education is one of the greatest catalysts for change."
      landingImage="projectPages/Incrementum/inc-header"
      description="For this project I learnt the foundations of Blender through Youtube. It was equal parts enjoyable and stressful. Most nights it sent my laptop into overdrive but I'm happy to have produced these pieces. They materialise a lot of my thoughts during the learning process. You can't make bricks without clay."
      explanations={[
        "There is a plethora of wonderful resources out there and with todays technology you don't need to venture far. Youtube is god-tier and I have great respect for anyone who has contributed to this community.",
        "Notable mentions to some Youtubers who paved the way for my Blender journey: @blenderguru | @blenderstudy | @cggeek",
      ]}
      year="2021"
      type="Artwork"
      services={["3D modeling"]}
      nextProject={{
        name: "Road maintenance",
        href: "/road-maintenance",
      }}
      images={[
        { alt: "slide 1", image: "projectPages/Incrementum/inc-slide-1" },
        { alt: "slide 2", image: "projectPages/Incrementum/inc-slide-2" },
        { alt: "slide 3", image: "projectPages/Incrementum/inc-slide-3" },
      ]}
    />
  );
}
