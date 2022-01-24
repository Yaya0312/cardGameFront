import Grid from "@mui/material/Grid";
import {useState} from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const sum = (array) => array.reduce((a, c) => a + c, 0)

export default function BlackJack() {
    const [cardDealer,setCardDealer] = useState([]);
    const [cardUser, setCardUser] = useState([]);
    const [standValue, setStandValue] = useState(false);
    const [winner, setWinner] = useState(-1); // -1: none, 0: computer, 1: player

    const handleAdd = (value, setter, newValue) => {
        const tmp = value.slice();
        tmp.push(newValue);
        setter(tmp);
    }

    function displayWinner() {
        if (21 >= sum(cardUser) && sum(cardUser) > sum(cardDealer)) {
            setWinner(1);
        } else {
            setWinner(0);
        }
    }

    function hit() {
        if (standValue) { return }
        handleAdd(cardUser, setCardUser, getRandomInt(1,11));
    }

    function stand() {
        setStandValue(true);
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
            <Typography> Score dealer : {sum(cardDealer)}</Typography>
            <Typography> Score user : {sum(cardUser)}</Typography>
            <Button onClick={() => stand()}>Terminer</Button>
            <Button onClick={() => hit()}>Piocher</Button>
            { winner === 1 && <Typography>Le joueur à gagné</Typography>}
            { winner === 0 && <Typography>L'ordinateur à gagné</Typography>}
        </Grid>
    )
}