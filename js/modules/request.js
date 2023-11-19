const server = 'https://bootcamp-api.codeit.kr';

export const getUserToken = async (email, password) => {
  try {
    const res = await fetch(`${server}/api/sign-in`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.status !== 200) return;

    const data = await res.json();
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
