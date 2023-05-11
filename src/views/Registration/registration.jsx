import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PageNote from "../pageNote.jsx/pageNote";
import "./registration.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundImage: "linear-gradient(to bottom right, #002c83, #02266f)",
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
    backgroundImage: "linear-gradient(to bottom right, #002c83, #02266f)",
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


export default function Registration() {
  return (
    <div className="registrationBody">
      <div className="tableTitle">
        <label>Early Bird Registration</label>
      </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell align="center">IEEE Member</StyledTableCell>
              <StyledTableCell align="center">Non IEEE Member</StyledTableCell>
              <StyledTableCell align="center">
                LifeTime IEEE Member
              </StyledTableCell>
              <StyledTableCell align="center">
                Student IEEE Member
              </StyledTableCell>
              <StyledTableCell align="center">
                Student Non IEEE Member
              </StyledTableCell>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableBodyCell component="th" scope="row" align="center">
                  Indian
                </StyledTableBodyCell>
                <StyledTableCell align="center">&#8377; 1000</StyledTableCell>
                <StyledTableCell align="center">&#8377; 2000</StyledTableCell>
                <StyledTableCell align="center">&#8377; 3000</StyledTableCell>
                <StyledTableCell align="center">&#8377; 3500</StyledTableCell>
                <StyledTableCell align="center">&#8377; 4000</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableBodyCell component="th" scope="row" align="center">
                  Foreigner
                </StyledTableBodyCell>
                <StyledTableCell align="center">$ 25</StyledTableCell>
                <StyledTableCell align="center">$ 25</StyledTableCell>
                <StyledTableCell align="center">$ 25</StyledTableCell>
                <StyledTableCell align="center">$ 25</StyledTableCell>
                <StyledTableCell align="center">$ 30</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>


      <div className="tableTitle">
        <label>Late Registration</label>
        <p>(After October 15<sup>th</sup>, 2023)</p>
      </div>
      {/* <div style={{maxHeight:300}}>
        <PageNote/>
      </div> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell align="center">IEEE Member</StyledTableCell>
              <StyledTableCell align="center">Non IEEE Member</StyledTableCell>
              <StyledTableCell align="center">
                LifeTime IEEE Member
              </StyledTableCell>
              <StyledTableCell align="center">
                Student IEEE Member
              </StyledTableCell>
              <StyledTableCell align="center">
                Student Non IEEE Member
              </StyledTableCell>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableBodyCell component="th" scope="row" align="center">
                  Indian
                </StyledTableBodyCell>
                <StyledTableCell align="center">&#8377; 1000</StyledTableCell>
                <StyledTableCell align="center">&#8377; 2000</StyledTableCell>
                <StyledTableCell align="center">&#8377; 3000</StyledTableCell>
                <StyledTableCell align="center">&#8377; 3500</StyledTableCell>
                <StyledTableCell align="center">&#8377; 4000</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableBodyCell component="th" scope="row" align="center">
                  Foreigner
                </StyledTableBodyCell>
                <StyledTableCell align="center">$ 25</StyledTableCell>
                <StyledTableCell align="center">$ 25</StyledTableCell>
                <StyledTableCell align="center">$ 25</StyledTableCell>
                <StyledTableCell align="center">$ 25</StyledTableCell>
                <StyledTableCell align="center">$ 30</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  );
}
