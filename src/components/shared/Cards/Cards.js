import './Card.css';
import CardItem from './CardItem';
import { useEffect, useState } from 'react';
import { getFolder } from '../../fetchApi';

export function Cards() {
  const [isLoading, setIsLoading] = useState(false);
  const [folder, setFolder] = useState({
    id: 0,
    name: '',
    owner: {
      id: 0,
      name: '',
      profileImageSource: '',
    },
    links: [],
    count: 1,
  });

  async function handleLoadLinks() {
    try {
      setIsLoading(true);
      const { folder } = await getFolder();
      setFolder(folder);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleLoadLinks();
  }, []);

  return (
    <div className="Cards">
      {folder.links.map((link) => (
        <CardItem key={link.id} link={link} />
      ))}
    </div>
  );
}
