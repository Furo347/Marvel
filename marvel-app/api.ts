//api.ts
import { useGetCharacterByName } from "./hooks/useGetCharacterByName";
const BASE_URL = 'https://superheroapi.com/api/';
const API_KEY='1420198532244042'

export class ApiClient {
  static getCharacterByName = async (name: string) => {
    return fetch(`${BASE_URL}/${API_KEY}/search/${name}`).then((res) => res.json());
  };
}