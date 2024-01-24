import { Box, Drawer } from "@mui/material";
import LeftSideNav from "../Pages/UserProfile/LeftSideNav/LeftSideNav";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { Outlet } from "react-router-dom";

const UserLayout = () => {


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
          sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 280 }}
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
            <button className="p-2" onClick={toggleDrawer(anchor, true)}>
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


      <Box className="flex justify-center bg-slate-100">
        <Box className="hidden lg:flex w-[20%]">
          <LeftSideNav />
        </Box>

        <Box className="w-[100%] p-4 lg:p-3">
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default UserLayout;
