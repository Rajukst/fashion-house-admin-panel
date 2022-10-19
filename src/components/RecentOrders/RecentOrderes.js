import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const RecentOrderes = () => {
  const [products, setProducts]= useState([]);
  useEffect(()=>{
    const url= 'http://localhost:5000/productes'
    fetch(url)
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
   
      

    return (
        <div>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">SKU</StyledTableCell>
            <StyledTableCell align="right">Total Price</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.slice(5,10).map((manageTable) => (
            <StyledTableRow key={manageTable._id}>
              <StyledTableCell component="th" scope="row">
                {manageTable._id}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {manageTable.name}
              </StyledTableCell>
              <StyledTableCell align="right">{manageTable.newDate}</StyledTableCell>
              <StyledTableCell align="right">{manageTable.sku}</StyledTableCell>
              <StyledTableCell align="right">{manageTable.price}</StyledTableCell>
              <StyledTableCell align="right"><button>{manageTable.status}</button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default RecentOrderes;