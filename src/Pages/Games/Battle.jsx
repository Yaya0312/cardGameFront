import BattleTemplate from "../../Template/Games/BattleTemplate";
import useSWR from "swr";
import {CircularProgress} from "@mui/material";
import * as React from "react";
import BattleApi from "../../api/BattleApi";

export default function Battle() {
    const { data, error } = useSWR('battleGame', () => BattleApi.getDecks(20))
    if (!data) return <CircularProgress/>;
    if (error) return "Impossible de charger le jeux de bataille";
    const dataInfo = data;
    return (
        <BattleTemplate decks={dataInfo.decks} winner={dataInfo.winner} roundResult={dataInfo.roundResult}/>
    )
}