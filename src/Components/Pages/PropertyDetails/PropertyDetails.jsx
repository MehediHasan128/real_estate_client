import { Box, Container, Typography } from "@mui/material";
import property from "../../../assets/Properties/property1.jpg";

import { GrLocation } from "react-icons/gr";
import { IoBedOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";

const PropertyDetails = () => {
  return (
    <Box className="flex relative bg-slate-50 min-h-screen">
      <Container>
        <Box className="mt-32">
          <Typography variant="h4">
            <p className="font-medium">Luxury House in Greenville</p>
          </Typography>

          <Box className="bg-white rounded-xl p-5 shadow-lg mt-5">
            <div className="mb-5">
              <img
                className="w-[60%] h-96 object-cover rounded-lg"
                src={property}
                alt=""
              />
            </div>

            <Box>
              <Typography variant="h5">
                <p className="font-semibold">USD $ 68,000</p>
              </Typography>
              <Typography variant="body1">
                <p className="flex items-center gap-1 my-2">
                  <GrLocation className="text-xl" /> Dhaka, Bangladesh
                </p>
              </Typography>

              <div className="flex items-center justify-between w-[60%]">
                <div className="flex gap-5">
                  <Typography variant="body1">
                    <p className="flex items-center gap-2 font-medium">
                      <IoBedOutline className="text-xl text-blue-500" /> 4 Bed
                    </p>
                  </Typography>
                  <Typography variant="body1">
                    <p className="flex items-center gap-2 font-medium">
                      <PiBathtub className="text-xl text-blue-500" /> 4 Bath
                    </p>
                  </Typography>
                  <Typography variant="body1">
                    <p className="flex items-center gap-2 font-medium">
                      <SlSizeFullscreen className="text-xl text-blue-500" /> 190
                      ft<sup>2</sup>
                    </p>
                  </Typography>
                </div>
                <button className="px-5 py-3 bg-blue-500 font-semibold rounded-xl text-white">Booking Now</button>
              </div>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PropertyDetails;
