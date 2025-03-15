import baseApi from "./AxiosInstance/axiosInstance";

export const getAllTeamsWithPagination = (page, size) => baseApi.get(`/teams?page=${page}&size=${size}`);

export const UpdateTeam = (teamId, updatedTeam) => {
    baseApi.put(`/teams/${teamId}`, updatedTeam);
}

export const ListTeams = () => baseApi.get(`/teams`);

export const updateFavoriteState = (teamId, favoriteState) => {
    baseApi.put(`/teams/${teamId}/update-favorite-state`, favoriteState);
}

export const getTeamById = (teamId) => baseApi.get(`/teams/${teamId}`);

export const createNewTeam = (payload) => baseApi.post(`/teams`, payload);

export const getTeamByTeamName = (teamName) => baseApi.get(`/teams/get-by-name/${teamName}`);

export const deleteTeamByID = (teamId) => baseApi.delete(`/teams/delete-by-id/${teamId}`);