if (window.matchMedia("(max-width: 768px)").matches) {
const num2ImgDiv = document.getElementById('first-section');

// 원본 요소 복사
const clonedDiv = num2ImgDiv.cloneNode(true);

// 클래스 이름 추가
clonedDiv.id ='first-section1'

// 복사한 요소를 특정 위치에 추가
const destinationDiv = document.getElementById('first-section-change-location');
destinationDiv.appendChild(clonedDiv);}