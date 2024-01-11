'use client';
import { Project } from '@/components/projects/Project';

export default function Evolution() {
	return (
		<Project
			headerImg="JordBook/evo-header"
			slideImages={['JordBook/evo-slide-1', 'JordBook/evo-slide-2', 'JordBook/evo-slide-3']}
			projectLabel="2022 — Print"
			projectName="Evolution"
			projectFeatureText="A book catalouging the work of designer and friend, Jordie Peters."
			projectDescription="I moved to Brisbane in Autumn 2020 and worked at a software development company called WorkingMouse. It was there I met Jordie Peters; a talented, self-taught and deeply intentional designer. Immediately we found our ethos and core values were succinctly aligned and went on to craft work we would be proud of, together and as individuals. When Jordie decided it was time for her next adventure, we knew her time and growth at the company had to be catalogued. In just under a week, 'Evolution' was born!"
			preSlideContent="'Evolution' tells the story of the beginning, middle and future. It encapsulates some of Jordie's work, lessons and fond memories.
            Our memories and teachings are the legacy we leave behind. They are the fruits of our labour, the wisdom we impart to others and the lasting impact we have on the world. It was an honour to work on this (':"
			nextPage={{
				name: '404 animation',
				href: '/projects/404-animation',
			}}
		/>
	);
}
