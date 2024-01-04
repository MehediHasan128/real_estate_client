import { Avatar, Box, Container, Divider, Typography } from "@mui/material";
// Import Image
import img from "../../../../assets/Properties/property1.jpg";

import LocationOnIcon from "@mui/icons-material/LocationOn";

// React icons
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Advertisement = () => {
  return (
    <div className="mb-36">
      <Box className="my-24">
        <Box className="w-fit mx-auto mb-8">
          <Typography variant="h3">
            <p className="font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#70318f] to-[#f01f2d]">
                Latest
              </span>{" "}
              Properties
            </p>
          </Typography>
          <hr className="border-2 w-[30%] mx-auto mt-3 border-[#f01f2d]" />
        </Box>
        <Box className="lg:w-[50%] mx-auto">
          <Typography variant="body1">
            <p className="font-medium text-justify lg:text-center px-3 lg:px-0">
              Discover Your Dream Home Today! Explore our latest properties
              showcasing exquisite homes in prime locations. From modern
              apartments to luxurious estates, find the perfect property that
              matches your lifestyle.
            </p>
          </Typography>
        </Box>
      </Box>
      <Container>
        <Box>
          <Box className="w-96 cursor-pointer bg-slate-50 rounded-lg shadow-lg p-2 hover:-translate-y-2 duration-500">

            {/* Card Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                className="object-cover brightness-75 hover:scale-110 duration-700 rounded-lg"
                src={img}
                alt=""
              />
              <Box className="absolute bottom-1 left-1 w-full text-white">
                <Typography className="flex items-center">
                  <LocationOnIcon />
                  <p>Dhaka, Bangladesh</p>
                </Typography>
              </Box>
              <Box sx={{background: 'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0))'}} className="absolute top-0 p-3 w-full text-white">
              <Typography className="flex justify-end items-center gap-3">
                  <ShareIcon />
                  <FavoriteBorderIcon />
                </Typography>
              </Box>
            </div>

            {/* Card contect */}
            <div className="p-3">
              <div>
                <Typography variant="h5">
                  <p className="font-medium">Luxury House in Greenville</p>
                </Typography>
                <Typography variant="h6">
                  <p className="my-3">$860,000</p>
                </Typography>
                <Typography variant="body2">
                  <p className="w-[95%]">
                    This property is mostly wooded and sits high on a hilltop
                    overlooking the Mohawk River Val
                  </p>
                </Typography>

                {/* Property details */}
                <div className="mt-5 flex gap-5 text-gray-600">
                  <Typography className="flex items-center gap-1">
                    <IoBedOutline className="text-2xl" />
                    <p>6</p>
                  </Typography>
                  <Typography className="flex items-center gap-1">
                    <PiBathtub className="text-2xl" />
                    <p>6</p>
                  </Typography>
                  <Typography className="flex items-center gap-1">
                    <SlSizeFullscreen className="text-xl" />
                    <p>
                      160 ft<sup>2</sup>
                    </p>
                  </Typography>
                </div>

                {/* Divider */}
                <div className="my-5">
                  <Divider variant="middle" />
                </div>

                {/* Advertigment Owner */}
                <div className="flex items-center justify-between">
                  <Box className="flex items-center gap-2">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                    />
                    <Typography>
                      <p className="text-sm font-medium">Mehedi Hasan</p>
                    </Typography>
                  </Box>
                  <Box>
                    <button className="px-3 py-1 rounded-md bg-[#1b1b1b] text-white">Details</button>
                  </Box>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Advertisement;
