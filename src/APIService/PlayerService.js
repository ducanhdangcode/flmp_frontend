import axios from 'axios';

const BASE_URL_PLAYERS = "/api/players";

export const ListPlayer = () => axios.get(BASE_URL_PLAYERS);