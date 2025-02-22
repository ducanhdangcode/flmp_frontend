import axios from "axios";

const BASE_URL_TEAMS = `/api/teams`;

export const ListTeams = () => axios.get("/api/teams");

export const UpdateTeam = (teamId, updatedTeam) => axios.put(BASE_URL_TEAMS + "/" + teamId, updatedTeam);