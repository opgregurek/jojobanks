'use client'

import { Project } from "@/components/projects/Project"

export default function MusicController(){
    return (
        <Project
            headerImg="MustardMusic/MM-header"
            slideImages={[
                "MustardMusic/MM-slide-1",
                "MustardMusic/MM-slide-2",
                "MustardMusic/MM-slide-3"
            ]}
            projectLabel="2021 — UX/UI Design"
            projectName="Music controller"
            projectFeatureText="A mobile application that allows people to control the music at a venue."
            projectDescription="For venues, such as restaurents, hotels, cafes and bars, this mobile application enables management over the music that is provided; giving them the controls to wield the vibe and environment for their patrons. The presence of music in a space that commands it has the power to elevate the atmosphere."
            preSlideContent="With this application, venue staff can view the songs that are playing and use the remote to control how they are played. The inclusion of a like and dislike feature enabled an open channel and feedback loop to playlist makers. Playlists can also be viewed and scheduled; giving venue staff oversight on whats available and control over what vibe is appropriate."
            // projectContent4="With this application, venue staff can view the songs that are playing and use the remote to control how they are played. The inclusion of a like and dislike feature enabled an open channel and feedback loop to playlist makers. Playlists can also be viewed and scheduled; giving venue staff oversight on whats available and control over what vibe is appropriate."
            nextPage={{
                name: 'Incrementum',
                href: '/projects/incrementum',
            }}
        />
    )
}

