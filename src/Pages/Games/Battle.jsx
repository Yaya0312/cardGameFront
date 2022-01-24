import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const url = "https://raw.githubusercontent.com/tomjamesallen/blackjack-react/master/src/public/img/cards";
export default function Battle() {
    return (
        <Grid>
            <Box>
                <Typography textAlign="center" variant="h3">Round 3</Typography>
            </Box>
            <Grid container flexDirection="row" justifyContent="space-around">
                <Box item>
                    <Typography textAlign="center" variant="h5">Joueur</Typography>
                    <img src={`${url}/s-3.svg`} width="150" height="180"/>
                </Box>
                <Box item>
                    <Typography textAlign="center" variant="h5">Ordinateur</Typography>
                    <img src={`${url}/s-6.svg`} width="150" height="180"/>
                </Box>
            </Grid>
            <Box container>
                <Typography textAlign="center" >Score Joueur 1 </Typography>
                <Typography textAlign="center" >Score Ordinateur 2 </Typography>
            </Box>
            <Grid justifyContent="center" container>
                <Button variant="contained" >Jouer</Button>
            </Grid>
        </Grid>
    )
}