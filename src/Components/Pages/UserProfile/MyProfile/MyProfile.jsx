import { Box, Drawer } from "@mui/material";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Profile from "../Profile/Profile";
import React from "react";

import { IoMenu } from "react-icons/io5";

const MyProfile = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 0 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <LeftSideNav />
    </Box>
  );

  return (
    <>
      <div className="flex lg:hidden">
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <button onClick={toggleDrawer(anchor, true)}>
              <IoMenu className="text-4xl" />
            </button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <Box className="flex justify-center items-center min-h-screen">
        <Box className="hidden lg:flex w-[20%] min-h-screen">
          <LeftSideNav />
        </Box>

        <Box className="w-[80%] min-h-screen">
          <Profile />
        </Box>
      </Box>
    </>
  );
};

export default MyProfile;
