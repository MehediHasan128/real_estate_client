import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { GoPencil } from "react-icons/go";
import { MdDelete } from "react-icons/md";

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

const PropertyTable = ({ filterProperties }) => {

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Property Image</StyledTableCell>
              <StyledTableCell align="center">Property Title</StyledTableCell>
              <StyledTableCell align="center">
                Property Location
              </StyledTableCell>
              <StyledTableCell align="center">Property Type</StyledTableCell>
              <StyledTableCell align="center">Sell Or Rent</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
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
                    <StyledTableCell align="center">
                      <div className="flex justify-center gap-4">
                        {property.status == "pending" ? (
                          <></>
                        ) : (
                          <button className="bg-gradient-to-r from-cyan-500 to-blue-500  px-3 py-2 rounded-lg text-xl text-white hover:scale-110 duration-500">
                            <GoPencil />
                          </button>
                        )}
                        <button className="bg-gradient-to-r from-[#c31432] to-[#6f448f]  px-3 py-2 rounded-lg text-xl text-white hover:scale-110 duration-500">
                          <MdDelete />
                        </button>
                      </div>
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

export default PropertyTable;
