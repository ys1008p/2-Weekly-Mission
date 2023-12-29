import { useEffect, useState } from "react";

function useDateAgo(createdAt) {
  const [timeAgo, setTimeAgo] = useState(0);

  useEffect(() => {
    const createdAtDate = new Date(createdAt);
    const now = new Date();

    const timeDiff = now - createdAtDate;
    const secondsDiff = Math.floor(timeDiff / 1000);
    const minutesDiff = Math.floor(secondsDiff / 60);
    const hoursDiff = Math.floor(minutesDiff / 60);
    const daysDiff = Math.floor(hoursDiff / 24);
    const monthsDiff = Math.floor(daysDiff / 30);
    const yearsDiff = Math.floor(monthsDiff / 12);

    if (yearsDiff >= 1) {
      setTimeAgo(`${yearsDiff} years ago`);
    } else if (monthsDiff >= 1) {
      setTimeAgo(`${monthsDiff} months ago`);
    } else if (daysDiff >= 1) {
      setTimeAgo(`${daysDiff} days ago`);
    } else if (hoursDiff >= 1) {
      setTimeAgo(`${hoursDiff} hours ago`);
    } else if (minutesDiff >= 1) {
      setTimeAgo(`${minutesDiff} minutes ago`);
    } else {
      setTimeAgo("1 minute ago");
    }
  }, [createdAt]);

  return timeAgo;
}

export default useDateAgo;
