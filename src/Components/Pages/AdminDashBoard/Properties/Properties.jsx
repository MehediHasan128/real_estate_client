import { Box, Typography } from "@mui/material";
import useAllProperties from "../../../Hooks/useAllProperties";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { TiTickOutline } from "react-icons/ti";
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

const Properties = () => {
  const [allProperty] = useAllProperties();
  const pendingProperty = allProperty.filter(property => property.status == 'pending');



  return (
    <>
      <Box>
        <Typography variant="h4">
          <p className="text-center my-5">All Property</p>
        </Typography>

        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Serial Number</StyledTableCell>
                  <StyledTableCell colSpan={2} align="center">Property Image</StyledTableCell>
                  <StyledTableCell colSpan={2} align="center">Owner Image</StyledTableCell>
                  <StyledTableCell colSpan={2} align="center">Property Owner</StyledTableCell>
                  <StyledTableCell align="center"> Property Location </StyledTableCell>
                  <StyledTableCell align="center">Property Type</StyledTableCell>
                  <StyledTableCell align="center">Sell Or Rent</StyledTableCell>
                  <StyledTableCell align="center">Size</StyledTableCell>
                  <StyledTableCell align="center">Price</StyledTableCell>
                  <StyledTableCell align="center">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pendingProperty.map((property, idx) => (
                  <StyledTableRow key={property._id}>
                    <StyledTableCell align="center">
                      <Typography variant="body1">
                        <p className="font-semibold">{idx + 1}</p>
                      </Typography>
                    </StyledTableCell>

                    <StyledTableCell
                      colSpan={2}
                      align="center"
                      component="th"
                      scope="row"
                    >
                      <div className="w-fit mx-auto">
                        <div className="avatar">
                          <div className="w-14 lg:w-20 rounded-xl">
                            <img src={property.propertyImage} />
                          </div>
                        </div>
                      </div>
                    </StyledTableCell>

                    <StyledTableCell
                      colSpan={2}
                      align="center"
                      component="th"
                      scope="row"
                    >
                      <div className="w-fit mx-auto">
                        <div className="avatar">
                          <div className="w-14 lg:w-20 rounded-xl">
                            <img src={property.ownerImage} />
                          </div>
                        </div>
                      </div>
                    </StyledTableCell>

                    <StyledTableCell colSpan={2} align="center">
                      <Typography variant="body1">
                        <p className="font-semibold">{property.ownerName}</p>
                      </Typography>
                      <Typography variant="body2">
                        <p className="">{property.ownerEmail}</p>
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
                      <Typography variant="body1">
                        <p className="font-semibold">
                          {property.propertySize} (ft<sup>2</sup>)
                        </p>
                      </Typography>
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      <Typography variant="h6">
                        <p className="font-semibold text-pink-700">
                          $ {property.price}
                        </p>
                      </Typography>
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      <div className="flex gap-3">
                      <button className="bg-gradient-to-r from-[#3ca574] to-[#198391]  px-3 py-2 rounded-lg text-xl text-white hover:scale-110 duration-500">
                        <TiTickOutline  />
                      </button>
                      <button className="bg-gradient-to-r from-[#c31432] to-[#6f448f]  px-3 py-2 rounded-lg text-xl text-white hover:scale-110 duration-500">
                        <MdDelete />
                      </button>
                      </div>
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

export default Properties;
