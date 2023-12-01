export const dateChanged = (createdAt) => {
  let dateNum = new Date(createdAt);
  return `${dateNum.getFullYear()}. ${dateNum.getMonth()}. ${dateNum.getDate()}`;
};

export const diffDateDisplay = (createdAt) => {
  const currentDate = new Date();
  const folderDate = new Date(createdAt);
  const diffDate = currentDate - folderDate;

  const diffDay = Math.floor(diffDate / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor(diffDate / (1000 * 60 * 60));
  const diffMinute = Math.floor(diffDate / (1000 * 60));
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffDay / 365);

  let createdAtDiff = "";
  if (diffYear === 1) {
    createdAtDiff = "1 year ago";
  } else if (diffYear > 1) {
    createdAtDiff = `${diffYear} years ago`;
  } else if (diffMonth === 1) {
    createdAtDiff = "1 month ago";
  } else if (diffMonth > 1) {
    createdAtDiff = `${diffMonth} months ago`;
  } else if (diffDay <= 30) {
    createdAtDiff = `${diffDay} days ago`;
  } else if (diffHour <= 23) {
    createdAtDiff = `${diffHour} hours ago`;
  } else if (diffMinute <= 59) {
    createdAtDiff = `${diffMinute} minutes ago`;
  } else if (diffMinute < 2) {
    createdAtDiff = "1 minute ago";
  } else {
    createdAtDiff = "1 day ago";
  }
  return createdAtDiff;
};
