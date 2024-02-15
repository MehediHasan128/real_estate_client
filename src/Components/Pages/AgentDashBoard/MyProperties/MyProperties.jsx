import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  {
    name: "Milk",
    calories: 10,
    fat: 15,
    carbs: 62,
    protein: 56,
  },
  {
    name: "Milk",
    calories: 10,
    fat: 15,
    carbs: 62,
    protein: 56,
  },
  {
    name: "Milk",
    calories: 10,
    fat: 15,
    carbs: 62,
    protein: 56,
  },
  {
    name: "Milk",
    calories: 10,
    fat: 15,
    carbs: 62,
    protein: 56,
  },
];

const MyProperties = () => {
  return (
    <>
      <Box>
        <Box className="mt-5">
          <Typography variant="h4">
            <p className="text-center">My Listing</p>
          </Typography>
        </Box>


        {/* Pending Listing */}
        <Box className="p-5 bg-white rounded-xl mt-10">
          <Typography variant="h6">
            <p className="mb-3 text-pink-500">Pending Listing</p>
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Property Image</StyledTableCell>
                  <StyledTableCell align="center">Property Title</StyledTableCell>
                  <StyledTableCell align="center">Property Location</StyledTableCell>
                  <StyledTableCell align="center">Property Type</StyledTableCell>
                  <StyledTableCell align="center">Sell Or Rent</StyledTableCell>
                  <StyledTableCell align="center">Actions</StyledTableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell align="center" component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.fat}</StyledTableCell>
                    <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.protein}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <button>Delete</button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>


        {/* Active Listing */}
        <Box className="p-5 bg-white rounded-xl mt-10">
          <Typography variant="h6">
            <p className="mb-3 text-green-500">Active Listing</p>
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Property Image</StyledTableCell>
                  <StyledTableCell align="center">Property Title</StyledTableCell>
                  <StyledTableCell align="center">Property Location</StyledTableCell>
                  <StyledTableCell align="center">Property Type</StyledTableCell>
                  <StyledTableCell align="center">Sell Or Rent</StyledTableCell>
                  <StyledTableCell align="center">Actions</StyledTableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell align="center" component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.fat}</StyledTableCell>
                    <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.protein}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <button>Delete</button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

       
        


      </Box>
    </>
  );
};

export default MyProperties;
