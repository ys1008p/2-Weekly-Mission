import { Link } from "react-router-dom";

export default function FAB({ content, icon, ...props }) {
  return (
    <Link {...props}>
      {content}
      {icon}
    </Link>
  );
}
