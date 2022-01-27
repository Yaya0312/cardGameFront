import {AppBar, Toolbar} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountApi from "../api/AccountApi";
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";


export default function Header() {
    const history = useHistory();
    const tokenInfo = jwt_decode(localStorage.getItem("token"));
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {tokenInfo.sub} ({tokenInfo.roles[tokenInfo.roles.length]})
                    </Typography>
                    <Button color="error" variant="contained" onClick={() => {
                        AccountApi.logout();
                        history.push("/");
                    }}>Déconnexion</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}