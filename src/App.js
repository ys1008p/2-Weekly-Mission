import { Cards } from './components/Cards/Cards';
import { useEffect, useState } from 'react';
import { getFolder } from './components/Api';

function App() {
  const [items, setItems] = useState([]);
  async function handleLoad() {
    const { folder } = await getFolder();
    setItems(folder);
  }

  useEffect(() => {
    handleLoad();
  }, [items]);

  if (!items.links) return;

  return (
    <>
      <Cards items={items}></Cards>
    </>
  );
}

export default App;
