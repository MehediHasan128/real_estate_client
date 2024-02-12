import property from '../../../../assets/Properties/property1.jpg';

import { Box, Divider, Typography } from "@mui/material";
import { MdOutlineVerified } from "react-icons/md";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaHandPointRight,
} from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";


import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";

const palette = ["#566573 ", "#7710BF", "#BF106A"];

const AgentProfile = () => {
  return (
    <>
      <Box>
        <Box className="lg:w-[80%]">
          <Box className="flex flex-col lg:flex-row gap-10">
            <Box className="bg-white p-5 md:w-[60%] lg:w-[30%] rounded-lg">
              <div>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Typography variant="h6">
                    <p>Mehedi Hasan Bayzid</p>
                  </Typography>
                  <MdOutlineVerified className="text-xl text-blue-500" />
                </div>
              </div>

              <div className="my-5">
                <Divider />
              </div>

              <Typography variant="caption text">
                <div className="text-gray-600 space-y-1">
                  <div className="flex">
                    <p className="w-[25%]">Age:</p>
                    <p>26</p>
                  </div>
                  <div className="flex">
                    <p className="w-[25%]">City:</p>
                    <p>Uttara</p>
                  </div>
                  <div className="flex">
                    <p className="w-[25%]">State:</p>
                    <p>Dhaka</p>
                  </div>
                  <div className="flex">
                    <p className="w-[25%]">Country:</p>
                    <p>Bangladesh</p>
                  </div>
                  <div className="flex">
                    <p className="w-[25%]">Phone:</p>
                    <p>+8801302557956</p>
                  </div>
                  <div className="flex">
                    <p className="w-[25%]">Email:</p>
                    <p>mehedihasan12926@gmail.com</p>
                  </div>
                </div>
              </Typography>

              <div className="my-10">
                <Divider />
              </div>

              <div className="flex justify-center gap-5">
                <div className="bg-blue-500 w-fit p-2 rounded-full shadow-xl text-white hover:bg-blue-600 hover:-translate-y-1 cursor-pointer duration-500">
                  <FaFacebookF className="text-xl" />
                </div>
                <div className="bg-blue-500 w-fit p-2 rounded-full shadow-xl text-white hover:bg-blue-600 hover:-translate-y-1 cursor-pointer duration-500">
                  <FaTwitter className="text-xl" />
                </div>
                <div className="bg-blue-500 w-fit p-2 rounded-full shadow-xl text-white hover:bg-blue-600 hover:-translate-y-1 cursor-pointer duration-500">
                  <FaLinkedinIn className="text-xl" />
                </div>
              </div>
            </Box>

            <Box className="lg:w-[70%] bg-white p-5 rounded-lg">
              <Typography variant="h5">
                <p className="font-semibold">Agent Details</p>
              </Typography>

              <div className="my-5 pr-10">
                <Divider />
              </div>

              <Typography variant="body2">
                <p className="text-justify text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  sint officia qui cum dicta iste nam velit quasi suscipit.
                  Perferendis expedita, omnis molestias magnam nisi possimus,
                  autem ad ut maxime adipisci reprehenderit quo, ipsam nam unde
                  cumque ipsum deleniti porro ab impedit consequuntur dolores!
                  Amet quidem vel debitis a nobis?
                </p>
              </Typography>

              <div className="mt-5">
                <Typography variant="body1">
                  <div className="text-gray-400 space-y-1">
                    <div className="flex items-start">
                      <p className="w-[40%] md:w-[25%] flex items-center gap-1">
                        <FaHandPointRight className="text-blue-400" />
                        Agency
                      </p>
                      <p className="w-[10%]">:</p>
                      <p>Bangladeshi Real Estate</p>
                    </div>
                    <div className="flex items-start">
                      <p className="w-[40%] md:w-[25%] flex items-center gap-1">
                        <FaHandPointRight className="text-blue-400" />
                        Agent Licence
                      </p>
                      <p className="w-[10%]">:</p>
                      <p>1234 8562 6845 12547</p>
                    </div>
                    <div className="flex items-start">
                      <p className="w-[40%] md:w-[25%] flex items-center gap-1">
                        <FaHandPointRight className="text-blue-400" />
                        Tax Number
                      </p>
                      <p className="w-[10%]">:</p>
                      <p>TN1257 RG54 85IU</p>
                    </div>
                    <div className="flex items-start">
                      <p className="w-[40%] md:w-[25%] flex items-center gap-1">
                        <FaHandPointRight className="text-blue-400" />
                        Service area
                      </p>
                      <p className="w-[10%]">:</p>
                      <p>Bangladesh</p>
                    </div>
                  </div>
                </Typography>
              </div>

              <div className="my-5 pr-10">
                <Divider />
              </div>

              <Typography variant="h5">
                <p className="font-semibold">Property Status</p>
              </Typography>

              <div className="grid md:grid-cols-2 mt-5 gap-10 md:gap-0">
                <div>
                  <PieChart
                    series={[
                      {
                        data: [
                          { id: 0, value: 10, label: "Total Listing" },
                          { id: 1, value: 15, label: "Property Sold" },
                          { id: 2, value: 20, label: "Property Rent" },
                        ],
                        highlightScope: {
                          faded: "global",
                          highlighted: "item",
                        },
                        faded: {
                          innerRadius: 30,
                          additionalRadius: -30,
                          color: "gray",
                        },
                      },
                    ]}
                    height={150}
                  />
                </div>
                <div>
                  <PieChart
                    colors={palette}
                    series={[
                      {
                        data: [
                          { id: 0, value: 30, label: "Total Add" },
                          { id: 1, value: 19, label: "Active Add" },
                          { id: 2, value: 11, label: "Pending Add" },
                        ],
                        highlightScope: {
                          faded: "global",
                          highlighted: "item",
                        },
                        faded: {
                          innerRadius: 30,
                          additionalRadius: -30,
                          color: "gray",
                        },
                      },
                    ]}
                    height={150}
                  />
                </div>
              </div>
            </Box>
          </Box>


          <Box className="bg-white mt-8 rounded-lg flex flex-col lg:flex-row items-center lg:gap-5 p-5">
            <Box>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={400}
              height={300}
            />
            </Box>

            <Box>
              <Typography variant="h5">
                <p className="font-semibold">Recent Listing</p>
              </Typography>

              <Box className="mt-5 flex flex-col md:flex-row gap-5 lg:gap-0 items-center">
                <div className='flex gap-5'>
                  <img className='w-[35%] h-52 object-cover rounded-xl' src={property} alt="" />
                  <div>
                      <div className='bg-pink-200 p-2 rounded-lg w-fit mb-5'>
                        <Typography variant='body2'>
                          <p className='text-pink-500 font-semibold'>For Sell</p>
                        </Typography>
                      </div>

                      <Typography variant='h6'>
                        <p>Luxury House in Greenville</p>
                      </Typography>

                      <div className='flex gap-5 mt-3'>
                          <div className='flex items-center gap-2'>
                            <IoBedOutline /> 5
                          </div>
                          <div className='flex items-center gap-2'>
                            <PiBathtubLight /> 3
                          </div>
                          <div className='flex items-center gap-2'>
                            <SlSizeFullscreen /> 190 ft<sup>2</sup>
                          </div>
                      </div>
                  </div>
                </div>
                <div className='flex gap-5'>
                  <img className='w-[35%] h-52 object-cover rounded-xl' src={property} alt="" />
                  <div>
                      <div className='bg-pink-200 p-2 rounded-lg w-fit mb-5'>
                        <Typography variant='body2'>
                          <p className='text-pink-500 font-semibold'>For Sell</p>
                        </Typography>
                      </div>

                      <Typography variant='h6'>
                        <p>Luxury House in Greenville</p>
                      </Typography>

                      <div className='flex gap-5 mt-3'>
                          <div className='flex items-center gap-2'>
                            <IoBedOutline /> 5
                          </div>
                          <div className='flex items-center gap-2'>
                            <PiBathtubLight /> 3
                          </div>
                          <div className='flex items-center gap-2'>
                            <SlSizeFullscreen /> 190 ft<sup>2</sup>
                          </div>
                      </div>
                  </div>
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AgentProfile;
