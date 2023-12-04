export const dateDiff = (createdDate, nowDate) => {
  const diff = nowDate - createdDate;

  const MINUTE = 1000 * 60;
  const HOUR = 1000 * 60 * 60;
  const DAY = 1000 * 60 * 60 * 24;
  const MONTH = 31

  const minutesDiff = Math.floor(diff / MINUTE);
  const hoursDiff = Math.floor(diff / HOUR);
  const daysDiff = Math.floor(diff / DAY);
  const monthsDiff = Math.floor(daysDiff / MONTH);

  if(monthsDiff >= 12) {
    return monthsDiff === 12 ? '1 year ago' : `${Math.floor(monthsDiff / 12)} years ago`;
  }
  if(monthsDiff < 12 && monthsDiff >= 1) {
    return monthsDiff === 1 ? '1 month ago' : `${monthsDiff} months ago`;
  }
  if(daysDiff <= 30 && daysDiff >= 1) {
    return daysDiff === 1 ? '1 day ago' : `${daysDiff} days ago`;
  }
  if(hoursDiff <= 23 && hoursDiff >= 1) {
    return hoursDiff === 1 ? '1 hour ago' : `${hoursDiff} hours ago`;
  }
  if(minutesDiff <= 59) {
    return minutesDiff < 2 ? '1 mintue ago' : `${minutesDiff} minutes ago`;
  }
}
