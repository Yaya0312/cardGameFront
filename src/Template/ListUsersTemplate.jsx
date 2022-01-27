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
import Container from "@mui/material/Container";

export default function ListUsersTemplate(props) {
    const rows = props.rows;
    return (
        <Container fixed>
            <TableContainer component={Paper} >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>login</TableCell>
                            <TableCell>username</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                            >
                                <TableCell component="th" scope="row">
                                    {row.login}
                                </TableCell>
                                <TableCell>{row.userName}</TableCell>
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
        </Container>
    );
}