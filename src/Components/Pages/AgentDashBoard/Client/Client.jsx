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
import useClient from "../../../Hooks/useClient";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useState } from "react";

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



const Client = () => {

  const axiosPublic = useAxiosPublic();
  const {register, handleSubmit} = useForm();

  const [clients] = useClient();
  const [allClients, setAllClients] = useState(clients);

  const handelSearchClient = (data) =>{
    axiosPublic.get(`/clients/${data.serachID}`)
    .then(res =>{
      setAllClients(res.data)
    })
  }

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
                <p className="font-semibold text-pink-700">{clients.length}</p>
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
            <form onSubmit={handleSubmit(handelSearchClient)}>
              <div className="relative lg:w-[20%]">
                <input
                {...register("serachID")}
                  type="text"
                  placeholder="Search your client by ID"
                  className="bg-blue-gray-50 pl-5 pr-10 py-2 rounded-full w-full focus:outline-purple-600"
                />
                <button type="submit" className=" w-fit absolute top-0 right-0 h-full px-3 flex justify-center items-center rounded-full">
                  <IoSearch className="text-2xl text-purple-700" />
                </button>
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
                  <StyledTableCell align="center" colSpan={2}>Offer Price ($)</StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allClients.map((client) => (
                  <StyledTableRow key={client._id}>

                    <StyledTableCell align="center" colSpan={2}>
                      <div className="flex items-center justify-center gap-3">
                        <div className="avatar">
                          <div className="w-14 rounded-full">
                            <img src={client.buyerImage} />
                          </div>
                        </div>
                        <div>
                            <Typography>
                                <p className="font-semibold">{client.buyerName}</p>
                            </Typography>
                            <Typography>
                                <p className="font-medium">{client.buyerPhone}</p>
                            </Typography>
                        </div>
                      </div>
                    </StyledTableCell>

                    <StyledTableCell align="center" colSpan={2}>
                      <div className="text-left w-fit mx-auto">
                      <Typography variant="body1">
                        <p className="font-medium">{client.propertyTitle}</p>
                      </Typography>
                      <Typography variant="body2">
                        <p className="font-medium text-blue-600">ID: {client.propertyId}</p>
                      </Typography>
                      </div>
                    </StyledTableCell>

                    <StyledTableCell align="center" colSpan={2}>
                    <Typography variant="body1">
                        <p className="font-medium">{client.buyerEmail}</p>
                      </Typography>
                    </StyledTableCell>

                    <StyledTableCell align="center" colSpan={2}>
                    <Typography variant="body1">
                        <p className={`font-medium py-1 rounded-2xl ${(client.propertyFor == 'Sell')? 'bg-green-100' : 'bg-blue-100 text-blue-900'}`}>{client.propertyFor}</p>
                      </Typography>
                    </StyledTableCell>

                    <StyledTableCell align="center" colSpan={2}>
                    <Typography variant="body1">
                        <p className="font-medium">{client.orderDate}</p>
                      </Typography>
                    </StyledTableCell>

                    <StyledTableCell align="center" colSpan={2}>
                    <Typography variant="body1">
                        <p className="font-medium text-pink-500">${client.offerPrice}</p>
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
