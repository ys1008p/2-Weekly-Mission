const SECOND_IN_MILISECOND = 1000;
const MINUTE_IN_SECOND = 60;
const HOUR_IN_SECOND = 60 * MINUTE_IN_SECOND;
const DAY_IN_SECOND = 24 * HOUR_IN_SECOND;
const MONTH_IN_SECOND = 30 * DAY_IN_SECOND;
const YEAR_IN_SECOND = 12 * MONTH_IN_SECOND;

const timeUnits = [
  { unit: 'year', seconds: YEAR_IN_SECOND },
  { unit: 'month', seconds: MONTH_IN_SECOND },
  { unit: 'day', seconds: DAY_IN_SECOND },
  { unit: 'hour', seconds: HOUR_IN_SECOND },
  { unit: 'minute', seconds: MINUTE_IN_SECOND },
];

const getTimeDiffInSeconds = (dateTime: string): number => {
  const date = new Date(dateTime);
  const now = new Date();

  return (now.getTime() - date.getTime()) / SECOND_IN_MILISECOND;
};

/*
 * 1 minute ago
 * 2 hours ago
 * 1 day ago
 */
const getTimeDiff = (dateTime: string): string => {
  const timeDiffSeconds = getTimeDiffInSeconds(dateTime);

  for (const { unit, seconds } of timeUnits) {
    if (timeDiffSeconds < seconds) continue;

    const count = Math.floor(timeDiffSeconds / seconds);
    return `${count} ${unit}${count > 1 ? 's' : ''} ago`;
  }

  return '1 minute ago';
};

export default getTimeDiff;
