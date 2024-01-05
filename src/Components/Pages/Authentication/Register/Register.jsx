import { Box, Container, Divider, Typography } from "@mui/material";
import "./Register.css";
import { Link } from "react-router-dom";

// Import react icons
import { FaRegUser, FaRegEyeSlash, FaRegEye, FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdOutlineMailOutline, MdOutlineLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const Register = () => {

    const [showPass, setShowPass] = useState(false);

  return (
    <div className="registerBg">
      <Container>
        <Box className="flex justify-center items-center min-h-screen">
          <Box className="w-full flex flex-col lg:flex-row mt-32 mb-10 lg:mb-0 lg:mt-24">
            <Box className="lg:w-[50%] bg-[#111111] rounded-t-lg lg:rounded-l-lg text-white flex justify-center items-center px-5 py-10 lg:py-0 bg-opacity-30 backdrop-blur-md">
              <div>
                <Typography>
                  <p>Welcome to</p>
                </Typography>
                <Typography variant="h3">
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#70318f] to-[#f01f2d] font-semibold tracking-wider">
                    LuxeLoom
                  </p>
                </Typography>
                <Typography variant="body1">
                  <p className="text-lg tracking-[0.96em]">Properties</p>
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
                      Already have an account?{" "}
                      <Link to="/login">
                        <span className="font-medium text-blue-500">
                          Login Now
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
                  <p className="font-medium text-center">Register Now</p>
                  <hr className="w-[15%] mx-auto mt-3 border-2 border-[#f01f2d]" />
                </Typography>

                {/* refistration form */}
                <Box className="mt-10 px-10">
                  <form className="space-y-3">
                    <div className="flex gap-5">
                      <Box>
                        <label>
                          <Typography variant="h6">
                            <p>First Name:</p>
                          </Typography>
                        </label>
                        <div className="w-full relative">
                          <div className="w-fit px-4 h-full absolute flex justify-center items-center">
                            <FaRegUser className="text-xl" />
                          </div>
                          <input
                            className="bg-gray-200 pl-14 py-3 rounded-md w-full focus:outline-none"
                            type="text"
                            placeholder="First name"
                          />
                        </div>
                      </Box>
                      <Box>
                        <label>
                          <Typography variant="h6">
                            <p>Last Name:</p>
                          </Typography>
                        </label>
                        <div className="w-full relative">
                          <div className="w-fit px-4 h-full absolute flex justify-center items-center">
                            <FaRegUser className="text-xl" />
                          </div>
                          <input
                            className="bg-gray-200 pl-14 py-3 rounded-md w-full focus:outline-none"
                            type="text"
                            placeholder="Last name"
                          />
                        </div>
                      </Box>
                    </div>
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
                          type={showPass? 'text' : 'password'}
                          placeholder="Enter your password"
                        />
                        <div className="w-fit px-4 h-full absolute flex justify-center items-center top-0 right-0 rounded-r-md">
                          {
                            showPass ?
                            <FaRegEyeSlash onClick={() => setShowPass(!showPass)} className="text-2xl cursor-pointer" /> :
                            <FaRegEye onClick={() => setShowPass(!showPass)} className="text-2xl cursor-pointer" />
                          }
                        </div>
                      </div>
                    </Box>
                    <Box>
                      <label>
                        <Typography variant="h6">
                          <p>Confirm Password:</p>
                        </Typography>
                      </label>
                      <div className="w-full relative">
                        <div className="w-fit px-4 h-full absolute flex justify-center items-center">
                          <MdOutlineLock className="text-2xl" />
                        </div>
                        <input
                          className="bg-gray-200 px-14 py-3 rounded-md w-full focus:outline-none"
                          type={showPass? 'text' : 'password'}
                          placeholder="Confirm your password"
                        />
                        <div className="w-fit px-4 h-full absolute flex justify-center items-center top-0 right-0 rounded-r-md">
                          {
                            showPass ?
                            <FaRegEyeSlash onClick={() => setShowPass(!showPass)} className="text-2xl cursor-pointer" /> :
                            <FaRegEye onClick={() => setShowPass(!showPass)} className="text-2xl cursor-pointer" />
                          }
                        </div>
                      </div>
                    </Box>
                    <Box>
                        <input className="px-5 py-3 w-full bg-[#1b1b1b] rounded-md text-white mt-5" type="submit" value="Register" />
                    </Box>
                  </form>
                <div className="my-10"><Divider>OR</Divider></div>
                <Box className="w-fit mx-auto">
                    <Typography variant="h6">
                        <p className="text-center">Register With</p>
                    </Typography>

                    <Box className="flex gap-4 mt-3">
                        <div className="bg-slate-200 w-fit p-3 rounded-full">
                           <FcGoogle className="text-3xl" /> 
                        </div>
                        <div className="bg-slate-200 w-fit p-3 rounded-full">
                           <FaFacebookF className="text-3xl text-blue-600" /> 
                        </div>
                        <div className="bg-slate-200 w-fit p-3 rounded-full">
                           <FaTwitter className="text-3xl text-blue-600" /> 
                        </div>
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

export default Register;
