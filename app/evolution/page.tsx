"use client";

import Project from "@/components/projects/project";

export default function Evolution() {
  return (
    <Project
      title="Music Controller"
      bio="A book catalouging the work of designer and friend, Jordie Peters."
      landingImage="projectPages/JordBook/evo-header"
      description="I moved to Brisbane in Autumn 2020 and worked at a software development company called WorkingMouse. It was there I met Jordie Peters; a talented, self-taught and deeply intentional designer. Immediately we found our ethos and core values were succinctly aligned and went on to craft work we would be proud of, together and as individuals. When Jordie decided it was time for her next adventure, we knew her time and growth at the company had to be catalogued. In just under a week, 'Evolution' was born!"
      explanations={[
        "'Evolution' tells the story of the beginning, middle and future. It encapsulates some of Jordie's work, lessons and fond memories. Our memories and teachings are the legacy we leave behind. They are the fruits of our labour, the wisdom we impart to others and the lasting impact we have on the world. It was an honour to work on this.",
      ]}
      year="2022"
      team={[
        {
          name: "Shannon England",
          role: "Collaborator",
          link: "https://www.linkedin.com/in/shannon-lutze/",
        },
        {
          name: "Jordie Peters",
          role: "Muse",
          link: "https://www.jordiepeters.com/",
        },
      ]}
      type="Print"
      services={["Book design"]}
      nextProject={{
        name: "Music Controller",
        href: "/music-controller",
      }}
      images={[
        { alt: "slide 1", image: "projectPages/JordBook/evo-slide-1" },
        { alt: "slide 2", image: "projectPages/JordBook/evo-slide-2" },
        { alt: "slide 3", image: "projectPages/JordBook/evo-slide-3" },
      ]}
    />
  );
}
