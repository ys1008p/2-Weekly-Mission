export function Folders({ className, folder }) {
  const { name } = folder;
  return <div className={className}>{name}</div>;
}

export default Folders;
