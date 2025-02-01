import axios from "axios";

const BASE_URL_USERS = "/api/users";

export const listUsers = () => {
    return axios.get(BASE_URL_USERS);
}

export const createUser = (user) => axios.post(BASE_URL_USERS, user);

export const updateUser = (userId, updatedUser) => axios.put(BASE_URL_USERS + "/" + userId, updatedUser);