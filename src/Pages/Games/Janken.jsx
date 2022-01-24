import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {ButtonGroup, Typography} from "@mui/material";
import Button from "@mui/material/Button";

const url = "https://raw.githubusercontent.com/tomjamesallen/blackjack-react/master/src/public/img/cards";

export default function Janken() {
    const [userHit, setUserHit] = useState("default");
    const [computerHit, setComputerHit] = useState("default");

    function play(hit) {
        setUserHit(hit);
        // request api;
        //setComputerHit();
    }

  return (
      <Grid>
        <Box>
          <Typography textAlign="center" variant="h3">Round 3</Typography>
        </Box>
        <Grid container flexDirection="row" justifyContent="space-around">
          <Box item>
            <Typography textAlign="center" variant="h5">Joueur</Typography>
            <img src={"/src/assets/janken/" + userHit + ".png"} width="150" height="180"/>
          </Box>
          <Box item>
            <Typography textAlign="center" variant="h5">Ordinateur</Typography>
            <img src={"/src/assets/janken/" + computerHit + ".png"} width="150" height="180"/>
          </Box>
        </Grid>
        <Box container>
          <Typography textAlign="center" >Score Joueur 1 </Typography>
          <Typography textAlign="center" >Score Ordinateur 2 </Typography>
        </Box>
        <Grid justifyContent="center" container flexDirection="column">
          <Typography textAlign="center">Veuillez choisir votre coup</Typography>
          <Box justifyContent="center" container>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button onClick={() => play("rock")} >Pierre</Button>
              <Button onClick={() => play("paper")} >Feuille</Button>
              <Button onClick={() => play("scissors")} >Ciseau</Button>
            </ButtonGroup>
          </Box>
        </Grid>
      </Grid>
  );
}
