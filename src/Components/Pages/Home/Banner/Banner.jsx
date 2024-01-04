import { Box, Typography } from "@mui/material";
import "./Banner.css";

// Import social media Icon
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Banner = () => {
  return (
    <div className="background min-h-screen flex items-center bg-fixed px-5 lg:px-64">
      <Box className="flex flex-col lg:flex-row">
        {/* Banner Content */}
        <Box className="text-white space-y-5 lg:space-y-10">
          {/* Text Content */}
          <Box>
            <Typography variant="h6">Welcome To,</Typography>
            <Typography variant="h1">
              <p className="tracking-widest font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7b4397] to-[#dc2430]">
                LuxeLoom
              </p>
            </Typography>
            <Typography variant="h3">
              <p className="tracking-[0.5em] md:tracking-[0.6em]">Properties</p>
            </Typography>
            <Typography variant="h6">
              <p className="mt-5 text-justify lg:w-[60%]">
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
                    <FacebookIcon sx={{width: '30px', height: '30px'}} />
                </div>
            </Box>
            <Box className="bg-slate-400 w-fit p-[3px] rounded-full bg-gradient-to-r from-[#7b4397] to-[#dc2430] hover:-translate-y-2 duration-500 cursor-pointer">
                <div className="p-1 lg:p-2 bg-black rounded-full">
                    <YouTubeIcon sx={{width: '30px', height: '30px'}} />
                </div>
            </Box>
            <Box className="bg-slate-400 w-fit p-[3px] rounded-full bg-gradient-to-r from-[#7b4397] to-[#dc2430] hover:-translate-y-2 duration-500 cursor-pointer">
                <div className="p-1 lg:p-2 bg-black rounded-full">
                    <InstagramIcon sx={{width: '30px', height: '30px'}} />
                </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Banner;
