import axios from "axios";
import baseApi from "./AxiosInstance/axiosInstance";

const BASE_URL_STADIUM = "/api/stadiums";

export const getStadiumById = id => baseApi.get(`/stadiums/${id}`);

export const getStadiumByTeamName = (teamName) => baseApi.get(`/stadiums/get-by-team-name/${teamName}`)