import * as React from 'react';
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";


export default function Home() {
    return (
        <Grid>
            <Typography>home</Typography>

            <Link href="Games" variant="body2">
                {"Jeux"}
            </Link>
        </Grid>
    )
}