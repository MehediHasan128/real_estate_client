import { Box, Container, Typography } from "@mui/material";
// Import Image
import img from "../../../../assets/Properties/property1.jpg";

import { motion } from "framer-motion";


import HeadingText from "../../Shared/HeadingText/HeadingText";
import PropertyCard from "../../Shared/PropertyCard/PropertyCard";

const Advertisement = () => {

  return (
    <div className="mb-24">
      <HeadingText heading1={'Latest'} heading2={'Properties'} subHeading={'Discover Your Dream Home Today! Explore our latest properties showcasing exquisite homes in prime locations. From modern apartments to luxurious estates, find the perfect property that matches your lifestyle.'} />
      <Container>
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card1 */}
          <PropertyCard
              img={img}
              location={"Dhaka, Bangladesh"}
              title={"Luxury House in Greenville"}
              price={"860,000"}
              description={
                "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val"
              }
              bed={6}
              bath={5}
              size={190}
              ownerImg={
                "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
              }
              ownerName={"Mehedi Hasan"}
            />
          {/* Card2 */}
          <PropertyCard
              img={img}
              location={"Dhaka, Bangladesh"}
              title={"Luxury House in Greenville"}
              price={"860,000"}
              description={
                "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val"
              }
              bed={6}
              bath={5}
              size={190}
              ownerImg={
                "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
              }
              ownerName={"Mehedi Hasan"}
            />
          {/* Card3 */}
          <PropertyCard
              img={img}
              location={"Dhaka, Bangladesh"}
              title={"Luxury House in Greenville"}
              price={"860,000"}
              description={
                "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val"
              }
              bed={6}
              bath={5}
              size={190}
              ownerImg={
                "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
              }
              ownerName={"Mehedi Hasan"}
            />
        </Box>
        <Box className="mt-10 lg:mt-16 w-fit mx-auto">
          <motion.button
            className="bg-gradient-to-r from-[#7b4397] to-[#dc2430] px-5 py-3 flex items-center gap-2 rounded-xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Typography variant="body1">
              <p className="text-white">See More</p>
            </Typography>
          </motion.button>
        </Box>
      </Container>
    </div>
  );
};

export default Advertisement;
