import { Box, Typography } from "@mui/material";
import useProperties from "../../../Hooks/useProperties";
import PropertyTable from "../PropertyTable/PropertyTable";

const MyProperties = () => {
  const [properties] = useProperties();
  const activeProperties = properties.filter(
    (property) => property.status == "active"
  );
  const pendingProperties = properties.filter(
    (property) => property.status == "pending"
  );

  return (
    <>
      <Box>
        <Box className="mt-5">
          <Typography variant="h4">
            <p className="text-center">My Listing</p>
          </Typography>
        </Box>

        {/* Pending Listing */}
        <Box className="p-5 bg-white rounded-xl mt-10 shadow-xl">
          <Typography variant="h6">
            <p className="mb-3 text-pink-500">Pending List</p>
          </Typography>
         
         <PropertyTable filterProperties={pendingProperties} />
        </Box>


        {/* Active Listing */}
        <Box className="p-5 bg-white rounded-xl mt-10 shadow-xl">
          <Typography variant="h6">
            <p className="mb-3 text-green-500">Active List</p>
          </Typography>
         
         <PropertyTable filterProperties={activeProperties} />
        </Box>
      </Box>
    </>
  );
};

export default MyProperties;
