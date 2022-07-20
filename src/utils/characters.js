import axios from "axios";

export const getCharacterApi = (id) => {
  const url = `https://swapi.dev/api/people/${id}`;
  return axios.get(url);
};
