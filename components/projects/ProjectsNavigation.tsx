'use client';
import { Fragment } from 'react';
import { SimpleGrid, SimpleGridProps, Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

interface ProjectItem {
	label: string;
	year: string;
	projectName: string;
	href: string;
	isFeatured?: boolean;
}

const ProjectItems: Array<ProjectItem> = [
	{ label: '3D modelling', year: '2023', projectName: 'OBJECTS', href: '/projects/objects', isFeatured: true },
	{ label: 'Print', year: '2022', projectName: 'Evolution', href: '/projects/evolution', isFeatured: true },
	{ label: 'Animation', year: '2021', projectName: '404 animation', href: '/projects/404-animation' },
	{
		label: 'UX/UI Design',
		year: '2021',
		projectName: 'Music controller',
		href: '/projects/music-controller',
		isFeatured: true,
	},
	{ label: '3D modelling', year: '2021', projectName: 'Incrementum', href: '/projects/incrementum' },
	{ label: 'UX/UI Design', year: '2021', projectName: 'Road maintenance', href: '/projects/road-maintenance' },
];

export interface ProjectsNavigationProps extends SimpleGridProps {
	excludeLabels?: boolean;
	useFeatured?: boolean;
}

export default function ProjectsNavigation(props: ProjectsNavigationProps) {
	const { excludeLabels, useFeatured, ...rest } = props;

	return (
		<SimpleGrid templateColumns={['auto', 'auto', 'auto 1fr']} columnGap={[0, 0, 24]} rowGap={[0, 0, 10]} {...rest}>
			{ProjectItems.filter(item => (useFeatured ? item.isFeatured : true)).map((item, key) => {
				return (
					<Fragment
						key={[item.label, item.year, item.href].map(x => x.toLowerCase().replace(' ', '-')).join('-')}
					>
						{excludeLabels ? null : (
							<Text fontSize={'16px'} fontWeight="400" color="text.lightGrey">
								{item.year}
								<br />
								{item.label}
							</Text>
						)}
						<Link
							href={item.href}
							color="text.dark"
							_hover={{
								color: 'text.forestGreen',
								textDecoration: 'underline',
							}}
							fontSize={['48px', '48px', '60px', '80px']}
							lineHeight={['48px', '48px', '48px', '60px']}
							fontWeight="500"
							marginBottom={[8, 8, 0]}
							width="fit-content"
						>
							{item.projectName}
						</Link>
					</Fragment>
				);
			})}
		</SimpleGrid>
	);
}
