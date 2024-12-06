import axios from 'axios';

const REST_API_BASE_URL = "http://localhost:8080/api/players";

export const ListPlayer = () => axios.get(REST_API_BASE_URL);