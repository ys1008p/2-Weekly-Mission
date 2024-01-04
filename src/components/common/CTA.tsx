import { Link } from "react-router-dom";

interface Props extends React.ComponentProps<typeof Link> {
	content: string;
}
export default function CTA({ content, ...props }: Props) {
	return <Link {...props}>{content}</Link>;
}
