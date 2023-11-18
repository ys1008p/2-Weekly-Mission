export function getStorage(key) {
  try {
    const res = localStorage.getItem(key);
    return res ? JSON.parse(res) : null;
  } catch (e) {
    console.log(e);
  }
}

export function setStorage(key, tokens) {
  if (!tokens) return;
  try {
    const existToken = getStorage(key);
    console.log(existToken);
    if (existToken) {
      tokens.accessToken = existingData.accessToken;
    }
    localStorage.setItem(key, JSON.stringify(tokens));
  } catch (e) {
    console.log(e);
  }
}
