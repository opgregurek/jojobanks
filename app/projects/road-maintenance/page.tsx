'use client'

import { ProjectPage } from "@/components/ProjectPage"

export default function RoadMaintenance(){
    return (
        <ProjectPage
            headerImg="RPQ/RPQ-header"
            slideImgs={[
                "RPQ/RPQ-slide-1",
                "RPQ/RPQ-slide-2",
                "RPQ/RPQ-slide-3"
            ]}
            pageName="Road maintenance"
            projectLable="2021 — UX/UI Design"
            projectContent="A web application where crew members schedule and manage road work."
            projectContent2="A client wanted to improve their program for scheduling road maintenance. There was a running joke that any time some one created, updated or deleted anything, they would go for a 'coffee run' as it would take that long to process.
            The Scheduling crew manage road jobs daily - organising the time, resources, equipment and assigning teams. The crew are often updating and re-updating the schedule, due to the weather or resource changes, so they require quick access and oversight. Time is of the essence." 
            projectContent3="Users need access to their information in the quickest timeframe possible. I aimed for hierarchy in the pages to improve users' cognitive ability for focus; placing attention on what they need most."       
        />
    )
}