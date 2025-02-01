import axios from "axios";

const BASE_URL_MARKETVALUE = "/api/marketValues";

export const getMarketValueById = (id) => axios.get(BASE_URL_MARKETVALUE + `/${id}`);