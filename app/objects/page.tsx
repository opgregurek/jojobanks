"use client";

import Project from "@/components/projects/project";
import { useNavBarState, defaultNavBarState } from "@/stores/nav-bar-state";
import { useEffect } from "react";

export default function Evolution() {
  const setNavBarState = useNavBarState((state) => state.setNavBarState);

  useEffect(() => {
    setNavBarState(defaultNavBarState);
  }, [setNavBarState]);
  return (
    <Project
      title="Objects"
      bio="Everyday objects under a spotlight."
      landingImage="projectPages/OBJECTS/objects-header"
      description="During summer in 2022, I spent my break dissecting commonplace objects. I was intrigued by the subtle intricacies of shapes and capturing movement in furniture, kitchen tools and staple household items. I modeled some of these in Blender in an effort to provide them a spotlight. Amidst the mundane, there is beauty."
      explanations={[
        "In June 2022, I was invited to showcase some of this work for the issue launch of 'ScratchThat' magazine in Brisbane. I value these community-led events that offer local artists space to share work and creative endeavours with a wider audience.",
        "To pair with this project, I led a workshop titled 'Model <object> with Jo' at my workplace. During the session, I taught the fundamentals of Blender, shared tips I gathered early in my blending journey and discussed the joy in experimentation. As a visual demonstration, I modelled a chanterelle mushroom and dissected the process with attendees.",
      ]}
      year="2023"
      type="Artwork"
      services={["3D modeling"]}
      links={[
        {
          href: "https://www.instagram.com/jojobanks.jpg",
          label: "INSTAGRAM @JOJOBANKS.JPG",
        },
      ]}
      nextProject={{
        name: "Evolution",
        href: "/evolution",
      }}
      images={[
        { alt: "slide 1", image: "projectPages/OBJECTS/objects-slide-1" },
        { alt: "slide 2", image: "projectPages/OBJECTS/objects-slide-2" },
        { alt: "slide 3", image: "projectPages/OBJECTS/objects-slide-3" },
      ]}
    />
  );
}
