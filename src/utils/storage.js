export function getStorageItem(key) {
  try {
    const res = localStorage.getItem(key);
    return res ? JSON.parse(res) : null;
  } catch (e) {
    console.log(e);
  }
}

export function setToken(key, tokens) {
  if (!tokens) return;
  try {
    const existToken = getStorageItem(key);
    if (existToken) {
      tokens.accessToken = existToken.accessToken;
    }
    localStorage.setItem(key, JSON.stringify(tokens));
  } catch (e) {
    console.log(e);
  }
}
