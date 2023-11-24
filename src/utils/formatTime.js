function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function getDiff(now, prev) {
  const prevDate = new Date(prev);
  const diff = (now - prevDate) / 1000;
  const times = [
    { name: 'year', seconds: 60 * 60 * 24 * 365 },
    { name: 'month', seconds: 60 * 60 * 24 * 30 },
    { name: 'day', seconds: 60 * 60 * 24 },
    { name: 'hour', seconds: 60 * 60 },
    { name: 'minute', seconds: 60 },
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.seconds);

    if (betweenTime > 0) {
      const plural = betweenTime > 1 ? 's' : '';
      return `${betweenTime} ${value.name + plural} ago`;
    }
  }
  return '방금 전';
}

export { formatDate, getDiff };
