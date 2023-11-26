const SECOND_IN_MILISECOND = 1000;
const MINUTE_IN_SECOND = 60;
const HOUR_IN_SECOND = 60 * MINUTE_IN_SECOND;
const DAY_IN_SECOND = 24 * HOUR_IN_SECOND;
const MONTH_IN_SECOND = 30 * DAY_IN_SECOND;
const YEAR_IN_SECOND = 12 * MONTH_IN_SECOND;

const getTimeDiffInSeconds = (dateTime: string): number => {
  const date = new Date(dateTime);
  const now = new Date();

  return (now.getTime() - date.getTime()) / SECOND_IN_MILISECOND;
};

const useTimeDiff = (dateTime: string): string => {
  const timeDiffSeconds = getTimeDiffInSeconds(dateTime);

  if (timeDiffSeconds < MINUTE_IN_SECOND) {
    return '1 minute ago';
  } else if (timeDiffSeconds <= 59 * MINUTE_IN_SECOND) {
    const minutes = Math.floor(timeDiffSeconds / MINUTE_IN_SECOND);
    return `${minutes} minutes ago`;
  } else if (timeDiffSeconds <= HOUR_IN_SECOND) {
    return '1 hour ago';
  } else if (timeDiffSeconds <= 23 * HOUR_IN_SECOND) {
    const hours = Math.floor(timeDiffSeconds / HOUR_IN_SECOND);
    return `${hours} hours ago`;
  } else if (timeDiffSeconds <= DAY_IN_SECOND) {
    return '1 day ago';
  } else if (timeDiffSeconds <= 29 * DAY_IN_SECOND) {
    const days = Math.floor(timeDiffSeconds / DAY_IN_SECOND);
    return `${days} days ago`;
  } else if (timeDiffSeconds <= MONTH_IN_SECOND) {
    return '1 month ago';
  } else if (timeDiffSeconds <= 11 * MONTH_IN_SECOND) {
    const months = Math.floor(timeDiffSeconds / MONTH_IN_SECOND);
    return `${months} months ago`;
  } else if (timeDiffSeconds <= YEAR_IN_SECOND) {
    return '1 year ago';
  } else {
    const years = Math.floor(timeDiffSeconds / YEAR_IN_SECOND);
    return `${years} years ago`;
  }
};

export default useTimeDiff;
