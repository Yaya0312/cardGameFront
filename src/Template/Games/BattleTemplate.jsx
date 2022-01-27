import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";

const url = "/src/assets/cards/";
export default function BattleTemplate(props) {
    const [currentRound, setCurrentRound] = useState(0);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [result, setResult] = useState("");
    let cardsUser = props.decks[0];
    let cardComputer = props.decks[1];
    const maxRound = cardsUser.length;

    function play() {
        if (currentRound === maxRound) {
            return;
        }
        setCurrentRound(currentRound + 1);
    }

    useEffect(() => {
        if (props.roundResult[currentRound - 1] === 1) {
            setPlayerScore(playerScore + 1);
            setResult("Vous avez gagné la manche");
        } else if (props.roundResult[currentRound-1] === 2) {
            setComputerScore(computerScore + 1);
            setResult("Vous avez perdu la manche");
        } else if (props.roundResult[currentRound-1] === 0) {
            setResult("égalité");
        }

        if (currentRound === maxRound) {
            if (props.winner === "PLAYER") {
                setResult("Vous avez gagné la partie");
            } else if (props.winner === "COMPUTER") {
                setResult("Vous avez perdu la partie");
            }
        }
    }, [currentRound]);

    const currentCard = (deck) => {
        if (currentRound === 0) {
            return "back";
        }
        return deck[currentRound-1].label;
    }

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
                    <img src={url + currentCard(cardComputer) + ".svg"} width="150" height="180"/>
                    <Typography textAlign="center" variant="h5">Score {computerScore}</Typography>
                </Box>
            </Grid>
            <Grid justifyContent="center" container>
                <Button variant="contained" onClick={() => play()}>Jouer</Button>
            </Grid>
        </Grid>
    )
}