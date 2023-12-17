'use-client'

import { ProjectPage } from "@/components/ProjectPage"

export default function Incrementum(){
    return (
        <ProjectPage
            headerImg="Incrementum/inc-header"
            slideImgs={[
                "Incrementum/inc-slide-1",
                "Incrementum/inc-slide-2",
                "Incrementum/inc-slide-3"
            ]}
            pageName="Incrementum"
            projectLable="2021 -- 3d modelling"
            projectContent="Education is one of the greatest catalysts for change."
            projectContent2="For this project I watched a lot of Youtube to learn Blender. It was really enjoyable and stressful. Most nights it sent my laptop into overdrive but I'm happy to have produced these pieces. They materialise a lot of my thoughts during the learning process. You can't make bricks without clay." 
            projectContent3="There is a plethora of wonderful resources out there and with todays technology you don't need to venture far. Youtube is god-tier for me and I have great respect for those who have contributed. Notable mentions to the Youtubers who paved the way for my Blender journey: @blenderguru | @blenderstudy | @cggeek"       
        />
    )
}