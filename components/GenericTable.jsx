import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  { React,useState,useEffect } from 'react';
import json from './test.json'
import APPConfig from '.././appConfig'


let styleFromAjax = json.tableStyle[0].styles.backgroundColor;
let styleColorFromAjax = json.tableStyle[0].styles.color

console.log("styleFromAjax",styleFromAjax)

const StyledTableCell = styled(TableCell)(({ theme }) => ({
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

export default function GenericTable() {

  const[genericTabStyle, setGenericTabStyle] = useState({});
  const[tableData, setTableData] = useState([]);

  /*useEffect(function(){

  console.log("testJson ::: ",json);
  //json.tableStyle

  json.tableStyle.forEach((style)=>{
      console.log("style",style);
      if(style.view==='generic')
      setGenericTabStyle(style.styles);
  })
 
  },[])*/

  useEffect(() => {
    fetch(APPConfig.api.table)
      .then(response => {
        console.log('from table api success callback');
        console.log(response.json);
        return response.json()
      })
      .then(data => {
        console.log("next js table result", JSON.stringify(data));
        console.log("result", data.tableStyle);
        setTableData(data.tableData)
        data.tableStyle.forEach((style)=>{
          console.log("style",style);
          if(style.view==='generic')
          setGenericTabStyle(style.styles);
          
      })
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={genericTabStyle.minWidth} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
