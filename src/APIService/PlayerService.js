import axios from 'axios';
import baseApi from './AxiosInstance/axiosInstance';

const BASE_URL_PLAYERS = "/api/players";

export const ListPlayer = () => baseApi.get("/players");

export const getPlayerByName = (playerName) => baseApi.get(`/players/name/${playerName}`);

export const getPlayerContractByTeamName = (playerName, teamName) => baseApi.get(`/players/name/${playerName}/find-contract/${teamName}`);