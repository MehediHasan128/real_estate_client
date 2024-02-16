import { Box, Drawer } from "@mui/material";
import { Outlet } from "react-router-dom";
import React from "react";
import { IoMenu } from "react-icons/io5";
import AdminLeftSideNav from "../Pages/AdminDashBoard/AdminLeftSideNav/AdminLeftSideNav";



const AdminLayout = () => {

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
          sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <AdminLeftSideNav />
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
        <AdminLeftSideNav />
        </Box>

        <Box className="w-full p-4 lg:p-3 min-h-screen">
          <Outlet />
        </Box>
      </Box>  
        </>
    );
};

export default AdminLayout;