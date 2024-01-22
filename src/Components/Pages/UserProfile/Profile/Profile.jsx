import { Avatar, Box, Container, Typography } from "@mui/material";
// React icons
import { BiPencil } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import ImageModal from "./ImageModal/ImageModal";

const Profile = () => {
  return (
    <>
      <Container>
        <Box className="flex justify-center lg:items-center min-h-screen mt-10 lg:mt-0">
          <Box>
            <div className="flex items-center gap-5 bg-slate-100 px-20 py-5 rounded-lg">
              <div className="relative">
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg"
                  sx={{
                    width: { sx: "20", lg: "100px" },
                    height: { sx: "20", lg: "100px" },
                  }}
                />
                <button
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="bg-slate-200 w-fit p-1 rounded-full absolute top-0 -right-1 border-2 border-white"
                >
                  <BiPencil className="text-xl" />
                </button>
              </div>
              <div>
                <Typography variant="h6">
                  <p className="font-semibold">Mehedi Hasan Bayzid</p>
                </Typography>
                <div className="w-fit p-[3px] rounded-md bg-[#f01f2d] mt-1">
                  <div className="bg-white rounded-md px-3">
                    <Typography variant="body1">
                      <p className="font-semibold">Buyer</p>
                    </Typography>
                  </div>
                </div>
              </div>
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

            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Profile;
