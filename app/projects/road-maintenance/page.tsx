'use client';
import { Project } from '@/components/projects/Project';

export default function RoadMaintenance() {
	return (
		<Project
			headerImg="RPQ/RPQ-header"
			slideImages={['RPQ/RPQ-slide-1', 'RPQ/RPQ-slide-2', 'RPQ/RPQ-slide-3']}
			projectLabel="2021 — UX/UI Design"
			projectName="Road maintenance"
			projectFeatureText="A web application where crew members schedule and manage road work."
			projectDescription="A client wanted to improve their program for scheduling road maintenance. There was a running joke that any time some one created, updated or deleted anything, they would go for a 'coffee run' as it would take that long to process.
            The Scheduling crew manage road jobs daily - organising the time, resources, equipment and assigning teams. The crew are often updating and re-updating the schedule, due to the weather or resource changes, so they require quick access and oversight. Time is of the essence."
			preSlideContent="Users need access to their information in the quickest timeframe possible. I aimed for hierarchy in the pages to improve users' cognitive ability for focus; placing attention on what they need most."
		/>
	);
}
