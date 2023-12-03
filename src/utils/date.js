// 날짜변환 ex 0000.00.00
export function formatDate(createdAt) {
  const date = new Date(createdAt); // 날짜 Date 객체로 변환
  const year = date.getFullYear(); //년도 불러오기
  // 월 불러오기 (0부터시작 주의 // +1 붙여서 해결)
  const month = String(date.getMonth() + 1).padStart(2, "0");
  // 일 불러오기 padStart로 문자열 길이 맞추기(2개 , 하나면 0추가)
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
}

// 최신 업데이트 날짜 받아오기
export function getTimeDifference(createdAt) {
  // 현재 날짜와 생성된 날짜의 차이 계산
  const currentDate = new Date();
  const createdDate = new Date(createdAt);
  const timeDifference = Math.floor((currentDate - createdDate) / (1000 * 60)); // Difference in minutes

  // 2분 미만일 때
  if (timeDifference < 2) {
    return "1 minute ago";
  }

  // 59분 이하일 때
  if (timeDifference <= 59) {
    return `${timeDifference} minutes ago`;
  }

  // 24시간 이하일 때
  const hoursDifference = Math.floor(timeDifference / 60); //시간계산
  if (hoursDifference < 24) {
    if (hoursDifference === 1) {
      return "1 hour ago";
    } else {
      return `${hoursDifference} hours ago`;
    }
  }

  // 30일 이하일 때
  const daysDifference = Math.floor(timeDifference / (60 * 24)); //일 계산
  if (daysDifference < 30) {
    if (daysDifference === 1) {
      return "1 day ago";
    } else {
      return `${daysDifference} days ago`;
    }
  }

  // 12달 이하일 때
  const monthsDifference = Math.floor(timeDifference / (60 * 24 * 30)); //년 산
  if (monthsDifference < 12) {
    if (monthsDifference === 1) {
      return "1 month ago";
    } else {
      return `${monthsDifference} months ago`;
    }
  }

  // 12달 이상일 때
  const yearsDifference = Math.floor(monthsDifference / 12); // 몇년지났나 계산
  return yearsDifference === 1 ? "1 year ago" : `${yearsDifference} years ago`;
}
