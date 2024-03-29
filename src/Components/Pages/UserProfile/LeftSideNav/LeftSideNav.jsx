import { Box, Divider, Typography } from "@mui/material";
import logo from "../../../../assets/logo.png";

// React Icons
import { MdManageAccounts, MdHistory } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import { IoLanguage, IoLibrarySharp, IoHomeOutline } from "react-icons/io5";
import { IoMdStats, IoIosLogOut } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const accountSettings = [
  {
    route: "/myProfile",
    icon: <MdManageAccounts className="text-3xl" />,
    title: "My Account",
  },
  {
    route: "/activity",
    icon: <FiActivity className="text-3xl" />,
    title: "Activity",
  },
  {
    route: "/language",
    icon: <IoLanguage className="text-3xl" />,
    title: "Language",
  },
  {
    route: "/statistic",
    icon: <IoMdStats className="text-3xl" />,
    title: "Statistic",
  },
  {
    route: "/library",
    icon: <IoLibrarySharp className="text-3xl" />,
    title: "Library",
  },
  {
    route: "/history",
    icon: <MdHistory className="text-3xl" />,
    title: "History",
  },
];

const LeftSideNav = () => {

  return (
    <Box className="bg-[#303030] min-h-screen lg:fixed">
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
              <p>Mehedi Hasan Bayzid</p>
            </Typography>
            <Typography variant="subtitle1">
              <p className="mt-2 text-sm">mehedihasan12926@gmail.com</p>
            </Typography>
          </div>

          <Divider sx={{ backgroundColor: "white" }} />

          <div className="my-8">
            <Typography variant="h4">
              <p>Settings</p>
            </Typography>

            <div className="mt-5">
              {accountSettings.map((settings) => (
                <Link
                  key={settings}
                  className="hover:text-blue-400 duration-500"
                >
                  <div className="my-6 hover:scale-110 duration-500">
                    <Typography variant="body1">
                      <NavLink
                        to={settings.route}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "text-blue-400 text-xl flex items-center gap-2"
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
  );
};

export default LeftSideNav;
