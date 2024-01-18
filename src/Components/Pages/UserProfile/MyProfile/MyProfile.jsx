import { Box } from "@mui/material";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const MyProfile = () => {
    return (
        <Box className="flex justify-center items-center min-h-screen">
            <Box className="w-[20%] min-h-screen">
                <LeftSideNav />
            </Box>

            <Box className="w-[80%] min-h-screen border border-red-600">
                <h1>This is main settings</h1>
            </Box>
        </Box>
    );
};

export default MyProfile;