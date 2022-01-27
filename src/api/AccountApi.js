import axios from "axios";
import {url} from "./serverConfig";

export default class AccountApi {
    static async login(username, password) {
        return axios.post(`${url}/account/login`, {
            "login": username,
            "password": password
        }).then(response => {
                localStorage.removeItem("token");
                localStorage.setItem("token", response.data);
                return response;
            }
        );
    }

    static isLogged() {
        let token = localStorage.getItem("token");
        return token !== null;
    }

    static logout() {
        localStorage.removeItem( "token" );
    }

    static register(firstName, lastName, password, login) {
        return axios.post(`${url}/account/register`, {
            "first_name": firstName,
            "last_name": lastName,
            "password": password,
            "login": login
        }).then(r => r.data);
    }

}