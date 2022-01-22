import {Card, CardActionArea, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export default function GameCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.image}
                    alt="battle image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {
                    props.playable ?
                        <Button size="small" color="primary">Jouer</Button> :
                        <Button size="small" color="primary" disabled>Indisponible</Button>
                }
                {
                    props.disabled ?
                        <Button size="small" variant="contained" color="success">Activer</Button> :
                        <Button size="small" variant="contained" color="error" >Désactiver</Button>
                }
            </CardActions>
        </Card>
    )
}