import axios from "axios";

export const getFilmsApi = () => {
  const url = "https://swapi.dev/api/films/?format=json";
  return axios.get(url);
};

export const getFilmApi = (id) => {
  const url = `https://swapi.dev/api/films/${id}/?format=json`;
  return axios.get(url);
};
