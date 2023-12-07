import { TasteUser1 } from "../../util/api";

import { useEffect, useState } from "react";

export default function SortButton({ buttons }) {
  const [tasteButton, setTasteButton] = useState();
  const [folderId, setFolderId] = useState(null);

  const handleListButtonClick = (e) => {
    if (e.target.id === CardsList.id) {
    }
  };

  const sortUserTasteButton = async () => {
    const { data: userTasteButton } = await TasteUser1();
    const folderId = userTasteButton.map((item) => item.id);
    setTasteButton(folderId);
  };

  useEffect(() => {
    sortUserTasteButton();
  }, []);

  return (
    <ul className="list">
      <li>
        <button className="listUpButton">전체</button>
      </li>
      {buttons?.map((btn) => {
        return (
          <li key={btn.id}>
            <button className="listUpButton" links={btn.link}>
              {btn.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
