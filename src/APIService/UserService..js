import axios from "axios";
import getUserApi from "./AxiosInstance/axiosInstance";

const BASE_URL_USERS = "api/users";

const BASE_URL_AUTH = "/auth"

export const listUsers = () => {
    return getUserApi.get("");
}

export const createUser = (user) => axios.post(BASE_URL_USERS, user);

export const updateUser = (userId, updatedUser) => axios.put(BASE_URL_USERS + "/" + userId, updatedUser);

export const getUserByUsername = (username) => {
    return getUserApi.get(`/${username}`);
}

export const updateUsername = (username, updatedUsername) => {
    return getUserApi.put(`/${username}/update?username=${updatedUsername}`)
}

export const updateFirstname = (username, updatedFirstname) => {
    return getUserApi.put(`/${username}/update?firstname=${updatedFirstname}`)
}

export const updateLastname = (username, updatedLastname) => {
    return getUserApi.put(`/${username}/update?lastname=${updatedLastname}`)
}

export const updateEmail = (username, updatedEmail) => {
    return getUserApi.put(`/${username}/update?email=${updatedEmail}`)
}

export const updateAvatar = (userId, updatedAvatar) => {
    return getUserApi.put(`/${userId}/update-avatar`, updatedAvatar);
}

export const updatePersonalFormation = (userId, payload) => axios.put(BASE_URL_USERS + `/${userId}/update-formations`, payload);

export const updatePersonalSpecifiedFormation = (userId, formationIndex, payload) => axios.put(BASE_URL_USERS + `/${userId}/update-specified-formation/${formationIndex}`, payload);

export const deletePersonalSpecifiedFormation = (userId, formationIndex) => axios.delete(BASE_URL_USERS + `/${userId}/delete-specified-formation/${formationIndex}`);

export const userLogin = (username, password) => axios.post(BASE_URL_AUTH + "/login", {
    username, 
    password
});