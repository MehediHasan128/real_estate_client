import { Box, Container, Typography } from "@mui/material";
import HeadingText from "../../Shared/HeadingText/HeadingText";

// Import react icons
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { PhotoView } from "react-photo-view";

const LatestUser = () => {
    return (
        <div className="bg-slate-100 py-10">
            <HeadingText heading1={'Real Estate'} heading2={'Agents'} subHeading={'Meet Our Expert Real Estate Agents - Your Key to Seamless Transactions! Discover a team of dedicated professionals ready to guide you through every step of your real estate journey.'} />

            {/* Container */}
            <Container>
                <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* User1 */}
                    <Box className="w-96">
                        <div className="overflow-hidden rounded-2xl">
                            <PhotoView src='https://images.lifestyleasia.com/wp-content/uploads/2019/10/18094733/1128_01_2610.jpg'>
                            <img className="rounded-2xl h-[420px] object-cover brightness-75 hover:brightness-100 duration-500 hover:scale-110 cursor-pointer" src='https://images.lifestyleasia.com/wp-content/uploads/2019/10/18094733/1128_01_2610.jpg' alt="" />
                            </PhotoView>
                        </div>
                        <Box className="mt-5 px-5">
                            <Typography variant="h5">
                                <p className="font-medium">Mehedi Hasan</p>
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
                    {/* User2 */}
                    <Box className="w-96">
                        <div className="overflow-hidden rounded-2xl">
                            <PhotoView src='https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg'>
                            <img className="rounded-2xl h-[420px] object-cover brightness-75 hover:brightness-100 duration-500 hover:scale-110 cursor-pointer" src='https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg' alt="" />
                            </PhotoView>
                        </div>
                        <Box className="mt-5 px-5">
                            <Typography variant="h5">
                                <p className="font-medium">Mehedi Hasan</p>
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
                    {/* User3 */}
                    <Box className="w-96">
                        <div className="overflow-hidden rounded-2xl">
                            <PhotoView src='https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg'>
                            <img className="rounded-2xl h-[420px] object-cover brightness-75 hover:brightness-100 duration-500 hover:scale-110 cursor-pointer" src='https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg' alt="" />
                            </PhotoView>
                        </div>
                        <Box className="mt-5 px-5">
                            <Typography variant="h5">
                                <p className="font-medium">Mehedi Hasan</p>
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
                    {/* User4 */}
                    <Box className="w-96">
                        <div className="overflow-hidden rounded-2xl">
                            <PhotoView src='https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg'>
                            <img className="rounded-2xl h-[420px] object-cover brightness-75 hover:brightness-100 duration-500 hover:scale-110 cursor-pointer" src='https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg' alt="" />
                            </PhotoView>
                        </div>
                        <Box className="mt-5 px-5">
                            <Typography variant="h5">
                                <p className="font-medium">Mehedi Hasan</p>
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
                    {/* User5 */}
                    <Box className="w-96">
                        <div className="overflow-hidden rounded-2xl">
                            <PhotoView src='https://www.wikihow.com/images/9/90/What_type_of_person_are_you_quiz_pic.png'>
                            <img className="rounded-2xl h-[420px] object-cover brightness-75 hover:brightness-100 duration-500 hover:scale-110 cursor-pointer" src='https://www.wikihow.com/images/9/90/What_type_of_person_are_you_quiz_pic.png' alt="" />
                            </PhotoView>
                        </div>
                        <Box className="mt-5 px-5">
                            <Typography variant="h5">
                                <p className="font-medium">Mehedi Hasan</p>
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
                    {/* User6 */}
                    <Box className="w-96">
                        <div className="overflow-hidden rounded-2xl">
                            <PhotoView src='https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B'>
                            <img className="rounded-2xl h-[420px] object-cover brightness-75 hover:brightness-100 duration-500 hover:scale-110 cursor-pointer" src='https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B' alt="" />
                            </PhotoView>
                        </div>
                        <Box className="mt-5 px-5">
                            <Typography variant="h5">
                                <p className="font-medium">Mehedi Hasan</p>
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

                </Box>
            </Container>
        </div>
    );
};

export default LatestUser;