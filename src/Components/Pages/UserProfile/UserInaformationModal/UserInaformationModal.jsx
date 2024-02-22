import { Box, Typography } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";


const UserInaformationModal = () => {
  return (
    <>
      <div className="modal-box bg-slate-100">
          <form className="flex justify-end" method="dialog">
            <button className="text-2xl">
              <RxCross2 />
            </button>
          </form>
        <Box>
          <Typography variant="h6">
            <p className="text-center">Give Your Basic Information</p>
          </Typography>

          <div className="mt-5">
            <form className="space-y-5">
              <div className="w-full relative">
                <input type="text" className="rounded-md pl-14 pr-5 py-3 w-full border focus:outline-1 focus:outline-blue-400" placeholder="Enter Your Name" />
                <div className="w-fit absolute top-0 h-full px-3 flex justify-center items-center">
                  <AiOutlineUser className="text-3xl text-blue-700" />
                </div>
              </div>
              <div className="w-full relative">
                <input type="email" className="rounded-md pl-14 pr-5 py-3 w-full border focus:outline-1 focus:outline-blue-400" placeholder="Enter Your Email" />
                <div className="w-fit absolute top-0 h-full px-3 flex justify-center items-center">
                  <MdOutlineEmail className="text-3xl text-blue-700" />
                </div>
              </div>
              <div className="w-full relative">
                <input type="text" className="rounded-md pl-14 pr-5 py-3 w-full border focus:outline-1 focus:outline-blue-400" placeholder="Enter Your Phone Number" />
                <div className="w-fit absolute top-0 h-full px-3 flex justify-center items-center">
                  <FiPhone className="text-3xl text-blue-700" />
                </div>
              </div>
            </form>
          </div>

        </Box>
      </div>
    </>
  );
};

export default UserInaformationModal;
