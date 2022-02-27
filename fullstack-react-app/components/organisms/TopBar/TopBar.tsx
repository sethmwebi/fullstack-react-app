import { Flex, HStack, Link, Button, Text } from "@chakra-ui/react"
import { MenuItem } from "../../molecules/MenuItem/MenuItem"

export const TopBar = () => {
	return (
		<Flex
			w="100%"
			flexDirection="row"
			alignContent="center"
			justifyContent="center"
			p="8px 16px"
		>
			<Text
				fontSize="36px"
				fontWeight="bold"
				lineHeight="42px"
				color="#1F79BA"
				flexGrow={1}
			>
				Super App
			</Text>
			<HStack spacing="16px" alignContent="center">
				<MenuItem text="Blog" href="/blog"/>
				<MenuItem text="Product" href="/product"/>
				<MenuItem text="Pricing" href="/pricing"/>
			</HStack>
			<Flex marginLeft="82px">
				<Button variant="solid" colorScheme="blue">
					Get Started
				</Button>
			</Flex>
		</Flex>
	);
};
