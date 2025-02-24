import axios from "axios";
import baseApi from "./AxiosInstance/axiosInstance";

const BASE_URL_USERS = "api/users";

const BASE_URL_AUTH = "/auth"

export const listUsers = () => {
    return baseApi.get("/users");
}

export const createUser = (user) => axios.post(BASE_URL_USERS, user);

export const updateUser = (userId, updatedUser) => axios.put(BASE_URL_USERS + "/" + userId, updatedUser);

export const getUserByUsername = (username) => {
    return baseApi.get(`/users/${username}`);
}

export const updateUsername = (username, updatedUsername) => {
    return baseApi.put(`/users/${username}/update?username=${updatedUsername}`)
}

export const updateFirstname = (username, updatedFirstname) => {
    return baseApi.put(`/users/${username}/update?firstname=${updatedFirstname}`)
}

export const updateLastname = (username, updatedLastname) => {
    return baseApi.put(`/users/${username}/update?lastname=${updatedLastname}`)
}

export const updateEmail = (username, updatedEmail) => {
    return baseApi.put(`/users/${username}/update?email=${updatedEmail}`)
}

export const updateAvatar = (userId, updatedAvatar) => {
    return baseApi.put(`/users/${userId}/update-avatar`, updatedAvatar);
}

export const updatePersonalFormation = (userId, payload) => axios.put(BASE_URL_USERS + `/${userId}/update-formations`, payload);

export const updatePersonalSpecifiedFormation = (userId, formationIndex, payload) => axios.put(BASE_URL_USERS + `/${userId}/update-specified-formation/${formationIndex}`, payload);

export const deletePersonalSpecifiedFormation = (userId, formationIndex) => axios.delete(BASE_URL_USERS + `/${userId}/delete-specified-formation/${formationIndex}`);

export const userLogin = (username, password) => axios.post(BASE_URL_AUTH + "/login", {
    username, 
    password
});

export const userRegister = (username, password, email, firstname, lastname) => {
    const registerPayload = {
        "username": username,
        "password": password, 
        "email": email,
        "firstname": firstname,
        "lastname": lastname,
        "avatar": "",
        "favoriteTeams": [],
        "roles": ["New User"], 
        "personalFormations": []
    }
    return axios.post(BASE_URL_AUTH + "/register", registerPayload);
}