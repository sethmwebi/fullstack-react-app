import { Text } from "@chakra-ui/react";
import Link from "next/link"

type MenuItemProps = {
	text: string;
	href: string;
};
export const MenuItem: React.FC<MenuItemProps> = ({ text, href }) => (
	<Text color="#666" fontSize="18px">
		<Link href={href}>
			<a>{text}</a>
		</Link>
	</Text>
);
