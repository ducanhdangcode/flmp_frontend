import axios from "axios";

const BASE_URL_FORMATION = "/api/formations";

export const getFormationByTeamName = (teamName) => axios.get(BASE_URL_FORMATION + `/team/${teamName}`);

export const updateFormationSquad = (id, payload) => axios.put(BASE_URL_FORMATION + `/${id}/update-squad`, payload);