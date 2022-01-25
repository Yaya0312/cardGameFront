import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ButtonGroup, Grid} from "@mui/material";
import Button from "@mui/material/Button";

const rows = [
    {id: 0, lastname:'l', firstname:"f", mail: "m"},
];

export default function ListUsers() {
    return (
        <Grid container justifyContent="center">
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nom</TableCell>
                            <TableCell>Prénom</TableCell>
                            <TableCell>Mail</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.lastname}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.lastname}</TableCell>
                                <TableCell>{row.firstname}</TableCell>
                                <TableCell>{row.mail}</TableCell>
                                <TableCell align="right">
                                    <ButtonGroup>
                                        <Button variant="contained" color="error" >Bannir</Button>
                                    </ButtonGroup>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}