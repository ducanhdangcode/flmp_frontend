import axios from "axios";
const REST_API_BASE_URL = "http://localhost:8080/api/teams";

export const ListTeams = () => axios.get(REST_API_BASE_URL);

export const UpdateTeam = (teamId, updatedTeam) => axios.put(REST_API_BASE_URL + "/" + teamId, updatedTeam);