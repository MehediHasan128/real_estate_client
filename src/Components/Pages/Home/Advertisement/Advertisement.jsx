import { Box, Container, Typography } from "@mui/material";

import { motion } from "framer-motion";


import HeadingText from "../../Shared/HeadingText/HeadingText";
import PropertyCard from "../../Shared/PropertyCard/PropertyCard";
import useAllProperties from "../../../Hooks/useAllProperties";
import { useState } from "react";

const Advertisement = () => {

  const [allProperty] = useAllProperties();
  const activeProperties = allProperty.filter(property => property.status == 'active');

  const [open, setOpen] = useState(false);

  return (
    <div className="mb-24">
      <HeadingText heading1={'Latest'} heading2={'Properties'} subHeading={'Discover Your Dream Home Today! Explore our latest properties showcasing exquisite homes in prime locations. From modern apartments to luxurious estates, find the perfect property that matches your lifestyle.'} />
      <Container>
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card1 */}
         {
          open ? <>
            {
              activeProperties.slice(0,6).map(property => <>
                <PropertyCard
                key={property._id}
                img={property.propertyImage}
                state={property.state}
                country={property.country}
                title={property.propertyTitle}
                price={property.price}
                description={property.propertyDescription}
                bed={property.totalRoom}
                bath={property.totalBathroom}
                size={property.propertySize}
                ownerImg={property.ownerImage}
                ownerName={property.ownerName}
                userStatus={property.userStatus}
                id={property._id}
                advertismentFor={property.advertisementType}
               />
             </>)
            }
          </> : <>
            {
              activeProperties.slice(0,3).map(property => <>
                <PropertyCard
                key={property._id}
                img={property.propertyImage}
                state={property.state}
                country={property.country}
                title={property.propertyTitle}
                price={property.price}
                description={property.propertyDescription}
                bed={property.totalRoom}
                bath={property.totalBathroom}
                size={property.propertySize}
                ownerImg={property.ownerImage}
                ownerName={property.ownerName}
                userStatus={property.userStatus}
                id={property._id}
                advertismentFor={property.advertisementType}
               />
             </>)
            }
          </>
         }
        </Box>
        <Box className="mt-10 lg:mt-16 w-fit mx-auto">
          <motion.button
          onClick={() => setOpen(!open)}
            className="bg-gradient-to-r from-[#7b4397] to-[#dc2430] px-5 py-3 flex items-center gap-2 rounded-xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Typography variant="body1">
              <p className="text-white">
                {
                  open ? 'See Less' : 'See More'
                }
              </p>
            </Typography>
          </motion.button>
        </Box>
      </Container>
    </div>
  );
};

export default Advertisement;
