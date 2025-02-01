import axios from 'axios';

const BASE_URL_COACHES = "/api/coaches";

export const ListCoach = () => axios.get(BASE_URL_COACHES);