import axios from "axios";

const getUserApi = axios.create({
    baseURL: "http://localhost:8080/api/users/",
    headers: {
        "Content-Type": "application/json"
    }
})

getUserApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("user-token"); // Get token from localStorage
        if (token) {
            if (config.headers) {
                config.headers.set("Authorization", `Bearer ${token}`);
            }
        }
        config.withCredentials = true;
        return config;
    },
    (error) => Promise.reject(error)
);

export default getUserApi