'use client';
import { Box, Divider, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import FullScreenStack from '@/components/FullScreenStack';
import { Fragment, ReactNode, useCallback, useMemo, useState } from 'react';
import { Link } from '@chakra-ui/next-js';
import { ArrowUpIcon } from '@chakra-ui/icons';
import useScrollPosition from '@/hooks/useScrollbar';
import CloudinaryImage from '@/components/CloudinaryImage';

interface Step {
	title: string;
	key: string;
	keyPhrase: string;
	description: ReactNode;
	activities: Array<ReactNode>;
}

const steps: Array<Step> = [
	{
		title: 'Collect',
		key: 'collect',
		keyPhrase: 'Be a sponge.',
		description: (
			<>
				Spend time absorbing as much information on the problem as possible before settling on your first
				solution. Focus on the people experiencing the problem and ask yourself how and why. Write a list of the
				questions you have and keep building on it as you learn.
				<br />
				<br />
				Doing this early on enables a free-flowing exploration.
			</>
		),
		activities: [
			'Define the problem [Lean UX Canvas]',
			'Map the flow [Miro, Paper]',
			<>
				<Link
					href="https://workingmouse.com.au/ux-design/getting-ready-for-user-interviews/"
					color="text.fireBrick"
					_hover={{
						color: 'text.lightGrey',
						textDecoration: 'none',
					}}
				>
					Talk
				</Link>{' '}
				to people [Everask, Discovery interviews]
			</>,
		],
	},
	{
		title: 'Create',
		key: 'create',
		keyPhrase: 'Have fun with it.',
		description: (
			<>
				We rely on visual cues to make sense of the world. Take your learnings and start putting pen to paper,
				then paper to computer. Think about the solution as a living thing that brings joy to those who interact
				with it.
			</>
		),
		activities: [
			'Sketch your ideas',
			'Activate your mood board',
			<>
				Experiment with{' '}
				<Link
					href="https://lottiefiles.com/oysterqueen"
					color="text.fireBrick"
					_hover={{
						color: 'text.lightGrey',
						textDecoration: 'none',
					}}
				>
					animation
				</Link>{' '}
				[After Effects]
			</>,
			<>
				Play with{' '}
				<Link
					href="https://freesound.org/people/oysterqueen/sounds/"
					color="text.fireBrick"
					_hover={{
						color: 'text.lightGrey',
						textDecoration: 'none',
					}}
				>
					sound
				</Link>{' '}
				[Garage band]
			</>,
			'Prototype [Figma]',
		],
	},
	{
		title: 'Commit',
		key: 'commit',
		keyPhrase: 'Make it usable.',
		description: (
			<>
				What you let out in the world should meet its purpose and grow with consistency. Test your ideas with
				the people who would actually employ the solution. You&apos;ll notice the differences in how people
				interact with your solution where some things will need to be adjusted to taste. It&apos;s all part of
				the experience.
			</>
		),
		activities: ['Test it with real people [User testing, Maze]', 'Tweak it', 'Create design systems [Figma]'],
	},
];
const ToolkitSteps = () => {
	const [step, setStep] = useState<string>(steps.at(0)?.key ?? '');

	const handleClick = useCallback((_step: string) => {
		setStep(_step);
	}, []);

	const selectedStep = useMemo(() => {
		const matchedStep = steps.find(x => x.key === step);

		if (!matchedStep) {
			return <></>;
		}

		return (
			<Fragment>
				<Text fontSize={['24px', '24px', '40px', '64px']} fontWeight={600}>
					{matchedStep.keyPhrase}
				</Text>
				<VStack alignItems="flex-start" gap={8}>
					<Text fontSize={['16px', '16px', '22px']}>{matchedStep.description}</Text>
					<VStack alignItems="flex-start">
						<Text fontSize={['16px', '16px', '22px']} fontWeight={700}>
							Activities
						</Text>
						{matchedStep.activities.map((activity, index) => {
							return (
								<Text key={`Activity ${index}`} fontSize={['16px', '16px', '22px']}>
									{index} {activity}
								</Text>
							);
						})}
					</VStack>
				</VStack>
			</Fragment>
		);
	}, [step]);

	return (
		<SimpleGrid columns={[1, 1, 2]} columnGap={[0, 0, 16, 32]} width="100%">
			<SimpleGrid columns={1} marginBottom={[16, 16, 0]} width="100%">
				<VStack alignItems="flex-start">
					{steps.map(_step => {
						return (
							<Fragment key={_step.key}>
								<HStack
									onClick={_ => handleClick(_step.key)}
									role="group"
									_hover={{
										cursor: 'pointer',
									}}
									width="100%"
									justifyContent="space-between"
								>
									<Text
										fontSize={['24px', '24px', '40px', '64px']}
										fontWeight={600}
										_groupHover={{
											color: 'text.dimGrey',
										}}
									>
										{_step.title}
									</Text>
									{_step.key === step ? (
										<ArrowUpIcon
											fontSize={['24px', '24px', '40px', '64px']}
											transform="rotate(45deg)"
											color="text.dark"
										/>
									) : null}
								</HStack>
								<Divider borderColor="bg.dark" />
							</Fragment>
						);
					})}
				</VStack>
			</SimpleGrid>
			<VStack alignItems="flex-start">{selectedStep}</VStack>
		</SimpleGrid>
	);
};

export default function ToolKit() {
	const scroll = useScrollPosition();

	return (
		<div id="toolkit-page">
			<Box className="ghost" />
			<FullScreenStack
				className="horizontal-scroll"
				maxWidth="unset"
				position="fixed"
				top={['120px', '120px', '120px', '150px']}
				marginLeft={`${-scroll}px`}
			>
				<CloudinaryImage
					cloudinaryImageName="toolkit/header-pic"
					alt="header"
					pixelWidth={1500}
					imageProps={{
						width: '50%',
						marginLeft: 'auto',
						marginRight: 'auto',
					}}
				/>
				<Text className="text">
					<Text as="b">WHAT&apos;S IN MY</Text>{' '}
					<Text as="em" fontFamily="Source Serif Pro">
						TOOL-KIT
					</Text>
				</Text>
			</FullScreenStack>
			<FullScreenStack w="100%" alignItems="flex-start" gap={[16, 16, 24, 64]}>
				<VStack gap={[8, 8, 16]} w={['100%', '100%', '80%']} marginLeft="auto" marginRight="auto">
					<Text textAlign="center" fontSize={['24px', '24px', '40px', '64px']} fontWeight={600}>
						A wise person once told me being a designer is like being a chef.
					</Text>
					<SimpleGrid columns={[1, 1, 2, 2]} gap={[8, 8, 16, 16]} alignItems="flex-start">
						<Text fontSize={['16px', '16px', '16px', '22px']}>
							Not in the literal sense. But in both professions you have your foundations, base
							combinations and ingredients that you use compose dishes. Your outputs becoming culinary
							creations :)
						</Text>
						<Text fontSize={['16px', '16px', '16px', '22px']}>
							I wanted to share my go-to prompts and activities when approaching a problem space and
							creating digital solutions that solve it. <br />
							<br />
							My intentions for this page is for it to be a starting guide for building purposeful
							software products. I also think some of these points transcend software design and offer
							insights into approaching general problems. Let me know what you make of it.
						</Text>
					</SimpleGrid>
				</VStack>
				<ToolkitSteps />
			</FullScreenStack>
		</div>
	);
}
