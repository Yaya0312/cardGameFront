import Grid from "@mui/material/Grid";
import {useState} from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Box, Stack} from "@mui/material";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const sum = (array) => array.reduce((a, c) => a + c, 0);
const url = "https://raw.githubusercontent.com/tomjamesallen/blackjack-react/master/src/public/img/cards";

export default function BlackJack() {
    const propsMaxRound = 3;
    const [cardDealer,setCardDealer] = useState([]);
    const [cardUser, setCardUser] = useState([]);
    const [isStand, setIsStand] = useState(false);
    const [scoreDealer, setScoreDealer] = useState(0);
    const [scoreUser, setScoreUser] = useState(0);
    const [winner, setWinner] = useState(-1); // -1: none, 0: computer, 1: player

    const handleAdd = (value, setter, newValue) => {
        const tmp = value.slice();
        tmp.push(newValue);
        setter(tmp);
    }

    function reset() {
        setCardDealer([]);
        setCardUser([]);
        setIsStand(false);
        setWinner(-1);
    }

    function displayWinner() {
        if (21 >= sum(cardUser) && sum(cardUser) > sum(cardDealer)) {
            setWinner(1);
            setScoreUser(scoreUser + 1);
        } else {
            setWinner(0);
            setScoreDealer(scoreDealer + 1);
        }
    }

    function hit() {
        if (isStand) { return }
        const newValue = getRandomInt(1,11);
        handleAdd(cardUser, setCardUser, newValue);
        if (sum(cardUser) + newValue >= 21) {
            setIsStand(true);
            stand();
        }
    }

    function stand() {
        setIsStand(true);
        let tmpCardDealer = cardDealer;
        while (sum(tmpCardDealer) < 17) {
            tmpCardDealer.push(getRandomInt(1,11));
        }
        if (sum(tmpCardDealer) > 21) {
            tmpCardDealer.pop();
        }
        setCardDealer(tmpCardDealer);
        displayWinner();
    }

    return (
        <Grid>
            <Typography variant="h3" textAlign="center">Round {scoreUser + scoreDealer}</Typography>
            <Grid alignContent="center" container flexDirection="column">
                <Typography textAlign="center">Points</Typography>
                <Stack flexDirection="row">
                    <Grid item bgcolor="#c00">
                        <Typography>Dealer</Typography>
                        <Typography textAlign="center">{scoreDealer}</Typography>
                    </Grid>
                    <Grid item bgcolor="#0c0" >
                        <Typography>Player</Typography>
                        <Typography textAlign="center">{scoreUser}</Typography>
                    </Grid>
                </Stack>
            </Grid>
            <Box>
                { winner === 1 && <Typography textAlign="center">Le joueur à gagné</Typography>}
                { winner === 0 && <Typography textAlign="center">L'ordinateur à gagné</Typography>}
            </Box>
            <Grid>
                <Typography>Croupier ({sum(cardDealer)})</Typography>
                <Stack direction="row" spacing={2}>
                    {cardDealer.map((value) => <img src={`${url}/s-${value}.svg`} width="60" height="90" alt="card"/>)}
                </Stack>
            </Grid>
            <Grid>
                <Typography>Joueur ({sum(cardUser)})</Typography>
                <Stack direction="row" spacing={2}>
                    {cardUser.map((value) => <img src={`${url}/s-${value}.svg`} width="60" height="90"/>)}
                </Stack>
            </Grid>
            {!isStand && <Button onClick={() => stand()} variant="contained">Terminer</Button>}
            {!isStand && <Button onClick={() => hit()} variant="contained">Piocher</Button>}
            {winner !== -1 && <Button onClick={() => reset()} variant="contained">Prochaine manche</Button>}

        </Grid>
    )
}