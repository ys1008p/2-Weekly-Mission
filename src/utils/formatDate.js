function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth()}. ${date.getDate()}`;
}

export default formatDate;
