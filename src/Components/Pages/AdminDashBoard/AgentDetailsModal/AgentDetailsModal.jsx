import { Box, Typography } from "@mui/material";

const AgentDetailsModal = ({ userInformation, handelUpdateAgentStatus }) => {
  const { _id, userName, userEmail, profilePicture, status } = userInformation;

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

          {status == "inActive" ? (
            <>
              <form method="dialog">
              <button
                onClick={() => handelUpdateAgentStatus(_id, "verified")}
                className="px-5 py-3 bg-blue-500 text-white hover:bg-blue-700 duration-500 mt-5 rounded-lg font-semibold w-full"
              >
                Verified
              </button>
              </form>
            </>
          ) : (
            <>
              <button
                disabled
                onClick={() => handelUpdateAgentStatus(_id, "verified")}
                className="px-5 py-3 bg-gray-300 text-gray-600 duration-500 mt-5 rounded-lg font-semibold w-full"
              >
                Verified
              </button>
            </>
          )}
        </div>
      </Box>
    </>
  );
};

export default AgentDetailsModal;
