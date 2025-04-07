import axios from 'axios';
import baseApi from './AxiosInstance/axiosInstance';

const BASE_URL_COACHES = "/api/coaches";

export const ListCoach = () => baseApi.get("/coaches");

export const getCoachByTeamName = (teamName) => baseApi.get(`/coaches/get-by-team-name/${teamName}`);

export const getContractByTeamName = (coachName, teamName) => baseApi.get(`/coaches/${coachName}/get-contract-by-team-name/${teamName}`);

export const getCoachGroupedStatbyCompetition = (coachName) => baseApi.get(`/coaches/${coachName}/get-grouped-stats-by-competition`);