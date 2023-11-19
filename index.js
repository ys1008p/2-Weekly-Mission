const signInAnchor = document.querySelector(".gnb__signin");
const signUpAnchor = document.querySelector(".hero__signup");

signInAnchor.addEventListener("click", (e) => {
  e.preventDefault();
  navigateFolderPage("/pages/auth/signin/");
});

signUpAnchor.addEventListener("click", (e) => {
  e.preventDefault();
  navigateFolderPage("/pages/auth/signup/");
});

function navigateFolderPage(href) {
  if (localStorage.getItem("accessToken")) {
    location.href = "/pages/folder/";
    return;
  }

  location.href = href;
}
