import axios from 'axios';
import baseApi from './AxiosInstance/axiosInstance';
import { IoBackspaceSharp } from 'react-icons/io5';

const BASE_URL_PLAYERS = "/api/players";

export const ListPlayer = () => baseApi.get("/players");

export const getPlayerByName = (playerName) => baseApi.get(`/players/name/${playerName}`);

export const getPlayerContractByTeamName = (playerName, teamName) => baseApi.get(`/players/name/${playerName}/find-contract/${teamName}`);

export const getStatBySeason = (playerName, seasonName) => baseApi.get(`/players/name/${playerName}/get-stat-by-season/${seasonName}`);

export const getAllPlayerStats = (playerName) => baseApi.get(`/players/name/${playerName}/get-all-stats`);