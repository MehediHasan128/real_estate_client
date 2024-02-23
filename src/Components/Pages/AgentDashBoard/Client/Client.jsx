import { Box, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IoSearch } from "react-icons/io5";

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Client = () => {
  return (
    <>
      <Box className="py-5">
        <Typography variant="h4">
          <p>Clients</p>
        </Typography>
        <Typography>
          <p className="font-semibold text-gray-500">
            View all of your client information.
          </p>
        </Typography>

        <div className="mt-10 mb-3 flex flex-wrap items-center gap-5">
          <div className="flex items-center gap-2">
            <Typography variant="body2">
              <p className="font-semibold">All Clients</p>
            </Typography>
            <div className="bg-pink-200 px-2 rounded-xl">
              <Typography variant="body2">
                <p className="font-semibold text-pink-700">80</p>
              </Typography>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Typography variant="body2">
              <p className="font-semibold">Leads</p>
            </Typography>
            <div className="bg-pink-200 px-2 rounded-xl">
              <Typography variant="body2">
                <p className="font-semibold text-pink-700">40</p>
              </Typography>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Typography variant="body2">
              <p className="font-semibold">Ongoing</p>
            </Typography>
            <div className="bg-pink-200 px-2 rounded-xl">
              <Typography variant="body2">
                <p className="font-semibold text-pink-700">20</p>
              </Typography>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Typography variant="body2">
              <p className="font-semibold">Payment Back</p>
            </Typography>
            <div className="bg-pink-200 px-2 rounded-xl">
              <Typography variant="body2">
                <p className="font-semibold text-pink-700">10</p>
              </Typography>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Typography variant="body2">
              <p className="font-semibold">Closed</p>
            </Typography>
            <div className="bg-pink-200 px-2 rounded-xl">
              <Typography variant="body2">
                <p className="font-semibold text-pink-700">10</p>
              </Typography>
            </div>
          </div>
        </div>

        <Divider />

        <div className="my-8">
          <div>
            <form>
              <div className="relative lg:w-[20%]">
                <input
                  type="text"
                  placeholder="Search your client"
                  className="bg-blue-gray-50 pl-5 pr-10 py-2 rounded-full w-full focus:outline-purple-600"
                />
                <div className=" w-fit absolute top-0 right-0 h-full px-3 flex justify-center items-center rounded-full">
                  <IoSearch className="text-2xl text-purple-700" />
                </div>
              </div>
            </form>
          </div>

          <div></div>
        </div>

        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={2}>Client</StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>
                    Property Title
                  </StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>Client Email</StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>Property For</StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>Order Dtate</StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell align="center" colSpan={2}>
                      <div className="flex items-center justify-center gap-3">
                        <div className="avatar">
                          <div className="w-14 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                          </div>
                        </div>
                        <div>
                            <Typography>
                                <p className="font-semibold">Mehedi Hasan</p>
                            </Typography>
                            <Typography>
                                <p className="font-medium">01302557956</p>
                            </Typography>
                        </div>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="center" colSpan={2}>
                      <Typography variant="body1">
                        <p className="font-medium">Luxury House in Greenville</p>
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center" colSpan={2}>
                    <Typography variant="body1">
                        <p className="font-medium">mehedihasan12926@gmail.com</p>
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center" colSpan={2}>
                    <Typography variant="body1">
                        <p className="font-medium bg-green-200 py-1 rounded-2xl">Sell</p>
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center" colSpan={2}>
                    <Typography variant="body1">
                        <p className="font-medium">21, January 2024</p>
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center" colSpan={2}>
                    <Typography variant="body1">
                        <p className="font-medium">Conatct </p>
                      </Typography>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
    </>
  );
};

export default Client;
