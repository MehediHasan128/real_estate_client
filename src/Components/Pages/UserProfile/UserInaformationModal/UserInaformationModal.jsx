import { Box, Typography } from "@mui/material";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail, MdOutlineLocalOffer } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuthProvider from "../../../Hooks/useAuthProvider";
import Swal from "sweetalert2";
import { ThemeProvider } from "@material-tailwind/react";

import {
  Dialog,
  DialogHeader,
  DialogBody
} from "@material-tailwind/react";
import moment from "moment";

const UserInaformationModal = ({ property, open, handleOpen }) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuthProvider();
  const email = user?.email;
  const buyerImage = user?.photoURL;
  const { propertyTitle, _id, ownerEmail, advertisementType, propertyType } = property;

  const { register, handleSubmit } = useForm();
  const orderDate = moment().format("DD, MMMM YYYY");

  const handelSubmitBuyerInformation = (data) => {
    const { buyerEmail, buyerName, buyerPhone, offerPrice } = data;

    const buyerAndProductInfo = {
      propertyId: _id,
      ownerEmail,
      propertyTitle,
      buyerEmail,
      buyerName,
      buyerPhone,
      offerPrice,
      orderDate,
      buyerImage,
      propertyType,
      propertyFor: advertisementType
    };
    axiosPublic.post("/clients", buyerAndProductInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title:
            "Thanks for give your information. Our agent will contact you very soon.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You have already sent your information",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <>
      <ThemeProvider>

        <Dialog
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>
            <Typography variant="h6">
              <p className="text-center">Give Your Basic Information</p>
            </Typography>
          </DialogHeader>
          <DialogBody>
            <div>
              <Box>
                <form
                  onSubmit={handleSubmit(handelSubmitBuyerInformation)}
                  className="space-y-5"
                >
                  <div className="w-full relative">
                    <input
                      {...register("buyerName")}
                      type="text"
                      className="rounded-md pl-14 pr-5 py-3 w-full border focus:outline-1 focus:outline-blue-400 font-medium text-black"
                      placeholder="Enter Your Name"
                    />
                    <div className="w-fit absolute top-0 h-full px-3 flex justify-center items-center">
                      <AiOutlineUser className="text-3xl text-blue-700" />
                    </div>
                  </div>

                  <div className="w-full relative">
                    <input
                      {...register("buyerEmail")}
                      type="email"
                      className="rounded-md pl-14 pr-5 py-3 w-full border focus:outline-1 focus:outline-blue-400 font-medium text-black"
                      defaultValue={email}
                    />
                    <div className="w-fit absolute top-0 h-full px-3 flex justify-center items-center">
                      <MdOutlineEmail className="text-3xl text-blue-700" />
                    </div>
                  </div>

                  <div className="w-full relative">
                    <input
                      {...register("buyerPhone")}
                      type="text"
                      className="rounded-md pl-14 pr-5 py-3 w-full border focus:outline-1 focus:outline-blue-400 font-medium text-black"
                      placeholder="Enter Your Phone Number"
                    />
                    <div className="w-fit absolute top-0 h-full px-3 flex justify-center items-center">
                      <FiPhone className="text-3xl text-blue-700" />
                    </div>
                  </div>

                  <div className="w-full relative">
                    <input
                      {...register("offerPrice")}
                      type="text"
                      className="rounded-md pl-14 pr-5 py-3 w-full border focus:outline-1 focus:outline-blue-400 font-medium text-black"
                      placeholder="Enter your offer price"
                    />
                    <div className="w-fit absolute top-0 h-full px-3 flex justify-center items-center">
                      <MdOutlineLocalOffer className="text-3xl text-blue-700" />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={handleOpen}
                      className="bg-blue-400 w-full rounded-md py-3 font-semibold hover:bg-blue-500 duration-700 text-black"
                    >
                      Submit Information
                    </button>
                  </div>
                </form>
              </Box>
            </div>
          </DialogBody>
        </Dialog>
      </ThemeProvider>
    </>
  );
};

export default UserInaformationModal;
