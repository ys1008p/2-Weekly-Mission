export function isEmptyString(value) {
  return !value?.trim();
}

export function navigateWithTokenCheck(href) {
  if (localStorage.getItem('accessToken')) {
    location.href = '/pages/folder/';
    return;
  }

  if (!href) {
    return;
  }

  location.href = href;
}

export function formatDate(isoDate) {
  const date = new Date(isoDate);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
}

export function calculateTimeDiff(createdAt) {
  const creationDate = new Date(createdAt);
  const currentDate = new Date();
  const diffInSeconds = Math.floor((currentDate - creationDate) / 1000);

  if (diffInSeconds < 120) {
    return '1 minute ago';
  } else if (diffInSeconds < 3600) {
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  } else if (diffInSeconds < 86400) {
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  } else if (diffInSeconds < 2592000) {
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  } else if (diffInSeconds < 31536000) {
    return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  } else {
    return `${Math.floor(diffInSeconds / 31536000)} years ago`;
  }
}
