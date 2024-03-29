import { Box, Divider, Typography } from "@mui/material";
import { FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { MdSupportAgent } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

import logo from "../../../../assets/logo.png";
import useAuthProvider from "../../../Hooks/useAuthProvider";

const accountSettings = [
  {
    route: "/adminDashBoard/adminProfile",
    icon: <CgProfile className="text-3xl" />,
    title: "My Profile",
  },
  {
    route: "/adminDashBoard/allProperty",
    icon: <HiOutlineHomeModern className="text-3xl" />,
    title: "All Properties",
  },
  {
    route: "/adminDashBoard/allAgent",
    icon: <MdSupportAgent className="text-3xl" />,
    title: "Agent",
  },
  {
    route: "/adminDashBoard/allBuyer",
    icon: <FaUsers className="text-3xl" />,
    title: "Buyer",
  },
];

const AdminLeftSideNav = () => {
  const { user } = useAuthProvider();

  return (
    <>
      <Box className="bg-[#2c3e50] min-h-screen lg:fixed">
        <Box className="flex justify-center p-5 lg:p-10 text-white">
          <div className="w-full">
            <div className="flex items-center mb-10 gap-3">
              <img className="w-14 md:w-16" src={logo} alt="" />
              <Typography variant="h6">
                <p className="font-extrabold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b4397] to-[#dc2430]">
                    LuxeLoom
                  </span>
                  <br />
                  Properties
                </p>
              </Typography>
            </div>
            <div className="my-5">
              <Typography variant="h6">
                <p>{user?.displayName}</p>
              </Typography>
              <Typography variant="subtitle1">
                <p className="mt-2 text-sm">{user?.email}</p>
              </Typography>
            </div>

            <Divider sx={{ backgroundColor: "white" }} />

            <div className="my-8">
              <Typography variant="h4">
                <p>Dash Board</p>
              </Typography>

              <div className="mt-5">
                {accountSettings.map((settings) => (
                  <Link
                    key={settings}
                    className="hover:text-pink-400 duration-500"
                  >
                    <div className="my-6 hover:scale-110 duration-500">
                      <Typography variant="body1">
                        <NavLink
                          to={settings.route}
                          className={({ isActive, isPending }) =>
                            isPending
                              ? "pending"
                              : isActive
                              ? "text-pink-400 text-xl flex items-center gap-2"
                              : "text-xl flex items-center gap-2"
                          }
                        >
                          {settings.icon} {settings.title}
                        </NavLink>
                      </Typography>
                    </div>
                  </Link>
                ))}

                <Divider sx={{ backgroundColor: "white" }} />

                <div className="mt-6">
                  <Link to="/" className="hover:text-blue-400 duration-500">
                    <div className="my-6 hover:scale-110 duration-500">
                      <Typography variant="body1">
                        <p className="flex items-center gap-2">
                          <IoHomeOutline className="text-3xl" /> Back to Home
                        </p>
                      </Typography>
                    </div>
                  </Link>

                  <button className="hover:text-blue-400 hover:scale-110 duration-500">
                    <Typography variant="body1">
                      <p className="flex items-center gap-2">
                        <IoIosLogOut className="text-3xl" /> LogOut
                      </p>
                    </Typography>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default AdminLeftSideNav;
