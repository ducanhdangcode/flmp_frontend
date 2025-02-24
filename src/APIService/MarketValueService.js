import axios from "axios";
import baseApi from "./AxiosInstance/axiosInstance";

const BASE_URL_MARKETVALUE = "/api/marketValues";

export const getMarketValueById = (id) => baseApi.get(`/marketValues/${id}`);