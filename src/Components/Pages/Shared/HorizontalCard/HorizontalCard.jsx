import { Avatar, Box, Divider, Typography } from "@mui/material";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { MdVerified } from "react-icons/md";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

const HorizontalCard = ({
  id,
  img,
  state,
  country,
  title,
  price,
  description,
  bed,
  bath,
  size,
  ownerImg,
  ownerName,
}) => {
  return (
    <>
      <Box className="bg-white p-2 rounded-lg flex">
        <Box className="w-[40%]">
          <img className="rounded-lg h-80 object-cover" src={img} alt="" />
        </Box>
        <Box className="w-[60%] p-5 flex justify-between">
          <Box className="w-[65%]">
            <div className="space-y-2">
              <Typography variant="h4">
                <p className="font-medium">{title}</p>
              </Typography>
              <div className="flex items-center gap-5">
                <Typography variant="h5">
                  <p className="font-medium text-blue-500">${price}</p>
                </Typography>
                <MdVerified className="text-xl text-blue-700" />
              </div>
              <Typography>
                <p>{description}</p>
              </Typography>
            </div>

            <div className="flex gap-5 text-gray-600 my-5">
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

            <Divider />

            <div className="h-16 mt-3 flex items-center">
              <div className="flex justify-between w-full">
                <Box className="flex items-center gap-2">
                  <Avatar alt="Remy Sharp" src={ownerImg} />
                  <Typography>
                    <p className="text-sm font-medium">{ownerName}</p>
                  </Typography>
                </Box>
                <Link to={`/propertyDetails/${id}`}>
                  <button className="px-3 py-1 rounded-md bg-[#1b1b1b] text-white">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </Box>
          <Divider orientation="vertical" />
          <Box className="space-y-6">
            <div>
              <Typography className="flex justify-end items-center gap-3">
                <ShareIcon />
                <FavoriteBorderIcon />
              </Typography>
            </div>
            <Box>
              <Typography className="flex items-center">
                <p>
                  {state}, {country}
                </p>
                <LocationOnIcon />
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HorizontalCard;
