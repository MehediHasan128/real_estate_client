import { Box, Typography } from "@mui/material";

const CustomerReview = ({ customerImg, customerName, reviewItem, review }) => {
  return (
    <>
      <Box className="p-5 md:p-10 lg:p-20 bg-[#1b1b1b] text-white rounded-3xl mb-10">
        <Box className="flex flex-col md:flex-row justify-center">
          <Box className="md:w-[50%] lg:w-[30%] bg-slate-50 text-black p-5 rounded-md">
            <img
              className="w-full h-48 md:h-72 lg:h-80 object-cover rounded-md"
              src={customerImg}
              alt=""
            />
            <div>
              <Typography variant="h5">
                <p className="font-medium mt-3 text-white">{customerName}</p>
              </Typography>
            </div>
          </Box>
          <Box className="md:w-[60%]">
            <div className="mt-10 lg:mt-20">
              <hr className="border-4 w-[40%] border-[#f01f2d]" />
              <Typography variant="h5">
                <p className="ml-5 mt-3 font-medium">Client Reviews</p>
              </Typography>
            </div>
            <div className="md:ml-10 lg:ml-20 mt-10 lg:mt-20">
              <Typography variant="h5">
                <p className="mb-5 text-blue-300 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#70318f] to-[#f01f2d]">
                  {reviewItem}
                </p>
              </Typography>
              <Typography>
                <p>{review}</p>
              </Typography>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CustomerReview;
