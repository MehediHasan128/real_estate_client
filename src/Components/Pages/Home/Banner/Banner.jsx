import "./Banner.css";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Import material icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import BookmarkIcon from "@mui/icons-material/Bookmark";

// Import slider image
import img1 from "../../../../assets/bannerSlider/slider1.jpg";
import img2 from "../../../../assets/bannerSlider/slider2.jpg";
import img3 from "../../../../assets/bannerSlider/slider3.jpg";
import img4 from "../../../../assets/bannerSlider/slider4.jpg";
import img5 from "../../../../assets/bannerSlider/slider5.jpg";

// Swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import SliderImage from "./SliderImage/SliderImage";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="background min-h-screen flex bg-fixed px-5 lg:px-64 pb-24 lg:pb-0">
      <Box className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 mt-36">
        {/* Banner Content */}
        <Box className="text-white space-y-8 lg:space-y-10">
          {/* Text Content */}
          <Box>
            <Typography variant="h6">Welcome To,</Typography>
            <Typography variant="h1">
              <p className="tracking-widest font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#70318f] to-[#f01f2d]">
                LuxeLoom
              </p>
            </Typography>
            <Typography variant="h3">
              <p className="tracking-[0.5em] md:tracking-[0.6em]">Properties</p>
            </Typography>
            <Typography variant="h6">
              <p className="mt-5 text-justify">
                Where Dreams Find a Home. Discover the pinnacle of luxury living
                with our exquisite properties. Your journey to a refined
                lifestyle starts here.
              </p>
            </Typography>
          </Box>

          {/* Social Button */}
          <Box className="flex gap-5 lg:gap-8">
            <Box className="bg-slate-400 w-fit p-[3px] rounded-full bg-gradient-to-r from-[#7b4397] to-[#dc2430] hover:-translate-y-2 duration-500 cursor-pointer">
              <div className="p-1 lg:p-2 bg-black rounded-full">
                <FacebookIcon sx={{ width: "30px", height: "30px" }} />
              </div>
            </Box>
            <Box className="bg-slate-400 w-fit p-[3px] rounded-full bg-gradient-to-r from-[#7b4397] to-[#dc2430] hover:-translate-y-2 duration-500 cursor-pointer">
              <div className="p-1 lg:p-2 bg-black rounded-full">
                <YouTubeIcon sx={{ width: "30px", height: "30px" }} />
              </div>
            </Box>
            <Box className="bg-slate-400 w-fit p-[3px] rounded-full bg-gradient-to-r from-[#7b4397] to-[#dc2430] hover:-translate-y-2 duration-500 cursor-pointer">
              <div className="p-1 lg:p-2 bg-black rounded-full">
                <InstagramIcon sx={{ width: "30px", height: "30px" }} />
              </div>
            </Box>
          </Box>

          {/* Button section */}
          <Box className="flex gap-8">
            <Link to="/allProperties">
              <motion.button
                className="bg-gradient-to-r from-[#7b4397] to-[#dc2430] px-3 md:px-5 py-3 flex items-center gap-2 rounded-xl"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Typography variant="body1">
                  Book Now
                  <BookmarkIcon />
                </Typography>
              </motion.button>
            </Link>
            <Link to="/register">
              <motion.button
                className="bg-gradient-to-r from-[#7b4397] to-[#dc2430] p-[2px] flex items-center gap-2 rounded-xl"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="bg-black px-5 md:px-6 py-3 rounded-xl">Join Us</div>
              </motion.button>
            </Link>
          </Box>
        </Box>

        {/* Banner slider */}
        <Box className="lg:w-[50%]">
          <Swiper
            className="w-[300px] lg:w-[400px] mySwiper"
            effect={"fade"}
            speed={2000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            modules={[EffectFade, Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <SliderImage img={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <SliderImage img={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <SliderImage img={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <SliderImage img={img4} />
            </SwiperSlide>
            <SwiperSlide>
              <SliderImage img={img5} />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </div>
  );
};

export default Banner;
