import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './datatable.css'

const Tabledata = () => {
 const createData = (name, email, phone, amountSpent, lastDate) => {
    return { name, email, phone, amountSpent, lastDate}
 }

 const rows = [
    createData('Augustina Eze', 'ezeaugs@gmail.com', 23499787754, '₦109,568.00', 'Dec 10, 2022 • 08:30AM'),
    createData('Augustina Eze', 'ezeaugs@gmail.com', 23499787754, '₦109,568.00', 'Dec 10, 2022 • 08:30AM'),
    createData('Augustina Eze', 'ezeaugs@gmail.com', 23499787754, '₦109,568.00', 'Dec 10, 2022 • 08:30AM'),
    createData('Augustina Eze', 'ezeaugs@gmail.com', 23499787754, '₦109,568.00', 'Dec 10, 2022 • 08:30AM'),
    createData('Augustina Eze', 'ezeaugs@gmail.com', 23499787754, '₦109,568.00', 'Dec 10, 2022 • 08:30AM'),
    createData('Augustina Eze', 'ezeaugs@gmail.com', 23499787754, '₦109,568.00', 'Dec 10, 2022 • 08:30AM'),
    createData('Augustina Eze', 'ezeaugs@gmail.com', 23499787754, '₦109,568.00', 'Dec 10, 2022 • 08:30AM'),
    createData('Augustina Eze', 'ezeaugs@gmail.com', 23499787754, '₦109,568.00', 'Dec 10, 2022 • 08:30AM'),
    createData('Augustina Eze', 'ezeaugs@gmail.com', 23499787754, '₦109,568.00', 'Dec 10, 2022 • 08:30AM'),
    createData('Augustina Eze', 'ezeaugs@gmail.com', 23499787754, '₦109,568.00', 'Dec 10, 2022 • 08:30AM'),
    createData('Augustina Eze', 'ezeaugs@gmail.com', 23499787754, '₦109,568.00', 'Dec 10, 2022 • 08:30AM'),

  ];
  
  return (
    <TableContainer component={Paper}>
    <Table  aria-label="simple table">
      <TableHead sx={{background: '#FCFCFC', border: '0 !important', fontFamily: 'Gordita'}}>
        <TableRow sx={{'&:first-child th' : { border: 'none !important' }}}>
          <TableCell sx={{}}>NAME</TableCell>
          <TableCell sx={{textAlign: 'left'}} align="right">EMAIL</TableCell>
          <TableCell sx={{textAlign: 'center'}} align="right">PHONE</TableCell>
          <TableCell sx={{textAlign: 'right'}}  >AMOUNT &nbsp; SPENT</TableCell>
          <TableCell sx={{textAlign: 'right'}} align="right">LAST &nbsp; USED &nbsp; DATE</TableCell>
        </TableRow>
      </TableHead>
      <TableBody sx={{color: '#4B5054 !important' }}>
        {rows.map((row, index) => (
          <TableRow
            key={row.name}
            sx={{ margin: "10px 0", color: '#4B5054' }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell sx={{color: '#4B5054 !important' }} component="th">{row.email}</TableCell>
            <TableCell sx={{color: '#4B5054 !important' }} align="right">{row.phone}</TableCell>
            <TableCell sx={{color: '#009A49 !important' }} align="right">{row.amountSpent}</TableCell>
            <TableCell sx={{color: '#4B5054 !important' }} align="right">{row.lastDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Tabledata