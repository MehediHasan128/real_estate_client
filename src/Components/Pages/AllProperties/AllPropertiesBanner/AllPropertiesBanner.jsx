import { Box, Typography } from "@mui/material";
import "./AllPropertiesBanner.css";

import { IoSearchOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";

const AllPropertiesBanner = ({printNumber}) => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) =>{
        const {search} = data
        printNumber(search)
    }

  return (
    <div className="allPropertiesBanner py-32 md:py-36 lg:py-36 text-white">
      <Box className="w-[95%] md:w-[80%] lg:w-[70%] mx-auto space-y-5">
        <Box>
          <Typography variant="h2">
            <p className="text-center font-bold">
              Find you dream Properties Here!
            </p>
          </Typography>
        </Box>
        <Box className="lg:w-[80%] mx-auto text-black">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <input
                {...register('search')}
                className="w-full px-5 lg:px-10 py-4 rounded-full text-lg outline-none focus:outline-none"
                type="text"
                placeholder="Search you dream"
              />
              <button className="absolute top-0 right-0 h-full rounded-r-full" type="submit">
                <IoSearchOutline className="text-3xl hover:text-blue-400 duration-500 border-l w-full px-6 lg:px-10" />
              </button>
            </div>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default AllPropertiesBanner;
