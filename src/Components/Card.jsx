import { useEffect, useState } from "react";
import { getCardData } from "./Api";
import { FolderCard } from "./LinkCard";
function Card({ selectedButtonId }) {
  const [cardData, setCardData] = useState(null);

  const dataLoad = async (selectedButtonId) => {
    try {
      let result = await getCardData(selectedButtonId);
      result.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setCardData(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    dataLoad(selectedButtonId);
  }, [selectedButtonId]);

  return (
    <div>
      {cardData ? (
        <FolderCard linkData={cardData.data} />
      ) : (
        "저장된 데이터가 없습니다."
      )}
    </div>
  );
}
export default Card;
