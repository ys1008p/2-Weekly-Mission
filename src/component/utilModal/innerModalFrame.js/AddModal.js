import React, { useState } from "react";
import "../../../css/modal.css";

const datas = ["코딩팁", "채용사이트", "유용한글", "나만의 장소"];
const linkData = ["7개링크", "12개링크", "30개링크", "3개링크"];

const AddModal = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleRadioChange = (index) => {
    setSelectedOption(index);
  };

  return (
    <>
      <div className="modalTitle">
        <div>폴더에 추가</div>
        <div className="modalSubTitle">링크 주소</div>
      </div>

      <div className="linkOptions">
        {datas.map((data, index) => (
          <div
            className={`optionFlexBox ${
              selectedOption === index ? "selected" : ""
            }`}
            key={index}
            onClick={() => handleRadioChange(index)}
          >
            <div className="linkOption">
              <div className="modalMiddleTitle">{data}</div>
              <div className="modalSubTitle">{linkData[index]}</div>
            </div>
            {selectedOption === index && (
              <div className="linkOptionCheck"></div>
            )}
          </div>
        ))}
      </div>
      <button className="modalButton">추가하기</button>
    </>
  );
};

export default AddModal;
