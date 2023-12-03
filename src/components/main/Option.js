export function Option({ optionData }) {
  const { name, img } = optionData;
  //   console.log("name=>", name);
  //   console.log(optionData);

  return (
    <div className="option-wrapper">
      <img className="option-img" src={img} />
      <div className="option-name">{name}</div>
    </div>
  );
}

export default Option;
