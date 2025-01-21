"use client";

import Project from "@/components/projects/project";

export default function Evolution() {
  return (
    <Project
      title="Road maintenance"
      bio="A web application where crew members schedule and manage road work."
      landingImage="projectPages/RPQ/RPQ-header"
      description="A client wanted to improve their program for scheduling road maintenance. There was a running joke that any time some one created, updated or deleted anything, they would go for a 'coffee run' as it would take that long to process."
      explanations={[
        "The Scheduling crew manage road jobs daily - organising the time, resources, equipment and assigning teams. The crew are often updating and re-updating the schedule, due to the weather or resource changes, so they require quick access and oversight. Time is of the essence.",
        "Users need access to their information in the quickest timeframe possible. I aimed for hierarchy in the pages to improve users' cognitive ability for focus; placing attention on what they need most.",
      ]}
      year="2021"
      type="Web application"
      services={["Consulting", "UX/UI Design"]}
      client="Disclosed"
      images={[
        { alt: "slide 1", image: "projectPages/RPQ/RPQ-slide-1" },
        { alt: "slide 2", image: "projectPages/RPQ/RPQ-slide-2" },
        { alt: "slide 3", image: "projectPages/RPQ/RPQ-slide-3" },
      ]}
    />
  );
}
