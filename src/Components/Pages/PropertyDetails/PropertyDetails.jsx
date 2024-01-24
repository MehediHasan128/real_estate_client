import { Box, Container, Divider, Typography } from "@mui/material";
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
            <div className="mb-5 flex gap-5">
              <div className="w-[80%]">
                <img
                  className="w-[100%] h-[450px] object-cover rounded-lg"
                  src={property}
                  alt=""
                />
              </div>
              <div className="h-[450px] w-[24%] flex flex-col gap-5">
                <img
                  className="w-[100%] h-full object-cover rounded-lg"
                  src={property}
                  alt=""
                />
                <div className="relative">
                  <img
                    className="w-[100%] object-cover rounded-lg brightness-75"
                    src={property}
                    alt=""
                  />
                  <div className="absolute top-0 w-full h-full rounded-lg flex justify-center items-center">
                    <button className="px-10 py-3 bg-opacity-20 backdrop-blur-lg bg-white text-xl font-semibold rounded-xl text-white">
                      +20
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Box className="flex gap-10 items-center">
              <div>
                <Typography variant="h5">
                  <p className="font-semibold">USD $ 68,000</p>
                </Typography>
                <Typography variant="body1">
                  <p className="flex items-center gap-1 my-2">
                    <GrLocation className="text-xl" /> Dhaka, Bangladesh
                  </p>
                </Typography>
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
              </div>

              <Divider orientation="vertical" variant="middle" flexItem />

              <div>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div>
                    <Typography variant="h6">
                      <p>Mehedi Hasan</p>
                    </Typography>
                  </div>
                </div>
                <Typography variant="body1">
                  <p className="font-medium mt-2">mehediHasan12926@gmail.com</p>
                </Typography>
              </div>
            </Box>

            <div className="my-5">
              <Divider />
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PropertyDetails;
