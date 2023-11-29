const signInApi = "https://bootcamp-api.codeit.kr/api/sign-in";
const signUpApi = "https://bootcamp-api.codeit.kr/api/sign-up";
const emailCheck = "https://bootcamp-api.codeit.kr/api/check-email";

const newMember = { emailText, passwordText };

console.log(signInApi);

const test = {
  email: "text@codeit.com",
  password: "sprint101",
};

fetch(emailCheck, {
  method: "POST",
  body: JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

fetch(signInApi, {
  method: "POST",
  body: JSON.stringify(test),
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

console.log("2");

export async function getFoods() {
  const response = await fetch("https://learn.codeit.kr/0001/foods");
  const body = await response.json();
  return body;
}
