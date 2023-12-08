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
    <button
      onClick={handleButtonClick}
      className={`Buttons-button ${selectedButtonId === id ? "selected" : ""} `}
    >
      {name}
    </button>
  );
}

export default ButtonSelect;
