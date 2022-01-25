import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {ButtonGroup, Typography} from "@mui/material";
import Button from "@mui/material/Button";

const url = "https://raw.githubusercontent.com/tomjamesallen/blackjack-react/master/src/public/img/cards";

export default function Janken() {
    const [userHit, setUserHit] = useState(-1);
    const [computerHit, setComputerHit] = useState(-1);
    const choice = ["rock", "scissors", "paper"];
    const [result,setResult] = useState("");
    const [scorePlayer, setScorePlayer] = useState(0);
    const [scoreComputer, setScoreComputer] = useState(0);
    const [currentRound, setCurrentRound] = useState(0);
    const maxRound = 3;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function play(hit) {
        if (currentRound === maxRound) {
            return;
        }
        setCurrentRound(currentRound + 1);
        setUserHit(hit);
        // request api;
        let random = getRandomInt(0,2);
        setComputerHit(random);
    }

    useEffect(() => {
        console.log(userHit, computerHit);
        if (((userHit - computerHit) === -1) || ((userHit - computerHit) === 2)) {
            setResult("Vous avez gagné la manche")
            setScorePlayer(scorePlayer + 1);
        } else if (((userHit - computerHit) === 1) || ((userHit - computerHit) === -2)) {
            setResult("Vous avez perdu la manche")
            setScoreComputer(scoreComputer + 1);
        } else if (userHit === computerHit) {
            setResult("égalité");
        } else {
            setResult("error");
        }
    }, [userHit, computerHit])

    const displayHit = (hit) => hit === -1 ? "default" : choice[hit]

  return (
      <Grid>
        <Box>
          <Typography textAlign="center" variant="h3">Round {currentRound}/{maxRound}</Typography>
            <Typography textAlign="center" variant="h5">{ result }</Typography>
        </Box>
        <Grid container flexDirection="row" justifyContent="space-around">
          <Box item>
            <Typography textAlign="center" variant="h5">Joueur</Typography>
            <img src={"/src/assets/janken/" + displayHit(userHit) + ".png"} width="150" height="180"/>
              <Typography textAlign="center" variant="h5">{displayHit(userHit)}</Typography>
              <Typography textAlign="center" >Score {scorePlayer} </Typography>

          </Box>
          <Box item>
            <Typography textAlign="center" variant="h5">Ordinateur</Typography>
            <img src={"/src/assets/janken/" + displayHit(computerHit) + ".png"} width="150" height="180"/>
              <Typography textAlign="center" variant="h5">{displayHit(computerHit)}</Typography>
              <Typography textAlign="center" >Score {scoreComputer} </Typography>
          </Box>
        </Grid>
        <Grid justifyContent="center" container flexDirection="column">
          <Typography textAlign="center">Veuillez choisir votre coup</Typography>
          <Box item alignSelf="center" >
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button onClick={() => play(0)} >Pierre</Button>
              <Button onClick={() => play(1)} >Ciseau</Button>
                <Button onClick={() => play(2)} >Feuille</Button>
            </ButtonGroup>
          </Box>
        </Grid>
      </Grid>
  );
}
