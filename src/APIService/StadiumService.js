import axios from "axios";

const BASE_URL_STADIUM = "/api/stadiums";

export const getStadiumById = id => axios.get(BASE_URL_STADIUM + `/${id}`);