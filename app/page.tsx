'use client';
import { VStack } from '@chakra-ui/react';
import FlashlightScreen from '@/components/homepage/screens/FlashlightScreen';
import FeatureScreen from '@/components/homepage/screens/FeatureScreen';
import JoIntroScreen from '@/components/homepage/screens/JoIntroScreen';
import JoDescriptionScreen from '@/components/homepage/screens/JoDescriptionScreen';
import FeaturedProjectsScreen from '@/components/homepage/screens/FeaturedProjectsScreen';

export default function Home() {
	return (
		<VStack w="100%" gap={[20, 20, 32, 44]}>
			<FeatureScreen />
			<FlashlightScreen />
			<JoIntroScreen />
			<JoDescriptionScreen />
			<FeaturedProjectsScreen />
		</VStack>
	);
}
