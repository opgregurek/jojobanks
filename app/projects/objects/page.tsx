'use-client'

import { ProjectPage } from "@/components/ProjectPage"

export default function Objects(){    
    return (
        <ProjectPage
            headerImg="OBJECTS/objects-header"
            slideImgs={[
                "OBJECTS/objects-slide-1",
                "OBJECTS/objects-slide-2",
                "OBJECTS/objects-slide-3"
            ]}
            pageName="OBJECTS"
            projectLable="2023 — 3D art"
            projectContent="Everyday objects under a spotlight."
            projectContent2="During summer in 2022, I spent my break dissecting commonplace objects. I was entranced by the intricacies of shapes and capturing movement in furniture, kitchen tools and household objects. I constructed some pieces in Blender in an effort to bring these objects to life, providing them a spotlight. Amidst the mundane, there is beauty."
            projectContent3="In June, I was invited to showcase some work for the issue launch of 'ScratchThat' magazine in Brisbane. I truly value these community-led events that offer local artists space to share work and creative endeavours with a wider audience."
            projectContent4="To pair with this project, I led a workshop titled 'Model <object> with Jo' at my workplace. During the session, I taught the fundamentals of Blender, shared tips I gathered early in my blending journey and discussed the joy in experimentation. As a visual demonstration, I modelled a chanterelle mushroom and dissected the process with attendees."
            nextPageName="Evolution"
            nextPageHref="/projects/evolution"      
        />
    )
}

