import { Box, Rating, Typography } from "@mui/material";
import useAllUsers from "../../../Hooks/useAllUsers";
import { HiDotsHorizontal } from "react-icons/hi";
import AgentDetailsModal from "../AgentDetailsModal/AgentDetailsModal";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Agent = () => {
  const [selectUser, setSelectUser] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [allUsers] = useAllUsers();

  const allAgent = allUsers.filter(user => user.userRole == 'Agent')

  const handelUserModal = (id) => {
    axiosPublic.get(`/user/${id}`).then((res) => {
      setSelectUser(res.data);
      document.getElementById("my_modal_5").showModal();
    });
  };

  return (
    <>
      <Box className="lg:px-16">
        <Box className="my-5">
          <Typography variant="h4">
            <p className="font-semibold mb-2">Agents({allAgent.length})</p>
          </Typography>
          <Typography variant="h6">
            <p className="">Most Recent Agent</p>
          </Typography>
        </Box>
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {allAgent.map((user) => (
            <>
              <div
                key={user._id}
                className="bg-white p-3 lg:p-5 rounded-lg shadow-md"
              >
                <div className=" flex justify-between items-start lg:gap-5">
                  <div className="flex gap-3">
                    <div className="avatar">
                      <div className="w-24 lg:w-32 rounded">
                        <img src={user.profilePicture} />
                      </div>
                    </div>

                    <div className="">
                      <Typography variant="h6">
                        <p>{user.userName}</p>
                      </Typography>
                      <Typography variant="body2">
                        <p className="font-semibold text-gray-400 mb-1">
                          {user.userEmail}
                        </p>
                      </Typography>

                      <Rating name="read-only" value={3} readOnly />

                      <div className="mt-2">
                        <button
                          onClick={() => handelUserModal(user._id) }
                          className="bg-pink-200 font-medium hover:bg-pink-300 hover:scale-105 px-3 py-1 rounded-md shadow duration-500 text-pink-800"
                        >
                          See Details
                        </button>
                      </div>
                    </div>
                  </div>

                  <button>
                    <HiDotsHorizontal className="text-2xl" />
                  </button>
                </div>

                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <form method="dialog" className="flex justify-end">
                      {/* if there is a button in form, it will close the modal */}
                      <button>
                        <IoMdClose className="text-3xl" />
                      </button>
                    </form>

                    <AgentDetailsModal userInformation={selectUser} />
                  </div>
                </dialog>
              </div>
            </>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Agent;
