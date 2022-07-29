const baseUrl = "https://auth.nomoreparties.co";
const headers = { "Content-Type": "application/json" };

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export function register({email, password}) {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers,
    body: JSON.stringify({email, password})
  })
  .then((res) => checkResponse(res));
}

  