import { Box, Container, Divider, Typography } from "@mui/material";

import { Link } from "react-router-dom";

// Import react icons
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { MdOutlineMailOutline, MdOutlineLock } from "react-icons/md";
import { useState } from "react";
import SocialAuthentication from "../GmailAuthentication/SocialAuthentication";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="registerBg">
      <Container>
        <Box className="flex justify-center items-center min-h-screen">
          <Box className="w-full flex flex-col lg:flex-row mt-32 mb-10 lg:mb-0 lg:mt-24">
            <Box className="lg:w-[50%] bg-[#111111] rounded-t-lg lg:rounded-l-lg text-white flex justify-center items-center px-5 py-10 lg:py-0 bg-opacity-30 backdrop-blur-md">
              <div>
                <Typography variant="h6">
                  <p>Welcome to</p>
                </Typography>
                <Typography variant="h1">
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#70318f] to-[#f01f2d] font-semibold tracking-wider">
                    LuxeLoom
                  </p>
                </Typography>
                <Typography variant="h4">
                  <p className="tracking-[0.96em]">Properties</p>
                </Typography>
                <Typography>
                  <p className="mt-2 lg:text-justify">
                    🏡 Welcome to LuxeLoom Properties! 🌟 Unlock the door to
                    your dream home by joining our exclusive community. Register
                    now to access personalized property recommendations, save
                    your favorite listings, and stay updated on the latest real
                    estate trends. Let{"'"}s embark on this exciting journey
                    together! 🚀 #HomeSweetHome{" "}
                  </p>
                </Typography>
                <div className="mt-5">
                  <Typography>
                    <p>
                      If you don{"'"}t have an account?{" "}
                      <Link to="/register">
                        <span className="font-medium text-blue-500">
                          Register Now
                        </span>
                      </Link>
                    </p>
                  </Typography>
                </div>
              </div>
            </Box>
            <Box className="lg:w-[50%] py-10 bg-white bg-opacity-30 backdrop-blur-md rounded-b-lg lg:rounded-r-lg">
              <Box className="w-full mx-auto">
                <Typography variant="h4">
                  <p className="font-medium text-center">Login Here</p>
                  <hr className="w-[15%] mx-auto mt-3 border-2 border-[#f01f2d]" />
                </Typography>

                {/* refistration form */}
                <Box className="mt-10 px-5 lg:px-10">
                  <form className="space-y-3">
                    <Box>
                      <label>
                        <Typography variant="h6">
                          <p>Email:</p>
                        </Typography>
                      </label>
                      <div className="w-full relative">
                        <div className="w-fit px-4 h-full absolute flex justify-center items-center">
                          <MdOutlineMailOutline className="text-2xl" />
                        </div>
                        <input
                          className="bg-gray-200 pl-14 py-3 rounded-md w-full focus:outline-none"
                          type="email"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </Box>
                    <Box>
                      <label>
                        <Typography variant="h6">
                          <p>Password:</p>
                        </Typography>
                      </label>
                      <div className="w-full relative">
                        <div className="w-fit px-4 h-full absolute flex justify-center items-center">
                          <MdOutlineLock className="text-2xl" />
                        </div>
                        <input
                          className="bg-gray-200 px-14 py-3 rounded-md w-full focus:outline-none"
                          type={showPass ? "text" : "password"}
                          placeholder="Enter your password"
                        />
                        <div className="w-fit px-4 h-full absolute flex justify-center items-center top-0 right-0 rounded-r-md">
                          {showPass ? (
                            <FaRegEyeSlash
                              onClick={() => setShowPass(!showPass)}
                              className="text-2xl cursor-pointer"
                            />
                          ) : (
                            <FaRegEye
                              onClick={() => setShowPass(!showPass)}
                              className="text-2xl cursor-pointer"
                            />
                          )}
                        </div>
                      </div>
                    </Box>
                    <Box>
                      <input
                        className="px-5 py-3 w-full bg-[#1b1b1b] rounded-md text-white mt-5"
                        type="submit"
                        value="Login"
                      />
                    </Box>
                  </form>
                  <div className="my-5 lg:my-10">
                    <Divider>OR</Divider>
                  </div>
                  <Box className="w-fit mx-auto">
                    <Typography variant="h6">
                      <p className="text-center">Login With</p>
                    </Typography>

                    <Box className="flex gap-4 mt-3">
                      <SocialAuthentication />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
