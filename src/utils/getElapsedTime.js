const getElapsedTime = (queryDate, subjectDate = new Date()) => {
  const millisecondsDiffer = new Date(subjectDate) - new Date(queryDate);
  const minuteMillis = 60 * 1000;
  const hourMillis = 60 * minuteMillis;
  const dayMillis = 24 * hourMillis;
  const monthMillis = 30 * dayMillis;
  const yearMillis = 12 * monthMillis;

  if (millisecondsDiffer < 2 * minuteMillis) {
    return "1 minute ago";
  } else if (millisecondsDiffer < 60 * minuteMillis) {
    const minutesAgo = Math.floor(millisecondsDiffer / minuteMillis);
    return `${minutesAgo} minutes ago`;
  } else if (120 * minuteMillis > millisecondsDiffer && millisecondsDiffer >= 60 * minuteMillis) {
    return "1 hour ago";
  } else if (millisecondsDiffer < 24 * hourMillis) {
    const hoursAgo = Math.floor(millisecondsDiffer / hourMillis);
    return `${hoursAgo} hours ago`;
  } else if (48 * hourMillis > millisecondsDiffer && millisecondsDiffer >= 24 * hourMillis) {
    return "1 day ago";
  } else if (millisecondsDiffer < 31 * dayMillis) {
    const daysAgo = Math.floor(millisecondsDiffer / dayMillis);
    return `${daysAgo} days ago`;
  } else if (62 > millisecondsDiffer && millisecondsDiffer >= 31 * dayMillis) {
    return "1 month ago";
  } else if (millisecondsDiffer < 12 * monthMillis) {
    const monthsAgo = Math.floor(millisecondsDiffer / monthMillis);
    return `${monthsAgo} months ago`;
  } else if (24 > millisecondsDiffer && millisecondsDiffer >= 12 * monthMillis) {
    return "1 year ago";
  } else {
    const yearsAgo = Math.floor(millisecondsDiffer / yearMillis);
    return `${yearsAgo} years ago`;
  }
};

export default getElapsedTime;