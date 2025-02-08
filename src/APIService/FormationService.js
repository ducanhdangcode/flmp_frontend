import axios from "axios";

const BASE_URL_FORMATION = "/api/formations";

export const getFormationByTeamName = (teamName) => axios.get(BASE_URL_FORMATION + `/team/${teamName}`);