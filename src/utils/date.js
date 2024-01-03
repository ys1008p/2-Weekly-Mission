// 날짜변환 ex 0000.00.00
export function formatDate(dateString) {
  const date = new Date(dateString); // 날짜 Date 객체로 변환
  const year = date.getFullYear(); //년도 불러오기
  // 월 불러오기 (0부터시작 주의 // +1 붙여서 해결)
  const month = String(date.getMonth() + 1).padStart(2, "0");
  // 일 불러오기 padStart로 문자열 길이 맞추기(2개 , 하나면 0추가)
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
}

export function getTimeDifference(createdAt) {
  const currentDate = new Date();
  const createdDate = new Date(createdAt);
  const timeDifference = Math.floor((currentDate - createdDate) / (1000 * 60)); // Difference in minutes

  return timeDifference < 2
    ? "1 minute ago"
    : timeDifference <= 59
    ? `${timeDifference} minutes ago`
    : timeDifference < 60 * 24
    ? ((hoursDifference) =>
        hoursDifference === 1 ? "1 hour ago" : `${hoursDifference} hours ago`)(
        Math.floor(timeDifference / 60)
      )
    : timeDifference < 60 * 24 * 30
    ? ((daysDifference) =>
        daysDifference === 1 ? "1 day ago" : `${daysDifference} days ago`)(
        Math.floor(timeDifference / (60 * 24))
      )
    : timeDifference < 60 * 24 * 30 * 12
    ? ((monthsDifference) =>
        monthsDifference === 1
          ? "1 month ago"
          : `${monthsDifference} months ago`)(
        Math.floor(timeDifference / (60 * 24 * 30))
      )
    : ((yearsDifference) =>
        yearsDifference === 1 ? "1 year ago" : `${yearsDifference} years ago`)(
        Math.floor(timeDifference / (60 * 24 * 30 * 12))
      );
}
