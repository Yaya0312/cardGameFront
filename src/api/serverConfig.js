import axios from 'axios';

export const url = "http://localhost:8080";

export const requesterWithToken = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {'Authorization': 'Bearer '+ localStorage.getItem("token")}
});

export const requester = axios.create({
    baseURL: 'http://localhost:8080'
});

