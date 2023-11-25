export const getDateDiff = (date) => {
  const nowDate = new Date();
  const tmpDate = new Date(date);
  const diffDate = nowDate - tmpDate;

  let sec = diffDate / 1000;
  let mins = Math.floor(sec / 60);
  let hours = Math.floor(mins / 60);
  let days = Math.floor(hours / 24);
  let months = Math.floor(days / 30);
  let years = Math.floor(months / 12);

  switch (true) {
    case mins < 2:
      return `1 minute ago`;
    case mins < 60:
      return `${mins} minutes ago`;
    case hours === 1:
      return `${hours} hour ago`;
    case hours < 24:
      return `${hours} hours ago`;
    case days === 1:
      return `${days} day ago`;
    case days < 30:
      return `${days} days ago`;
    case months === 1:
      return `${months} month ago`;
    case months < 12:
      return `${months} months ago`;
    case years === 1:
      return `${years} year ago`;
    case years > 1:
      return `${years} years ago`;
    default:
      return null;
  }
};
