import axios from "axios";
import jwtDecode from "jwt-decode";
// const apiUrl = process.env.REACT_APP_API_URL;

export function login(data) {
    return axios.post('http://localhost:8090/api/auth', data);
}

export function getCurrentUser() {
    try {
        const token = localStorage.getItem("token");
        return jwtDecode(token);
    } catch (error) {
        return null;
    }
}

export function logout() {
    localStorage.removeItem("token");
}
