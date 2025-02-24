import axios from "axios";
import baseApi from "./AxiosInstance/axiosInstance";

const BASE_URL_FORMATION = "/api/formations";

export const getFormationByTeamName = (teamName) => baseApi.get(`/formations/team/${teamName}`);

export const updateFormationSquad = (id, payload) => baseApi.put(`/formations/${id}/update-squad`, payload);