/*눈모양 아이콘 클릭시 사선이미지와 사선없는 이미지 교체와 그에 따른 input type 변경에 대한 함수*/
let eyeBool = false;

function eyeImgClickEvent(input, img) {
  if (eyeBool) {
    img.src = "/images/eye-off.svg";
    input.setAttribute("type", "password");
  } else {
    img.src = "/images/eye-on.svg";
    input.setAttribute("type", "text");
  }
  eyeBool = !eyeBool;
}
export { eyeBool, eyeImgClickEvent };
