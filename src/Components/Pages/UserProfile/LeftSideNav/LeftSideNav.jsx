import { Avatar, Box, Divider, Typography } from "@mui/material";

// React Icons
import { MdManageAccounts, MdHistory } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import { IoLanguage, IoLibrarySharp, IoHomeOutline } from "react-icons/io5";
import { IoMdStats, IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

const accountSettings = [
  {
    icon: <MdManageAccounts className="text-3xl" />,
    title: "My Account",
  },
  {
    icon: <FiActivity className="text-3xl" />,
    title: "Activity",
  },
  {
    icon: <IoLanguage className="text-3xl" />,
    title: "Language",
  },
  {
    icon: <IoMdStats className="text-3xl" />,
    title: "Statistic",
  },
  {
    icon: <IoLibrarySharp className="text-3xl" />,
    title: "Library",
  },
  {
    icon: <MdHistory className="text-3xl" />,
    title: "History",
  },
];

const LeftSideNav = () => {
  return (
    <>
      <Box className="bg-[#303030] min-h-screen">
        <Box className="flex justify-center p-10 text-white">
          <div className="w-full">
            <Avatar
              alt="Remy Sharp"
              src="https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg"
              sx={{
                width: { sx: "20", lg: "180px" },
                height: { sx: "20", lg: "180px" },
              }}
            />
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
                        <p className="text-xl flex items-center gap-2">
                          {settings.icon} {settings.title}
                        </p>
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

export default LeftSideNav;
