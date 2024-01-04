import { Box, Typography } from "@mui/material";
import './Banner.css'

const Banner = () => {

    return (
        <div className="background min-h-screen flex items-center bg-fixed px-5 lg:px-64">
            <Box className="flex flex-col lg:flex-row">

                {/* Banner Content */}
                <Box className="text-white">
                    <Typography variant="h6">
                        Welcome To,
                    </Typography>
                    <Typography variant="h1">
                        <p className="tracking-widest font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7b4397] to-[#dc2430]">LuxeLoom</p>
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export default Banner;