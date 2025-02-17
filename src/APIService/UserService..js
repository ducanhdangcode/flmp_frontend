import axios from "axios";

const BASE_URL_USERS = "/api/users";

export const listUsers = () => {
    return axios.get(BASE_URL_USERS);
}

export const createUser = (user) => axios.post(BASE_URL_USERS, user);

export const updateUser = (userId, updatedUser) => axios.put(BASE_URL_USERS + "/" + userId, updatedUser);

export const getUserByUsername = (username) => axios.get(BASE_URL_USERS + `/${username}`);

export const updateUsername = (username, updatedUsername) => axios.put(BASE_URL_USERS + `/${username}/update?username=${updatedUsername}`);

export const updateFirstname = (username, updatedFirstname) => axios.put(BASE_URL_USERS + `/${username}/update?firstname=${updatedFirstname}`);

export const updateLastname = (username, updatedLastname) => axios.put(BASE_URL_USERS + `/${username}/update?lastname=${updatedLastname}`);

export const updateEmail = (username, updatedEmail) => axios.put(BASE_URL_USERS + `/${username}/update?email=${updatedEmail}`);

export const updatePersonalFormation = (userId, payload) => axios.put(BASE_URL_USERS + `/${userId}/update-formations`, payload);

export const updatePersonalSpecifiedFormation = (userId, formationIndex, payload) => axios.put(BASE_URL_USERS + `/${userId}/update-specified-formation/${formationIndex}`, payload);