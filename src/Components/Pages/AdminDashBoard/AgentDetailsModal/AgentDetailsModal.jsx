import { Box, Typography } from "@mui/material";

const AgentDetailsModal = ({userInformation}) => {
  
  const {userName, userEmail, profilePicture} = userInformation;

  return (
    <>
      <Box className="mt-5">
        <div className="avatar">
          <div className="w-[70%] mx-auto rounded">
            <img src={profilePicture} />
          </div>
        </div>
        
        <div className="mt-5">
            <Typography variant="h5">
                <p>{userName}</p>
            </Typography>
            <Typography>
                <p>{userEmail}</p>
            </Typography>
        </div>
      </Box>
    </>
  );
};

export default AgentDetailsModal;
