import GameCard from "../components/GameCard";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";

export default function Games() {
    let games = [
        {title: "Bataille", description: "La bataille un jeu épique", image: "https://cdn-icons-png.flaticon.com/512/3522/3522092.png"},
        {title: "BlackJack", description: "La bataille un jeu épique", image: "https://cdn-icons-png.flaticon.com/512/3522/3522092.png"}
    ]
    return (
        <Grid>
            <Grid container justifyContent="center">
                <Typography variant="h2">Jeux</Typography>
            </Grid>
        <Grid container spacing={2} gap={2} margin={2}>
            {games.map((e) => <GameCard
                title={e.title}
                description={e.title}
                image={e.image}
            />)}
        </Grid>
        </Grid>
    )
}