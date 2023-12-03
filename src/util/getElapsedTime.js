const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 31;
const year = month * 12;

const getElapsedTime = (createdAt) => {
  const now = new Date();
  const createdAtDate = new Date(createdAt);
  const elapsedTime = now - createdAtDate;

  if (elapsedTime >= 2 * year) {
    return `${Math.floor(elapsedTime / month)} months ago`;
  } else if (elapsedTime >= year) {
    return `1 year ago`;
  } else if (elapsedTime >= 2 * month) {
    return `${Math.floor(elapsedTime / month)} months ago`;
  } else if (elapsedTime >= month) {
    return `1 month ago`;
  } else if (elapsedTime >= 2 * day) {
    return `${Math.floor(elapsedTime / day)} days ago`;
  } else if (elapsedTime >= day) {
    return `1 day ago`;
  } else if (elapsedTime >= 2 * hour) {
    return `${Math.floor(elapsedTime / hour)} hours ago`;
  } else if (elapsedTime >= hour) {
    return `1 hour ago`;
  } else if (elapsedTime >= 2 * minute) {
    return `${Math.floor(elapsedTime / minute)} minutes ago`;
  } else {
    return `1 minute ago`;
  }
};

export { getElapsedTime };
