import { useEffect, useState } from "react";
import { getButtonData } from "./Api";
import "../css/Buttons.css";
import AddFolder from "./AddFolder";
import ButtonSelect from "./ButtonSelect";

function Buttons({
  setSelectedButtonId,
  selectedButtonId,
  setSelectedButtonTitle,
}) {
  const [buttonData, setButtonData] = useState(null);
  const ButtonDataLoad = async () => {
    try {
      let result = await getButtonData();
      result.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setButtonData(result);
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleSelectedId = () => {
    setSelectedButtonId(null);
    setSelectedButtonTitle("");
  };
  useEffect(() => {
    ButtonDataLoad();
  }, []);
  return (
    <div className="ButtonsContainer">
      {buttonData && buttonData.data.length !== 0 ? (
        <>
          <div className="Buttons">
            <button
              onClick={handleSelectedId}
              className={`Buttons-button ${
                selectedButtonId === null ? "selected" : ""
              } `}
            >
              전체
            </button>
            {buttonData.data.map((data) => (
              <ButtonSelect
                key={data.id}
                id={data.id}
                name={data.name}
                selectedButtonId={selectedButtonId}
                setSelectedButtonId={setSelectedButtonId}
                setSelectedButtonTitle={setSelectedButtonTitle}
              />
            ))}
          </div>
          <AddFolder />
        </>
      ) : (
        <div className="noneData">저장된 링크가 없습니다</div>
      )}
    </div>
  );
}
export default Buttons;
