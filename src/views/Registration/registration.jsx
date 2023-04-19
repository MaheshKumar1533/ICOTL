import React from 'react'
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PageNote from '../pageNote.jsx/pageNote';
import './registration.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundImage: "linear-gradient(to bottom right, #006699, #00547e)",
    color: theme.palette.common.white,
    border: 0,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableBodyCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    backgroundImage: "linear-gradient(to bottom right, #006699, #00547e)",
    fontSize: 16,
    minWidth: 40,
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    border: 0,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const registrationDetails = [
  {
    name: "Student",
    IEEE_memberPrice: 500,
    Non_IEEE_memberPrice:550
  },
  {
    name: "Resercher",
    IEEE_memberPrice: 500,
    Non_IEEE_memberPrice:550
  },
  {
    name: "Faculty",
    IEEE_memberPrice: 500,
    Non_IEEE_memberPrice:550
  },
  {
    name: "student",
    IEEE_memberPrice: 500,
    Non_IEEE_memberPrice:550
  },
  {
    name: "Industry",
    IEEE_memberPrice: 500,
    Non_IEEE_memberPrice:550
  },
];


export default function Registration() {
  return (
    <div className="registrationBody">

      <PageNote />

      {/* <TableContainer component={Paper} sx={{ maxHeight: 620 }}>
        <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 700 }}>
          <TableHead>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="center">IEEE Member</StyledTableCell>
            <StyledTableCell align="center">Non IEEE Member</StyledTableCell>
          </TableHead>
          <TableBody>
            {registrationDetails.map((item, index) => (
              <StyledTableRow>
                <StyledTableBodyCell component="th" scope="row" align="center">
                  {item.name}
                </StyledTableBodyCell>
                <StyledTableCell align="center">
                  &#8377; {item.IEEE_memberPrice}
                </StyledTableCell>
                <StyledTableCell align="center">
                  &#8377; {item.Non_IEEE_memberPrice}
                </StyledTableCell>
              </StyledTableRow>
            ))}
            <StyledTableRow>
              <StyledTableBodyCell component="th" scope="row" align="center">
                Outside Indai
              </StyledTableBodyCell>
              <StyledTableCell align="center">
                $ 25
              </StyledTableCell>
              <StyledTableCell align="center">
                $ 30
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer> */}
    </div>
  );
}
