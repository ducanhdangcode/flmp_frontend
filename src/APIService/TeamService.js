import axios from "axios";
import baseApi from "./AxiosInstance/axiosInstance";

const BASE_URL_TEAMS = `/api/teams`;

export const ListTeams = () => baseApi.get("/teams");

export const UpdateTeam = (teamId, updatedTeam) => {
    baseApi.put(`/teams/${teamId}`, updatedTeam);
}