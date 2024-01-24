import { Box, Divider, Typography } from "@mui/material";
// React icons
import { BiPencil } from "react-icons/bi";
import { MdManageAccounts, MdOutlineClose } from "react-icons/md";
import ImageModal from "./ImageModal/ImageModal";
import useAuthProvider from "../../../Hooks/useAuthProvider";

const Profile = () => {

  const {user} = useAuthProvider();
  console.log(user);

  return (
    <>
      <Box className="bg-white min-h-screen p-10 rounded-lg shadow-2xl">
        <div>
          <Typography variant="h5">
            <p className="flex items-center gap-3 font-semibold">
              <MdManageAccounts className="text-4xl" /> My Account
            </p>
          </Typography>
        </div>

        <div className="my-5">
          <Divider />
        </div>

        <div>
          <div>
            <Typography variant="h6">
              <p className="font-medium">Profile Picture</p>
            </Typography>
            <Typography variant="OVERLINE TEXT">
              <p className="text-gray-500 font-medium">
                This is the avater the users see when they are chatting with
                you.
              </p>
            </Typography>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <div className="avatar relative">
              <div className="w-24 rounded-xl">
                <img src={user?.photoURL} />
              </div>
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="bg-slate-400 text-white w-fit p-1 rounded-full absolute -top-2 -right-3 border-2 border-white"
              >
                <BiPencil className="text-xl" />
              </button>
              <div>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <div className="modal-action flex justify-end">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button>
                          <Typography variant="h4">
                            <MdOutlineClose />
                          </Typography>
                        </button>
                      </form>
                    </div>
                    <div className="flex justify-center">
                      <ImageModal />
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
            <div>
              <Typography variant="h5">
                <p className="font-medium">Mehedi Hasan</p>
              </Typography>
              <Typography variant="OVERLINE TEXT">
                <p className="font-medium">Buyer</p>
              </Typography>
            </div>
          </div>

          <div className="mt-10 lg:mt-20 mb-10">
            <Typography variant="h6">
              <p className="font-medium">Personal Information</p>
            </Typography>
            <Typography variant="OVERLINE TEXT">
              <p className="text-gray-500 font-medium">
                By letting us know your name, we can make our support experience
                much more personal.
              </p>
            </Typography>
          </div>

          <div className="md:w-[80%]">
            <form className="flex flex-col lg:flex-row gap-10">
              <div className="w-full space-y-3">
                <div className="flex justify-between flex-col md:flex-row gap-5 lg:gap-0">
                  <div>
                    <label>
                      <Typography variant="h6">
                        <p>First Name</p>
                      </Typography>
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.displayName}
                      className="bg-slate-50 px-5 py-3 rounded-md w-full border focus:outline-none"
                    />
                  </div>
                  <div>
                    <label>
                      <Typography variant="h6">
                        <p>Last Name</p>
                      </Typography>
                    </label>
                    <input
                      type="text"
                      className="bg-slate-50 px-5 py-3 rounded-md w-full border focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label>
                    <Typography variant="h6">
                      <p>Email Address</p>
                    </Typography>
                  </label>
                  <input
                    type="email"
                    className="bg-slate-50 px-5 py-3 rounded-md w-full border focus:outline-none"
                  />
                </div>
                <div>
                  <label>
                    <Typography variant="h6">
                      <p>Phone Number</p>
                    </Typography>
                  </label>
                  <input
                    type="text"
                    className="bg-slate-50 px-5 py-3 rounded-md w-full border focus:outline-none"
                  />
                </div>
                <div>
                  <label>
                    <Typography variant="h6">
                      <p>Role</p>
                    </Typography>
                  </label>
                  <input
                    type="text"
                    className="bg-slate-50 px-5 py-3 rounded-md w-full border focus:outline-none"
                  />
                </div>
              </div>

              <div className="w-full">
                <label>
                  <Typography variant="h6">
                    <p>You Full Address</p>
                  </Typography>
                </label>
                <textarea
                  className="bg-slate-50 px-5 py-3 rounded-md w-full border focus:outline-none"
                  cols="30"
                  rows="9"
                ></textarea>

                <input type="submit" value="Update Profile" className="px-5 py-3 bg-blue-400 mt-5 rounded-md font-semibold text-white cursor-pointer" />
              </div>
            </form>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Profile;
