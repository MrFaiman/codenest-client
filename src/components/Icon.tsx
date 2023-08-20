// TODO: This component has errors when trying to use it. 

import { icons } from "lucide-react";

interface IconProps {
	name: string;
	color?: string;
	size?: string;
}

const Icon: React.FC<IconProps> = (props): JSX.Element => {
	const LucideIcon = icons[props.name as keyof typeof icons];

	return <LucideIcon color={props.color} size={props.size} />;
};

export default Icon;
