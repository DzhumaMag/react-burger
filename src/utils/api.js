
const BASE_URL = "https://norma.nomoreparties.space/api";
const URL = `${BASE_URL}/ingredients` ;

const ORDER_URL = `${BASE_URL}/orders`;



const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`При загрузке данных произошла ошибка: ${res.status}`);
};

export const getServerData = () => {
  return fetch(URL)
  .then(checkResponse);
};

export const getOrderNum = (ingredientsId) => {
  // console.log(ingredientsId);
  return fetch(ORDER_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ingredients: ingredientsId})
  })
  .then(checkResponse);
  
}