function ConvertToFormattedDate(createdAtString: string) {
  const createdAt = new Date(createdAtString);
  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const day = createdAt.getDate();
  const date = `${year}. ${month}. ${day}`;
  return date;
}

export default ConvertToFormattedDate;
