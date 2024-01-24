import { Avatar, Box, Divider, Typography } from "@mui/material";
import { IoBedOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

const PropertyCard = ({img, location, title, price, description, bed, bath, size, ownerImg, ownerName}) => {
    return (
        <>
            <Box className="cursor-pointer bg-slate-50 rounded-lg p-2 hover:shadow-lg hover:shadow-blue-100 duration-500">
              {/* Card Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  className="object-cover brightness-75 hover:scale-110 duration-700 rounded-lg"
                  src={img}
                  alt=""
                />
                <Box className="absolute bottom-1 left-1 w-full text-white flex items-center justify-between pr-3">
                  <Typography className="flex items-center">
                    <LocationOnIcon />
                    <p>{location}</p>
                  </Typography>
                  <Typography>
                    <MdVerified />
                  </Typography>
                </Box>
                <Box
                  sx={{
                    background:
                      "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0))",
                  }}
                  className="absolute top-0 p-3 w-full text-white"
                >
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
                    <p className="font-medium">{title}</p>
                  </Typography>
                  <Typography variant="h6">
                    <p className="my-3 text-blue-500">${price}</p>
                  </Typography>
                  <Typography variant="body2">
                    <p className="w-[95%]">
                      {description}
                    </p>
                  </Typography>

                  {/* Property details */}
                  <div className="mt-5 flex gap-5 text-gray-600">
                    <Typography className="flex items-center gap-1">
                      <IoBedOutline className="text-2xl" />
                      <p>{bed}</p>
                    </Typography>
                    <Typography className="flex items-center gap-1">
                      <PiBathtub className="text-2xl" />
                      <p>{bath}</p>
                    </Typography>
                    <Typography className="flex items-center gap-1">
                      <SlSizeFullscreen className="text-xl" />
                      <p>
                        {size} ft<sup>2</sup>
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
                        src={ownerImg}
                      />
                      <Typography>
                        <p className="text-sm font-medium">{ownerName}</p>
                      </Typography>
                    </Box>
                    <Box>
                      <Link to='/propertyDetails'>
                      <button className="px-3 py-1 rounded-md bg-[#1b1b1b] text-white">
                        Details
                      </button>
                      </Link>
                    </Box>
                  </div>
                </div>
              </div>
            </Box>
        </>
    );
};

export default PropertyCard;