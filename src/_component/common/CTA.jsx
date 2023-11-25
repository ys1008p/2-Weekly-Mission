export default function CTA({ content, to, ...props }) {
  return (
    <a href={to} {...props}>
      {content}
    </a>
  );
}
