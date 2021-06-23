import axios, { AxiosPromise } from "axios";

const API_URL =
  "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

export const fetchInhabitantData = (): AxiosPromise =>
  axios({
    method: "get",
    url: API_URL,
  });
