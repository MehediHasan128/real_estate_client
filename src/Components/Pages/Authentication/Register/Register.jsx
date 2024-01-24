import { Box, Container, Divider, Typography } from "@mui/material";
import "./Register.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Import react icons
import { FaRegUser, FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { MdOutlineMailOutline, MdOutlineLock } from "react-icons/md";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuthProvider from "../../../Hooks/useAuthProvider";
import Swal from "sweetalert2";
import SocialAuthentication from "../GmailAuthentication/SocialAuthentication";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { loading, createUser, setUserName } = useAuthProvider();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();

  // Create a user and stored userInfo on dataBase
  const onSubmit = (data) => {
    const { role, firstName, lastName, email, password, confirmPassword } =
      data;
    const userRole = role;
    const userName = firstName + " " + lastName;
    const userEmail = email;

    const userInfo = { userRole, userName, userEmail };

    if (password == confirmPassword) {
      createUser(email, password).then((userCredential) => {
        const user = userCredential.user;
        if (user.accessToken) {
          setUserName(user, userName)
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.acknowledged) {
              navigate(loading?.state? location.state : '/')
              Swal.fire({
                icon: "success",
                title: "Create your account successfully",
                showConfirmButton: false,
                timer: 1000,
              });
            }
          });
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password don't match",
      });
    }
  };

  // Password icon show and hide
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <div className="registerBg">
      <Container>
        <Box className="flex justify-center items-center min-h-screen text-black">
          <Box className="w-full flex flex-col lg:flex-row mt-32 mb-10">
            <Box className="lg:w-[50%] bg-[#111111] rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg text-white flex justify-center items-center px-5 py-10 lg:py-0 bg-opacity-30 backdrop-blur-md">
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
            <Box className="lg:w-[50%] py-10 bg-white bg-opacity-30 backdrop-blur-md rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg">
              <Box className="w-full mx-auto">
                <Typography variant="h4">
                  <p className="font-medium text-center">Register Now</p>
                  <hr className="w-[15%] mx-auto mt-3 border-2 border-[#f01f2d]" />
                </Typography>

                {/* refistration form */}
                <Box className="mt-5 px-5 lg:px-10">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <Box>
                      <label>
                        <Typography variant="h6">
                          <p>Join As</p>
                        </Typography>
                      </label>
                      <div className="flex gap-3">
                        <label className="flex items-center gap-2 bg-[#1b1b1b] w-fit px-5 py-3 rounded-md text-white">
                          <input
                            {...register("role")}
                            className="cursor-pointer"
                            type="radio"
                            value="Buyer"
                          />
                          <Typography variant="h6">
                            <p>Buyer</p>
                          </Typography>
                        </label>
                        <label className="flex items-center gap-2 bg-[#1b1b1b] w-fit px-5 py-3 rounded-md text-white">
                          <input
                            {...register("role")}
                            className="cursor-pointer"
                            type="radio"
                            value="Agent"
                          />
                          <Typography variant="h6">
                            <p>Agent</p>
                          </Typography>
                        </label>
                      </div>
                    </Box>
                    <Box className="flex gap-5">
                      <Box className="w-full">
                        <label>
                          <Typography variant="h6">
                            <p>First Name</p>
                          </Typography>
                        </label>
                        <div className="w-full relative">
                          <div className="w-fit px-4 h-full absolute flex justify-center items-center">
                            <FaRegUser className="text-xl" />
                          </div>
                          <input
                            {...register("firstName")}
                            className="pl-14 py-3 rounded-md w-full focus:outline-none"
                            type="text"
                            placeholder="First name"
                          />
                        </div>
                      </Box>
                      <Box className="w-full">
                        <label>
                          <Typography variant="h6">
                            <p>Last Name</p>
                          </Typography>
                        </label>
                        <div className="w-full relative">
                          <div className="w-fit px-4 h-full absolute flex justify-center items-center">
                            <FaRegUser className="text-xl" />
                          </div>
                          <input
                            {...register("lastName")}
                            className="pl-14 py-3 rounded-md w-full focus:outline-none"
                            type="text"
                            placeholder="Last name"
                          />
                        </div>
                      </Box>
                    </Box>
                    <Box>
                      <label>
                        <Typography variant="h6">
                          <p>Email</p>
                        </Typography>
                      </label>
                      <div className="w-full relative">
                        <div className="w-fit px-4 h-full absolute flex justify-center items-center">
                          <MdOutlineMailOutline className="text-2xl" />
                        </div>
                        <input
                          {...register("email")}
                          className="pl-14 py-3 rounded-md w-full focus:outline-none"
                          type="email"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </Box>
                    <Box>
                      <label>
                        <Typography variant="h6">
                          <p>Password</p>
                        </Typography>
                      </label>
                      <div className="w-full relative">
                        <div className="w-fit px-4 h-full absolute flex justify-center items-center">
                          <MdOutlineLock className="text-2xl" />
                        </div>
                        <input
                          {...register("password")}
                          className="px-14 py-3 rounded-md w-full focus:outline-none"
                          type={showPass ? "text" : "password"}
                          placeholder="Enter password"
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
                      <label>
                        <Typography variant="h6">
                          <p>Confirm Password</p>
                        </Typography>
                      </label>
                      <div className="w-full relative">
                        <div className="w-fit px-4 h-full absolute flex justify-center items-center">
                          <MdOutlineLock className="text-2xl" />
                        </div>
                        <input
                          {...register("confirmPassword")}
                          className="px-14 py-3 rounded-md w-full focus:outline-none"
                          type={showConfirmPass ? "text" : "password"}
                          placeholder="Confirm password"
                        />
                        <div className="w-fit px-4 h-full absolute flex justify-center items-center top-0 right-0 rounded-r-md">
                          {showConfirmPass ? (
                            <FaRegEyeSlash
                              onClick={() =>
                                setShowConfirmPass(!showConfirmPass)
                              }
                              className="text-2xl cursor-pointer"
                            />
                          ) : (
                            <FaRegEye
                              onClick={() =>
                                setShowConfirmPass(!showConfirmPass)
                              }
                              className="text-2xl cursor-pointer"
                            />
                          )}
                        </div>
                      </div>
                    </Box>
                    <Box>
                      {loading ? (
                        <>
                          <div className="flex justify-center px-5 py-3 mt-8 cursor-pointer bg-[#1b1b1b] w-full rounded-md text-white">
                            <span className="loading loading-spinner loading-md bg-white"></span>
                          </div>
                        </>
                      ) : (
                        <>
                          <input
                            className="px-5 py-3 mt-5 cursor-pointer bg-[#1b1b1b] w-full rounded-md text-white"
                            type="submit"
                            value="Register"
                          />
                        </>
                      )}
                    </Box>
                  </form>
                  <div className="my-5 lg:my-10">
                    <Divider>OR</Divider>
                  </div>
                  <Box className="w-fit mx-auto">
                    <Typography variant="h6">
                      <p className="text-center">Register With</p>
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

export default Register;
