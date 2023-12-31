import styled from "styled-components";
import mediaQuery from "../static/MediaQuery";

const ButtonSelected = styled.button`
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color);
  ${({ selectedButtonId, id }) => {
    return selectedButtonId === id
      ? `background: var(--Linkbrary-primary-color);
  color: var(--white);`
      : `background: var(--white);
  color: var(--black);`;
  }}
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 400;
  ${mediaQuery.mobile} {
    padding: 6px 10px;
    font-size: 14px;
  }
`;

function ButtonSelect({
  id,
  name,
  setSelectedButtonId,
  selectedButtonId,
  setSelectedButtonTitle,
}) {
  const handleButtonClick = () => {
    setSelectedButtonId(id);
    setSelectedButtonTitle(name);
  };

  return (
    <ButtonSelected
      onClick={handleButtonClick}
      selectedButtonId={selectedButtonId}
      id={id}
    >
      {name}
    </ButtonSelected>
  );
}

export default ButtonSelect;
