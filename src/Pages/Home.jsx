import * as React from 'react';
import Grid from "@mui/material/Grid";


export default function Home() {
    return (
        <Grid sx={{
            backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/b38e4925095973.56f57df922fac.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>

        </Grid>
    )
}