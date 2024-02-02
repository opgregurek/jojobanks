'use client';

import { useEffect, useState } from 'react';
import { Box, keyframes, Text, VStack } from '@chakra-ui/react';

const fadeOut = keyframes`
	0% { opacity: 1 }
  	100% { opacity: 0 }
`;
export default function LoadingScreen() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => setLoading(false), 1500);
	}, []);

	if (loading) {
		return (
			<Box
				animation={`${fadeOut} ease 0.5s`}
				w="100vw"
				h="100vh"
				position="absolute"
				top={0}
				left={0}
				backgroundColor="#1E1E1E"
				zIndex={1000}
				sx={{
					'animation-delay': '1s',
					'animation-fill-mode': 'forwards',
				}}
			>
				<VStack w="100%" h="100%" alignItems="center" justifyContent="center" gap={6}>
					{/*	image*/}
					<svg width="241" height="247" viewBox="0 0 241 247" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M109.965 134.351H122.273V122.043H109.965V134.351Z" fill="#F0EEED" />
						<path d="M109.965 119.202H122.273V106.894H109.965V119.202Z" fill="#F0EEED" />
						<path d="M109.965 104.054H122.273V91.7451H109.965V104.054Z" fill="#F0EEED" />
						<path d="M109.965 149.5H122.273V137.191H109.965V149.5Z" fill="#F0EEED" />
						<path d="M126.01 122.678H138.319V110.369H126.01V122.678Z" fill="#F0EEED" />
						<path d="M94.2308 123.31H106.539V111.001H94.2308V123.31Z" fill="#F0EEED" />
						<path d="M87.2308 138.31H99.5392V126.001H87.2308V138.31Z" fill="#F0EEED" />
						<path d="M71.2308 138.31H83.5392V126.001H71.2308V138.31Z" fill="#F0EEED" />
						<path d="M71.2308 154.31H83.5392V142.001H71.2308V154.31Z" fill="#F0EEED" />
						<path d="M55.2308 166.31H67.5392V154.001H55.2308V166.31Z" fill="#F0EEED" />
						<path d="M39.2308 166.31H51.5392V154.001H39.2308V166.31Z" fill="#F0EEED" />
						<path d="M33.2308 183.31H45.5392V171.001H33.2308V183.31Z" fill="#F0EEED" />
						<path d="M15.8785 183.31H28.1869V171.001H15.8785V183.31Z" fill="#F0EEED" />
						<path d="M61.2308 183.31H73.5392V171.001H61.2308V183.31Z" fill="#F0EEED" />
						<path d="M71.2308 199.31H83.5392V187.001H71.2308V199.31Z" fill="#F0EEED" />
						<path d="M29.2308 199.31H41.5392V187.001H29.2308V199.31Z" fill="#F0EEED" />
						<path d="M0.751816 199.31H13.0602V187.001H0.751816V199.31Z" fill="#F0EEED" />
						<path d="M0.676743 215.308H12.9851V202.999H0.676743V215.308Z" fill="#F0EEED" />
						<path d="M105.602 165.308H117.91V153H105.602V165.308Z" fill="#F0EEED" />
						<path d="M141.749 134.045H154.058V121.736H141.749V134.045Z" fill="#F0EEED" />
						<path d="M141.749 149.784H154.058V137.475H141.749V149.784Z" fill="#F0EEED" />
						<path d="M158.363 149.784H170.671V137.475H158.363V149.784Z" fill="#F0EEED" />
						<path d="M174.976 149.784H187.285V137.475H174.976V149.784Z" fill="#F0EEED" />
						<path d="M181.097 165.523H193.406V153.215H181.097V165.523Z" fill="#F0EEED" />
						<path d="M176.725 181.262H189.034V168.954H176.725V181.262Z" fill="#F0EEED" />
						<path d="M187.218 197.001H199.526V184.693H187.218V197.001Z" fill="#F0EEED" />
						<path d="M204.102 197.308H216.41V184.999H204.102V197.308Z" fill="#F0EEED" />
						<path d="M204.102 214.308H216.41V201.999H204.102V214.308Z" fill="#F0EEED" />
						<path d="M220.044 214.308H232.352V201.999H220.044V214.308Z" fill="#F0EEED" />
						<path d="M220.044 230.308H232.352V217.999H220.044V230.308Z" fill="#F0EEED" />
						<path d="M228.015 246.808H240.323V234.499H228.015V246.808Z" fill="#F0EEED" />
						<path d="M145.247 165.523H157.555V153.215H145.247V165.523Z" fill="#F0EEED" />
						<path d="M141.749 181.262H154.058V168.954H141.749V181.262Z" fill="#FF54CF" />
						<path d="M114.699 73.756H127.007V61.4476H114.699V73.756Z" fill="#F0EEED" />
						<path d="M130.699 73.7559H143.007V61.4475H130.699V73.7559Z" fill="#F0EEED" />
						<path d="M137 89.0576H149.308V76.7493H137V89.0576Z" fill="#F0EEED" />
						<path d="M153 98.0576H165.308V85.7493H153V98.0576Z" fill="#F0EEED" />
						<path d="M89 44.0576H101.308V31.7493H89V44.0576Z" fill="#F0EEED" />
						<path d="M84 59.0576H96.3084V46.7493H84V59.0576Z" fill="#F0EEED" />
						<path d="M68 65.0576H80.3084V52.7493H68V65.0576Z" fill="#F0EEED" />
						<path d="M68 81.0576H80.3084V68.7493H68V81.0576Z" fill="#F0EEED" />
						<path d="M52 89.0576H64.3084V76.7493H52V89.0576Z" fill="#F0EEED" />
						<path d="M109.965 58.6072H122.273V46.2988H109.965V58.6072Z" fill="#F0EEED" />
						<path d="M105.231 43.4584H117.539V31.15H105.231V43.4584Z" fill="#F0EEED" />
						<path d="M109.602 28.3084H121.91V16H109.602V28.3084Z" fill="#F0EEED" />
						<path d="M109.602 12.3084H121.91V0H109.602V12.3084Z" fill="#F0EEED" />
						<path d="M109.965 88.9047H122.273V76.5963H109.965V88.9047Z" fill="#F0EEED" />
					</svg>
					<Text fontStyle="italic" color="lightGrey">
						Connecting you to the hyphae...
					</Text>
				</VStack>
			</Box>
		);
	}

	return <></>;
}
