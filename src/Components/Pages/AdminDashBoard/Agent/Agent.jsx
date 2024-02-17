import { Box, Container, Rating, Typography } from "@mui/material";
import useAllUsers from "../../../Hooks/useAllUsers";
import { HiDotsHorizontal } from "react-icons/hi";

const Agent = () => {
  const [allUsers] = useAllUsers();

  return (
    <>
      <Box>

        <Container>
        <Box className="my-5">
        <Typography variant="h4">
          <p className="font-semibold mb-2">Agents(2)</p>
        </Typography>
        <Typography variant="h6">
            <p className="">Most Recent Agent</p>
        </Typography>
        </Box>
          <Box>
            <div className="bg-white w-[40%] p-5 rounded-lg shadow-md">
              <div className=" flex justify-between items-start gap-5">
                
                <div className="flex gap-3">
                <div className="avatar">
                  <div className="w-32 rounded">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>

                <div className="">
                <Typography variant="h6">
                  <p>Mehedi Hasan</p>
                </Typography>
                <Typography variant="body2">
                  <p className="font-semibold text-gray-400 mb-1">mehedihasan12926@gmail.com</p>
                </Typography>

                <Rating name="read-only" value={3} readOnly />

                <div className="mt-2">
                <button className="bg-blue-300 font-medium hover:bg-blue-400 hover:scale-105 px-3 py-1 rounded-md shadow duration-500">See Details</button>
                </div>
              </div>
                </div>

                <button>
                  <HiDotsHorizontal className="text-2xl" />
                </button>
              </div>
            </div>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Agent;
