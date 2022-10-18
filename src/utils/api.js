// import { URL } from './ingredients';
const baseUrl = "https://norma.nomoreparties.space/api"
export const URL = `${baseUrl}/ingredients` ;

const checkResponce = (res) => {
  return res.ok ? res.json() : Promise.reject(`При загрузке данных произошла ошибка: ${res.status}`);
};

export const getServerData = () => {
  return fetch(URL)
  .then(checkResponce);
};