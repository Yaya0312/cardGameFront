import * as React from 'react';
import UserApi from "../api/UserApi";
import ListUsersTemplate from "../Template/ListUsersTemplate";
import useSWR from 'swr';
import {CircularProgress} from "@mui/material";

export default function ListUsers() {
    const { data, error } = useSWR('users', () => UserApi.getAll())
    if (!data) return <CircularProgress/>;
    if (error) return "Impossible de charger les utilisateurs";
    return (
        <ListUsersTemplate rows={data}/>
    );
}