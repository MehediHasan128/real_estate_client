import { Typography } from "@mui/material";
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

const ActiveProperty = ({ filterProperties }) => {
    return (
        <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Property Image</StyledTableCell>
              <StyledTableCell align="center">Owner Information</StyledTableCell>
              <StyledTableCell align="center">Property Title</StyledTableCell>
              <StyledTableCell align="center"> Property Location</StyledTableCell>
              <StyledTableCell align="center">Property Type</StyledTableCell>
              <StyledTableCell align="center">Sell Or Rent</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterProperties.length > 0 ? (
              <>
                {filterProperties.map((property) => (
                  <StyledTableRow key={property._id}>

                    <StyledTableCell align="center" component="th" scope="row">
                      <div className="w-fit mx-auto">
                        <div className="avatar">
                          <div className="w-14 lg:w-20 rounded-xl">
                            <img src={property.propertyImage} />
                          </div>
                        </div>
                      </div>
                    </StyledTableCell>


                    <StyledTableCell align="center">
                      <Typography variant="body1">
                        <p className="font-semibold">
                          {property.ownerName}
                        </p>
                      </Typography>
                      <Typography variant="body2">
                        <p className="font-semibold">
                          {property.ownerEmail}
                        </p>
                      </Typography>
                    </StyledTableCell>


                    <StyledTableCell align="center">
                      <Typography variant="body1">
                        <p className="font-semibold">
                          {property.propertyTitle}
                        </p>
                      </Typography>
                    </StyledTableCell>


                    <StyledTableCell align="center">
                      <Typography variant="body1">
                        <p className="font-semibold">
                          {property.state}, {property.country}
                        </p>
                      </Typography>
                    </StyledTableCell>


                    <StyledTableCell align="center">
                      <Typography variant="body1">
                        <p className="font-semibold">{property.propertyType}</p>
                      </Typography>
                    </StyledTableCell>


                    <StyledTableCell align="center">
                      <Typography variant="body1">
                        <p className="font-semibold">
                          {property.advertisementType}
                        </p>
                      </Typography>
                    </StyledTableCell>


                  </StyledTableRow>
                ))}
              </>
            ) : (
              <>
                {" "}
                <StyledTableCell colSpan={6} align="center">
                  <Typography variant="h6">
                    <p className="p-5">No Data Found</p>
                  </Typography>
                </StyledTableCell>
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
    );
};

export default ActiveProperty;