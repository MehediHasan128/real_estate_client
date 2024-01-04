import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Drawer } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Import Logo
import logo from "../../../../assets/logo.png";

// navItems
const routes = [
  {
    pathName: "/",
    routeElement: "Home",
  },
  {
    pathName: "/about",
    routeElement: "About",
  },
];

// Profile settings
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //   Drawer Menu
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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {routes.map((route) => (
        <>
          <MenuItem>
            <NavLink
              key={route}
              to={route.pathName}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-800 font-semibold"
                  : "font-semibold"
              }
            >
              {route.routeElement}
            </NavLink>
          </MenuItem>
        </>
      ))}
    </Box>
  );

  return (
    <AppBar
      sx={{ backgroundColor: "#1b1b1b", padding: "15px 0" }}
      position="fixed"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Large device logo section */}
          <Box className="hidden lg:flex items-center gap-2">
            <img className="w-16" src={logo} alt="" />
            <Typography
              variant="h6"
              sx={{
                letterSpacing: ".1rem",
              }}
            >
              <p className="font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b4397] to-[#dc2430]">
                  LuxeLoom
                </span>
                <br />
                Properties
              </p>
            </Typography>
          </Box>

          {/* Small device navItems */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </Box>

          {/* Small device logo section */}
          <Box className="w-full flex lg:hidden ">
            <Box className="flex items-center gap-2">
              <img className="w-14" src={logo} alt="" />
              <Typography
                sx={{
                  letterSpacing: ".1rem",
                }}
              >
                <p
                  className="font-semibold
              "
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b4397] to-[#dc2430]">
                    LuxeLoom
                  </span>
                  <br />
                  Properties
                </p>
              </Typography>
            </Box>
          </Box>

          {/* Large device navItems */}
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            {routes.map((route) => (
              <>
                <NavLink
                  key={route}
                  to={route.pathName}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#dc2430] px-5"
                      : "px-5"
                  }
                >
                  {route.routeElement}
                </NavLink>
              </>
            ))}
          </Box>

          {/* Profile section */}
          <Box>
            <Box>
              <Link to="/login">
                <motion.button
                  className="bg-gradient-to-r from-[#7b4397] to-[#dc2430] p-[2px] flex items-center gap-2 rounded-xl"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="bg-[#1b1b1b] px-5 py-2 rounded-xl">Login</div>
                </motion.button>
              </Link>
            </Box>
            {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
