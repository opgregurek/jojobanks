"use client";

import Project from "@/components/projects/project";

export default function MusicController() {
  return (
    <Project
      title="Music Controller"
      bio="A way for staff/patrons to curate the musical atmosphere at a venue."
      landingImage="projectPages/MusicController/MM-header"
      description="The client specialises in creating playlists in hospitality, such as restaurants, hotels, cafes and bars. They asked for a way that staff and management can control the music that they provide to them."
      explanations={[
        "This mobile application offers users the controls to wield the vibe and environment for their patrons. The presence of music in a space that commands it, has the power to elevate the atmosphere.",
        <>
          With this application, venue staff can view the songs that are playing
          and use the ‘remote’ to control how it is played. The inclusion of a
          like and dislike feature enables an open channel and feedback loop to
          playlist makers. Playlists can also be viewed and scheduled; giving
          venue staff oversight on whats available and control over what vibe is
          appropriate.
        </>,
      ]}
      year="2021"
      client="Disclosed"
      team={[
        {
          name: "Mikaela Robertson",
          role: "PM",
          link: "https://www.linkedin.com/in/mikaela-robertson-166992103?originalSubdomain=au",
        },
        {
          name: "Tim Mahon",
          role: "Developer",
          link: "https://www.linkedin.com/in/timothy-mahon-96551bba?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=au",
        },
      ]}
      type="Mobile Application"
      services={["WorkShops", "UX/UI Design", "Development Support"]}
      nextProject={{
        name: "404 for WM",
        href: "/404",
      }}
      images={[
        { alt: "slide 1", image: "projectPages/MusicController/MM-slide-1" },
        { alt: "slide 2", image: "projectPages/MusicController/MM-slide-2" },
        { alt: "slide 3", image: "projectPages/MusicController/MM-slide-3" },
      ]}
    />
  );
}
