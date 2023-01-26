import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

import { IUser } from '../../models/IUser';
import { StyledTableCell, StyledTableRow } from './Table.styled';

type props = {
    data: IUser[];
};

const UserTable = ({ data }: props) => {
    return (
        <TableContainer component={Paper} className="table__container">
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Index</StyledTableCell>
                        <StyledTableCell align="center">Random ID</StyledTableCell>
                        <StyledTableCell align="center">Full Name</StyledTableCell>
                        <StyledTableCell align="center">Address</StyledTableCell>
                        <StyledTableCell align="center">Phone No</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item: IUser, index: number) => (
                        <StyledTableRow key={index} className="table__row">
                            <StyledTableCell align="center">{index + 1}</StyledTableCell>
                            <StyledTableCell align="center">{item.id}</StyledTableCell>
                            <StyledTableCell align="center">
                                {item.name.first} {item.name.last}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {item.location.country} {item.location.city}{' '}
                                {item.location.street.name} {item.location.street.number}
                            </StyledTableCell>
                            <StyledTableCell align="center">{item.phone}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
