//api.ts
const BASE_URL = 'https://superheroapi.com/api/';
const API_KEY='1420198532244042'
const  BASE_URLF = 'https://mcuapi.herokuapp.com/api/v1/movies';

export class ApiClient {
  static getCharacterByName = async (name: string) => {
    return fetch(`${BASE_URL}/${API_KEY}/search/${name}`).then((res) => res.json()).then((data) => {
      return data;
  });
  }
  static getFilmrByName = async () => {
    return fetch(`${BASE_URLF}/`).then((res) => res.json()).then((data) => {
      return data;
  });
  }
  static getCharacterById = async (id: number) => {
    return fetch(`${BASE_URL}/${API_KEY}/${id}`).then((res) => res.json()).then((data) => {
      return data;
  });
}
}