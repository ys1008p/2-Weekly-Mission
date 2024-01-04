function getDateAgo(createdAt: string) {
  const createdAtDate = new Date(createdAt);
  const now = new Date();

  const timeDiff = now.getTime() - createdAtDate.getTime();
  const secondsDiff = Math.floor(timeDiff / 1000);
  const minutesDiff = Math.floor(secondsDiff / 60);
  const hoursDiff = Math.floor(minutesDiff / 60);
  const daysDiff = Math.floor(hoursDiff / 24);
  const monthsDiff = Math.floor(daysDiff / 30);
  const yearsDiff = Math.floor(monthsDiff / 12);

  if (yearsDiff >= 1) {
    return `${yearsDiff} years ago`;
  } else if (monthsDiff >= 1) {
    return `${monthsDiff} months ago`;
  } else if (daysDiff >= 1) {
    return `${daysDiff} days ago`;
  } else if (hoursDiff >= 1) {
    return `${hoursDiff} hours ago`;
  } else if (minutesDiff >= 1) {
    return `${minutesDiff} minutes ago`;
  } else {
    return "Just now";
  }
}

export default getDateAgo;
