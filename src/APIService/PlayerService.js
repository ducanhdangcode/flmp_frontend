import axios from 'axios';
import baseApi from './AxiosInstance/axiosInstance';

const BASE_URL_PLAYERS = "/api/players";

export const ListPlayer = () => baseApi.get("/players");