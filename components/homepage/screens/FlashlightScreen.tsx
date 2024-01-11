'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import useMousePosition from '@/hooks/useMousePosition';
import useDebouncedEffect from 'use-debounced-effect';
import { Box, Text, useBreakpoint, VStack } from '@chakra-ui/react';
import useScrollPosition from '@/hooks/useScrollbar';
import { useRecoilState } from 'recoil';
import { NavBarActiveIcon, NavBarBackground, NavBarColor, NavBarShadow } from '@/stores/NavBarState';

export default function FlashlightScreen() {
	// is the text covered by blue
	const [hidden, setHidden] = useState(true);
	// current position of the flashlight
	const [flashlightPosition, setFlashlightPosition] = useState<{
		top?: string;
		bottom?: string;
		left?: string;
		right?: string;
	}>({
		top: '200px',
		left: '50px',
	});

	// setters for navBar state that change because of this component
	const [navBarBackground, setNavBarBackground] = useRecoilState(NavBarBackground);
	const [navBarColor, setNavBarColor] = useRecoilState(NavBarColor);
	const [navBarActiveIcon, setNavBarActiveIcon] = useRecoilState(NavBarActiveIcon);
	const [navBarShadow, setNavBarShadow] = useRecoilState(NavBarShadow);

	// listen on mouse position, breakpoint and scroll
	const mousePosition = useMousePosition();
	const breakpoint = useBreakpoint();
	const scroll = useScrollPosition();

	const containerRef = useRef<HTMLDivElement>(null);
	const hiddenTextRef = useRef<HTMLParagraphElement>(null);

	// when mouse has moved, or breakpoint has changed, calculate our flashlight position
	useDebouncedEffect(
		() => {
			const boundingX = containerRef.current?.getBoundingClientRect().x ?? 0;
			const boundingY = containerRef.current?.getBoundingClientRect().y ?? 0;
			const boundingBottom = containerRef.current?.getBoundingClientRect().bottom ?? 0;
			const boundingRight = containerRef.current?.getBoundingClientRect().right ?? 0;
			const top = Math.max(mousePosition.y - boundingY - 150, 0);
			const left = Math.max(mousePosition.x - boundingX - 150, 0);

			if (mousePosition.y < boundingY || mousePosition.y > boundingBottom) {
				return;
			}

			setFlashlightPosition({
				bottom: mousePosition.y + 150 >= boundingBottom ? '0' : undefined,
				top: mousePosition.y + 150 >= boundingBottom ? undefined : `${top}px`,
				right: mousePosition.x + 150 >= boundingRight ? '0' : undefined,
				left: mousePosition.x + 150 >= boundingRight ? undefined : `${left}px`,
			});
		},
		5,
		[mousePosition, containerRef, breakpoint],
	);

	// we try to position the flashlight in the top left at the start of the text when page is first rendered
	useEffect(() => {
		const top =
			containerRef.current?.getBoundingClientRect().y === undefined ||
			hiddenTextRef.current?.getBoundingClientRect().y === undefined
				? 200
				: hiddenTextRef.current.getBoundingClientRect().y -
					containerRef.current.getBoundingClientRect().y -
					150;
		const left = hiddenTextRef.current?.getBoundingClientRect().x ?? 50;

		setFlashlightPosition({
			top: `${top}px`,
			left: `${left}px`,
		});
	}, [hiddenTextRef, containerRef]);

	// listen on scroll to set navbar state when our component has reached the navbar
	useEffect(() => {
		const y = containerRef.current?.getBoundingClientRect().y ?? 60;
		const bottom = containerRef.current?.getBoundingClientRect().bottom ?? 75;

		if ((y < 60 && bottom > 75) || (bottom < 75 && y > 0)) {
			setNavBarBackground('transparent');
			setNavBarColor('white');
			setNavBarActiveIcon('misc/nav-active-blue');
			setNavBarShadow(false);
		} else {
			setNavBarBackground('white');
			setNavBarColor('text.blue');
			setNavBarActiveIcon('misc/nav-active');
		}
	}, [scroll, containerRef, setNavBarColor, setNavBarActiveIcon, setNavBarBackground, setNavBarShadow]);

	// the content for what's above the square, changes when content is hidden
	const squareContent = useMemo(() => {
		if (hidden) {
			return (
				<VStack height="90px" justifyContent="flex-end">
					<Text color="text.lightGrey" textAlign="center" w="215px">
						Hover over the text to reveal or click the square
					</Text>
					<Box
						bg="background.pink"
						w="24px"
						h="24px"
						as="button"
						onClick={() => {
							setHidden(false);
						}}
					/>
				</VStack>
			);
		}

		return (
			<VStack height="90px" justifyContent="flex-end">
				<Text color="text.lightGrey" textAlign="center">
					Click the square to hide the text
				</Text>
				<Box
					bg="background.pink"
					w="24px"
					h="24px"
					as="button"
					onClick={() => {
						setHidden(true);
					}}
				/>
			</VStack>
		);
	}, [hidden]);

	return (
		<>
			<VStack
				alignItems="center"
				justifyContent="space-between"
				overflow="hidden"
				w="100vw"
				h="110vh"
				position="relative"
				ref={containerRef}
			>
				{hidden ? (
					<Box
						position="absolute"
						width="300px"
						height="300px"
						borderRadius="50%"
						boxShadow="0 0 0 9999px #072165"
						{...flashlightPosition}
					/>
				) : null}
				<VStack position="absolute" top={6}>
					{squareContent}
				</VStack>
				<Text
					fontSize={['40px', '40px', '40px', '81px']}
					marginTop="25vh"
					marginBottom="auto"
					maxW="1440px"
					px="60px"
					ref={hiddenTextRef}
				>
					To clarify muddy waters, you must hold them still and let things settle. Designing calls on that
					same patience.
				</Text>
			</VStack>
		</>
	);
}
