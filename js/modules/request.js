const server = 'https://bootcamp-api.codeit.kr';

export const authenticateUser = async (email, password) => {
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

export const registerUser = async (email, password) => {
  try {
    const res = await fetch(`${server}/api/sign-up`, {
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

export const checkIsUniqueEmail = async (email) => {
  try {
    const res = await fetch(`${server}/api/check-email`, {
      method: 'POST',
      body: JSON.stringify({
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res.status === 200;
  } catch (e) {
    console.log(e);
  }
};
