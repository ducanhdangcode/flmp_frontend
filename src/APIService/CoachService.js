import axios from 'axios';
import baseApi from './AxiosInstance/axiosInstance';

const BASE_URL_COACHES = "/api/coaches";

export const ListCoach = () => baseApi.get("/coaches");