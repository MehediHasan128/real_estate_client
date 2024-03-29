import { Box, Container, Divider, Typography } from "@mui/material";

import { GrLocation } from "react-icons/gr";
import { IoBedOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";
import { useState } from "react";

// React Icons
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import UserInaformationModal from "../UserProfile/UserInaformationModal/UserInaformationModal";

const PropertyDetails = () => {
  const property = useLoaderData();
  const {
    propertyImage,
    totalRoom,
    totalBathroom,
    propertySize,
    price,
    state,
    country,
    ownerName,
    ownerEmail,
    ownerImage,
    userStatus,
    propertyDescription,
    propertyTitle
  } = property;
  const [isExpand, setIsExpand] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <Box className="flex relative bg-slate-50 min-h-screen">
      <Container>
        <Box className="mt-32">
          <Typography variant="h4">
            <p className="font-medium">{propertyTitle}</p>
          </Typography>

          <Box className="bg-white rounded-xl p-5 shadow-lg mt-5">
            <div className="mb-5 flex flex-col lg:flex-row gap-5">
              <div className="lg:w-[80%]">
                <img
                  className="w-[100%] lg:h-[450px] object-cover rounded-lg"
                  src={propertyImage}
                  alt=""
                />
              </div>
              <div className="lg:h-[450px] w-[100%] lg:w-[24%] flex flex-row lg:flex-col gap-5">
                <img
                  className="w-[60%] lg:w-[100%] lg:h-full object-cover rounded-lg"
                  src={propertyImage}
                  alt=""
                />
                <div className="relative h-full lg:h-auto">
                  <img
                    className="w-[100%] object-cover rounded-lg brightness-75"
                    src={propertyImage}
                    alt=""
                  />
                  <div className="absolute top-0 w-full h-full rounded-lg flex justify-center items-center">
                    <button className="px-3 md:px-7 lg:px-10 py-1 md:py-2 lg:py-3 bg-opacity-20 backdrop-blur-lg bg-white text-sm md:text-lg lg:text-xl font-medium lg:font-semibold rounded-md lg:rounded-xl text-white">
                      +20
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Box className="flex flex-col md:flex-row gap-10 mt-5">
              <div>
                <Typography variant="h5">
                  <p className="font-semibold">
                    USD <span className="text-blue-500">${price}</span>
                  </p>
                </Typography>
                <Typography variant="body1">
                  <p className="flex items-center gap-1 my-2">
                    <GrLocation className="text-xl" /> {state}, {country}
                  </p>
                </Typography>
                <div className="flex gap-5">
                  <Typography variant="body1">
                    <p className="flex items-center gap-2 font-medium">
                      <IoBedOutline className="text-xl text-blue-500" />{" "}
                      {totalRoom} Bed
                    </p>
                  </Typography>
                  <Typography variant="body1">
                    <p className="flex items-center gap-2 font-medium">
                      <PiBathtub className="text-xl text-blue-500" />{" "}
                      {totalBathroom} Bath
                    </p>
                  </Typography>
                  <Typography variant="body1">
                    <p className="flex items-center gap-2 font-medium">
                      <SlSizeFullscreen className="text-xl text-blue-500" />{" "}
                      {propertySize}
                      ft<sup>2</sup>
                    </p>
                  </Typography>
                </div>
              </div>

              <div className="hidden md:flex">
                <Divider orientation="vertical" variant="middle" />
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={ownerImage} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Typography variant="h6">
                      <p>{ownerName}</p>
                    </Typography>
                    {userStatus == "verified" ? (
                      <>
                        {" "}
                        <MdVerified className="text-xl text-blue-500" />
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <Typography variant="body1">
                  <p className="font-medium mt-2">{ownerEmail}</p>
                </Typography>
              </div>
            </Box>

            <div className="my-5">
              <Divider />
            </div>

            <div className="flex flex-col md:flex-row gap-10 lg:gap-0 justify-between items-start">
              <div className="md:w-[60%] lg:w-[70%]">
                <Typography variant="h6">
                  <p className="font-medium">Property information</p>
                </Typography>
                <Typography variant="body1">
                  <p className="font-medium text-justify mt-3">
                    {propertyDescription.length > 200 ? (
                      <>
                        {isExpand ? (
                          <>
                            {`${propertyDescription}`} <br />
                            <button
                              className="text-blue-500"
                              onClick={() => {
                                setIsExpand(!isExpand);
                              }}
                            >
                              Read Less
                            </button>
                          </>
                        ) : (
                          <>
                            {`${propertyDescription.slice(0, 280)}`}{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#424242] to-[#f0f0f0]">{`${propertyDescription.slice(
                              281,
                              310
                            )}`}</span>{" "}
                            <br />
                            <button
                              className="text-blue-500"
                              onClick={() => {
                                setIsExpand(!isExpand);
                              }}
                            >
                              Read More
                            </button>{" "}
                          </>
                        )}
                      </>
                    ) : (
                      `${propertyDescription}`
                    )}
                  </p>
                </Typography>

                <button
                  onClick={handleOpen}
                  className="px-5 py-3 mt-5 bg-blue-500 hover:bg-blue-600 duration-500 rounded-lg font-semibold text-white leading-tight"
                >
                  Purches Property
                </button>
                
              </div>
              <div className="border border-blue-500 rounded-lg p-8 text-left space-y-4">
                <Typography variant="h5">
                  <p className="font-medium">Agent Information</p>
                </Typography>
                <div>
                  <Typography variant="h6">
                    <p className="font-semibold text-blue-500">{ownerName}</p>
                  </Typography>
                  <Typography variant="body1">
                    <p className="flex items-center gap-1 font-medium">
                      <CiLocationOn className="text-lg text-blue-500" /> Dhaka,
                      Bangladesh
                    </p>
                  </Typography>
                </div>

                <button className="flex items-center gap-2 text-xl px-5 py-2 border border-blue-500 rounded-lg font-semibold hover:bg-blue-500 hover:text-white duration-500">
                  <FaPhoneAlt /> Contact
                </button>
              </div>
            </div>
          </Box>
        </Box>
        <UserInaformationModal
          property={property}
          open={open}
          handleOpen={handleOpen}
        />
      </Container>
    </Box>
  );
};

export default PropertyDetails;
