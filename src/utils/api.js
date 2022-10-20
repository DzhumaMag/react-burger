// import { URL } from './ingredients';
const BASE_URL = "https://norma.nomoreparties.space/api"
export const URL = `${BASE_URL}/ingredients` ;

const checkResponce = (res) => {
  return res.ok ? res.json() : Promise.reject(`При загрузке данных произошла ошибка: ${res.status}`);
};

export const getServerData = () => {
  return fetch(URL)
  .then(checkResponce);
};