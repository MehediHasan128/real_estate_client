import { Box, Typography } from "@mui/material";

const HeadingText = ({heading1, heading2, subHeading}) => {
    return (
        <div>
            <Box className="my-20">
        <Box className="w-fit mx-auto mb-8">
          <Typography variant="h3">
            <p className="font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#70318f] to-[#f01f2d]">
                {heading1}
              </span>{" "}
              {heading2}
            </p>
          </Typography>
          <hr className="border-2 w-[30%] mx-auto mt-3 border-[#f01f2d]" />
        </Box>
        <Box className="lg:w-[50%] mx-auto">
          <Typography variant="body1">
            <p className="font-medium text-justify lg:text-center px-3 lg:px-0">
              {subHeading}
            </p>
          </Typography>
        </Box>
      </Box>
        </div>
    );
};

export default HeadingText;