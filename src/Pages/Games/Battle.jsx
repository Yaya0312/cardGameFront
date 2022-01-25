import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";

const url = "https://raw.githubusercontent.com/tomjamesallen/blackjack-react/master/src/public/img/cards";
export default function Battle() {
    let [currentRound, setCurrentRound] = useState(0);
    let [playerScore, setPlayerScore] = useState(0);
    let [computerScore, setComputerScore] = useState(0);
    const [result,setResult] = useState("");
    let cardsUser = [5,6,8,2,2];
    let cardComputer = [5,3,8,9,4];
    const maxRound = cardsUser.length;

    function play() {
        if (currentRound === maxRound) {
            return;
        }
        setCurrentRound(currentRound + 1);
    }

    useEffect(() => {
        if (cardsUser[currentRound-1] > cardComputer[currentRound-1]) {
            setPlayerScore(playerScore + 1);
            setResult("Vous avez gagné la manche");
        } else if (cardsUser[currentRound-1] < cardComputer[currentRound-1]) {
            setComputerScore(computerScore + 1);
            setResult("Vous avez perdu la manche");
        } else if (currentRound > 0) {
            setResult("égalité");
        }
    }, [currentRound]);

    const currentCard = (deck) => currentRound === 0 ? "back" : "s-" + deck[currentRound-1];

    return (
        <Grid>
            <Box>
                <Typography textAlign="center" variant="h3">Round {currentRound}/{maxRound}</Typography>
                <Typography textAlign="center" variant="h5">{result}</Typography>
            </Box>
            <Grid container flexDirection="row" justifyContent="space-around">
                <Box item>
                    <Typography textAlign="center" variant="h5">Joueur</Typography>
                    <img src={url + "/" + currentCard(cardsUser) + ".svg"} width="150" height="180"/>
                    <Typography textAlign="center" variant="h5">Score {playerScore}</Typography>
                </Box>
                <Box item>
                    <Typography textAlign="center" variant="h5">Ordinateur</Typography>
                    <img src={url + "/" + currentCard(cardComputer) + ".svg"} width="150" height="180"/>
                    <Typography textAlign="center" variant="h5">Score {computerScore}</Typography>
                </Box>
            </Grid>
            <Grid justifyContent="center" container>
                <Button variant="contained" onClick={() => play()}>Jouer</Button>
            </Grid>
        </Grid>
    )
}