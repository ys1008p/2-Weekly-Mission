function formatTimeAgo(value: number) {
  const now = new Date();
  const createdDate = new Date(value);
  const timeDiff = now.getTime() - createdDate.getTime();
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 31);
  const years = Math.floor(months / 12);

  if (seconds < 120) {
    return `1 minute ago`;
  } else if (minutes <= 59) {
    return `${minutes} minutes ago`;
  } else if (hours === 1) {
    return `1 hour ago`;
  } else if (hours <= 23) {
    return `${hours} hours ago`;
  } else if (days === 1) {
    return `1 days ago`;
  } else if (days <= 30) {
    return `${days} days ago`;
  } else if (months === 1) {
    return `1 months ago`;
  } else if (months <= 11) {
    return `${months} months ago`;
  } else if (years === 1) {
    return `1 year ago`;
  } else if (years > 1) {
    return `${years} years ago`;
  }
}

export default formatTimeAgo;
