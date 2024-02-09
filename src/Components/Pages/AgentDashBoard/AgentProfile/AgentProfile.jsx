import { Box, Divider, Typography } from "@mui/material";
import { MdOutlineVerified } from "react-icons/md";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const AgentProfile = () => {
  return (
    <>
      <Box>
        <Box className="flex gap-10">
        <Box className="bg-white p-5 md:w-[60%] lg:w-[25%] rounded-lg">
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

          <div className="my-5">
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

        <Box className="w-[50%] bg-white p-5 rounded-lg">
            <Typography variant="h5">
                <p className="font-semibold">Agent Details</p>
            </Typography>
            <div className="my-5 pr-10">
                <Divider />
            </div>
            <Typography variant="body2">
                <p className="text-justify text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint officia qui cum dicta iste nam velit quasi suscipit. Perferendis expedita, omnis molestias magnam nisi possimus, autem ad ut maxime adipisci reprehenderit quo, ipsam nam unde cumque ipsum deleniti porro ab impedit consequuntur dolores! Amet quidem vel debitis a nobis?</p>
            </Typography>
        </Box>
        </Box>
      </Box>
    </>
  );
};

export default AgentProfile;
