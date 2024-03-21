import { Box, Container, Typography } from "@mui/material";
import HeadingText from "../../Shared/HeadingText/HeadingText";

// Import react icons
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { PhotoView } from "react-photo-view";
import useAllUsers from "../../../Hooks/useAllUsers";

const LatestUser = () => {

    const [allUsers] = useAllUsers();
    const agents = allUsers.filter(agent => agent.userRole == "Agent");


    return (
        <div className="bg-slate-100 py-10">
            <HeadingText heading1={'Real Estate'} heading2={'Agents'} subHeading={'Meet Our Expert Real Estate Agents - Your Key to Seamless Transactions! Discover a team of dedicated professionals ready to guide you through every step of your real estate journey.'} />

            {/* Container */}
            <Container>
                <Box className={(agents.length < 3)? 'flex justify-center gap-5' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'}>

                   {
                    agents.map(agent => <>
                         <Box key={agent._id}>
                        <div className="overflow-hidden rounded-2xl">
                            <PhotoView src={agent.profilePicture}>
                            <img className="rounded-2xl h-[420px] object-cover brightness-75 hover:brightness-100 duration-500 hover:scale-110 cursor-pointer" src={agent.profilePicture} alt="" />
                            </PhotoView>
                        </div>
                        <Box className="mt-5 px-5">
                            <Typography variant="h5">
                                <p className="font-medium">{agent.userName}</p>
                            </Typography>
                            <Typography variant="body1">
                                <p className="text-xs font-medium">REAL ESTATE AGENT</p>
                            </Typography>
                            <div className="mt-3">
                                <Typography className="flex gap-4">
                                    <FaFacebookF className="text-gray-600 text-lg hover:-translate-y-1 duration-500 cursor-pointer hover:text-blue-500" />
                                    <FaInstagram className="text-gray-600 text-lg hover:-translate-y-1 duration-500 cursor-pointer hover:text-red-500" />
                                    <FaLinkedinIn className="text-gray-600 text-lg hover:-translate-y-1 duration-500 cursor-pointer hover:text-blue-700" />
                                    <FaTwitter className="text-gray-600 text-lg hover:-translate-y-1 duration-500 cursor-pointer hover:text-blue-500" />
                                </Typography>
                            </div>
                        </Box>
                    </Box>
                    </>)
                   }

                </Box>
            </Container>
        </div>
    );
};

export default LatestUser;