export function isEmptyString(value) {
  return !value?.trim();
}

export function navigateWithTokenCheck(href) {
  if (localStorage.getItem("accessToken")) {
    location.href = "/pages/folder/";
    return;
  }

  if (!href) {
    return;
  }

  location.href = href;
}
