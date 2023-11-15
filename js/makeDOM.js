function makeDOM(tagName, properties) {
  const dom = document.createElement(tagName);
  Object.keys(properties).map((key) => {
    dom[key] = properties[key];
  });
  return dom;
}

export default makeDOM;
