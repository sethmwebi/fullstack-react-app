import { Flex, Text, Heading, Container } from "@chakra-ui/react";

export const Hero = () => (
	<Flex
		w="100%"
		background="linear-gradient(93.73deg, #FEAC5E 2.17%, #C779D0 47.86%, #4BC0C8 98.58%);"
	>
		<Container py="64px">
			<Heading>
				Increase your productivity
				<br />
				Make your app in minutes
			</Heading>
			<Text mt="16px" fontSize="26px" color="gray.600">
				Your Fullstack React app
			</Text>
		</Container>
	</Flex>
);
