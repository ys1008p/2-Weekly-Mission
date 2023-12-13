const formatISOdate = (ISOdate="0000-00-00T00:00:00Z") => {
  const date = new Date(ISOdate)
  const formattedDate=
  `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
  return formattedDate;
}

export default formatISOdate;